import { QueryOptions, VizAttributes } from './models';

import { RESTDataSource } from 'apollo-datasource-rest';
import debug from 'debug';
import { performance } from 'perf_hooks';
import snowflake from 'snowflake-sdk';

const snowflakeLogger = debug('snowflake');
snowflake.configure({
  logLevel: 'TRACE',
});

export class Snowflake extends RESTDataSource {
  private connection: snowflake.Connection;
  private isSessionInit: boolean;

  constructor() {
    super();
    this.isSessionInit = false;
    console.log('Creating a connection to snowflake');
    this.connection = snowflake.createConnection({
      account: process.env.CUBEJS_DB_SNOWFLAKE_ACCOUNT,
      username: process.env.CUBEJS_DB_USER,
      password: process.env.CUBEJS_DB_PASS,
      database: process.env.CUBEJS_DB_NAME,
      schema: process.env.CUBEJS_DB_SCHEMA,
      warehouse: process.env.CUBEJS_DB_SNOWFLAKE_WAREHOUSE,
      role: process.env.CUBEJS_DB_SNOWFLAKE_ROLE,
    });
  }

  connect(): Promise<snowflake.Connection> {
    return new Promise((resolve, reject) => {
      console.log('try to connect');
      this.connection.connect(function (err, conn) {
        if (err) {
          console.error('Unable to connect: ' + err.message);
          reject(err);
          return;
        }
        console.log('Successfully connected as id: ' + conn.getId());
        snowflakeLogger('Successfully connected as id: ' + conn.getId());
        resolve(conn);
      });
    });
  }

  async setupSession<T>(): Promise<void> {
    if (this.isSessionInit) {
      return;
    }
    try {
      await this.executeQuery({ sqlText: 'use role sysadmin' });
      await this.executeQuery({ sqlText: 'use warehouse compute_wh' });
      await this.executeQuery({ sqlText: 'use database SNOWFLAKE_SAMPLE_DATA' });
      await this.executeQuery({ sqlText: 'use schema TPCDS_SF10TCL' });
      this.isSessionInit = true;
    } catch (error) {
      console.error(`An error occurred trying to setup the session`, error);
    }
  }

  async execute<T>(options: QueryOptions): Promise<T | undefined> {
    const startTime = performance.now();
    try {
      const rows = (await this.executeQuery(options)) as T;
      return rows;
    } catch (error) {
      console.error(`An error occurred trying to execute [${options.sqlText}]`, error);
    } finally {
      console.log(`${this.dateTimeDifference(startTime)} ms -> executing the request to Snowflake`);
    }
  }

  private async executeQuery(options: QueryOptions): Promise<unknown> {
    return new Promise((resolve, reject) => {
      this.connection.execute({
        sqlText: options.sqlText,
        complete(err, stmt, rows) {
          if (err) {
            console.error('Failed to execute statement due to the following error: ' + err.message);
            reject(err);
            return;
          }
          snowflakeLogger('Successfully executed statement: ' + stmt.getSqlText());
          resolve(rows);
        },
      });
    });
  }

  transformToList(rows: unknown) {
    //#region helper methods

    const transformToDisplayValue = (
      key: string,
      value: string | number,
    ): { [key: string]: { displayValue: string | number } } => ({
      [key]: {
        displayValue: value,
      },
    });

    const transformToKeyValue = (
      key: string,
      value: string | number,
    ): { [key: string]: string | number } => ({
      [key]: value,
    });

    const transformToKeyDisplayValue = (
      key: string,
      value: string | number,
    ): { [key: string]: { id: string | number; displayValue: string | number } } => ({
      [key]: {
        id: value,
        displayValue: value,
      },
    });

    const columnsMap = {
      WS_ORDER_NUMBER: [
        (row) => transformToKeyValue('id', row.WS_ORDER_NUMBER),
        (row) => transformToKeyDisplayValue('sale', row.WS_ORDER_NUMBER),
      ],
      WS_QUANTITY: [(row) => transformToDisplayValue('item', row.WS_QUANTITY)],
      WS_SALES_PRICE: [],
      WS_SOLD_DATE_SK: [(row) => transformToDisplayValue('timestamp', row.WS_SOLD_DATE_SK)],
      WS_NET_PAID_INC_SHIP_TAX: [
        (row) => transformToDisplayValue('netPaidShipTax', row.WS_NET_PAID_INC_SHIP_TAX),
      ],
      C_FIRST_NAME: [(row) => transformToDisplayValue('customer', `${row.C_FIRST_NAME} ${row.C_LAST_NAME}`)],
      C_LAST_NAME: [(row) => transformToDisplayValue('customer', `${row.C_FIRST_NAME} ${row.C_LAST_NAME}`)],

      S_STORE_NAME: [
        (row) => transformToKeyValue('id', row.S_STORE_NAME),
        (row) => transformToKeyDisplayValue('sale', row.S_STORE_NAME),
      ],
      SS_QUANTITY: [(row) => transformToDisplayValue('item', row.SS_QUANTITY)],
      D_DATE: [(row) => transformToDisplayValue('timestamp', row.D_DATE)],
      SS_NET_PAID_INC_TAX: [(row) => transformToDisplayValue('netPaidShipTax', row.SS_NET_PAID_INC_TAX)],

      // ,
      // SS_TICKET_NUMBER,
      // ,
      // SS_SALES_PRICE,
      // SS_SOLD_DATE_SK,
      // ,
      // C_FIRST_NAME,
      // C_LAST_NAME
    };

    //#endregion helper methods

    if (Array.isArray(rows)) {
      const values = rows.map(this.transformToList);
      return values;
    }
    const values = Object.getOwnPropertyNames(rows).map((key) => {
      if (!Object.prototype.hasOwnProperty.call(columnsMap, key)) {
        // console.warn(`the column name [${key}] did not have a corresponding transformation`);
        return [];
      }
      return columnsMap[key].map((t: (row: unknown) => unknown) => t(rows));
    });
    const reduceToObject = (previous, current) => ({
      ...previous,
      ...current,
    });
    const newRow = values.reduce(
      (previous, current) => ({
        ...previous,
        ...current.reduce(reduceToObject, {}),
      }),
      {},
    );
    return {
      displayValue: rows['WS_ORDER_NUMBER'],
      ...newRow,
    };
  }

  transformToViz(rawRows: unknown, props: VizAttributes) {
    const rows = Array.isArray(rawRows) ? rawRows : [rawRows];

    const categories = rows.map((r) => r[props.category]);
    const crossLinking = rows.map((r) => r[props.crossLinking]);
    const results = rows.map((r) => r[props.value]);
    return {
      crossLinking: [crossLinking.map((c) => ({ id: c, $metadata: { entityType: '' } })), []],
      format: {
        xAxis: {
          categories,
          ...props.xAxis,
        },
        yAxis: props.yAxis,
      },
      results,
      series: null,
    };
  }

  disconnect = async () =>
    new Promise((resolve: any, reject: any) => {
      try {
        this.connection.destroy((err: any, _conn: any) => {
          if (err) {
            console.error('Error happen: ' + err.message);
            reject(err);
          } else {
            snowflakeLogger(`Disconnected Snowflake Id: ${this.connection.getId()}`);
            resolve();
          }
        });
      } catch (err) {
        reject(err);
      }
    });

  private dateTimeDifference(startTime: number, endTime: number = performance.now()): number {
    return endTime - startTime;
  }
}
