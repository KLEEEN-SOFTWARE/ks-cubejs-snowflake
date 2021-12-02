import cubejs, { Query } from '@cubejs-client/core';

import { RESTDataSource } from 'apollo-datasource-rest';
import debug from 'debug';
import { environment } from '../../../../environments/environment';
import { performance } from 'perf_hooks';

const cubejsLogger = debug('cubejs');
const CUBEJS_TOKEN = 'YOUR_TOKEN';

export class Cubejs extends RESTDataSource {
  private cubejsApi;

  constructor() {
    super();

    this.cubejsApi = cubejs(CUBEJS_TOKEN, {
      apiUrl: `${environment.cubeEndPoint}/cubejs-api/v1`,
    });
  }

  async getData(query: Query | Query[]) {
    const startTime = performance.now();
    try {
      const resultSet = await this.cubejsApi.load(query);
      const [rows] = resultSet?.loadResponse?.results ?? [];
      cubejsLogger(JSON.stringify(rows, null, 2));
      return rows;
    } catch (error) {
      console.error(`An error occurred trying to pull data from Cube.js`, error);
    } finally {
      console.log(`${this.dateTimeDifference(startTime)} ms -> executing the request to Cube.js`);
    }
  }

  async getQueryCount(query, options: { countAttribute: string }) {
    const startTime = performance.now();
    try {
      const resultSet = await this.cubejsApi.load(query);
      const [rows] = resultSet?.loadResponse?.results ?? [];
      cubejsLogger(JSON.stringify(rows, null, 2));
      const [counter] = rows?.data;
      return new Number(counter?.[options.countAttribute]);
    } catch (error) {
      console.error(`An error occurred trying to pull data from Cube.js`, error);
    } finally {
      console.log(`${this.dateTimeDifference(startTime)} ms -> executing the request to Cube.js`);
    }
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
      'WEBSales.orderNumber': [
        (row) => transformToKeyValue('id', row['WEBSales.orderNumber']),
        (row) => transformToKeyDisplayValue('sale', row['WEBSales.orderNumber']),
      ],
      'WEBSales.wsQuantityOfItems': [
        (row) => transformToDisplayValue('item', row['WEBSales.wsQuantityOfItems']),
      ],
      WS_SALES_PRICE: [],
      'DATEDim.dDate': [(row) => transformToDisplayValue('timestamp', row['DATEDim.dDate'])],
      'WEBSales.wsNetPaidShipTax': [
        (row) => transformToDisplayValue('netPaidShipTax', row['WEBSales.wsNetPaidShipTax']),
      ],
      'CUSTOMER.cFirstName': [
        (row) =>
          transformToDisplayValue('customer', `${row['CUSTOMER.cFirstName']} ${row['CUSTOMER.cLastName']}`),
      ],
      'CUSTOMER.cLastName': [
        (row) =>
          transformToDisplayValue('customer', `${row['CUSTOMER.cFirstName']} ${row['CUSTOMER.cLastName']}`),
      ],

      S_STORE_NAME: [
        (row) => transformToKeyValue('id', row.S_STORE_NAME),
        (row) => transformToKeyDisplayValue('sale', row.S_STORE_NAME),
      ],
      SS_QUANTITY: [(row) => transformToDisplayValue('item', row.SS_QUANTITY)],
      D_DATE: [(row) => transformToDisplayValue('timestamp', row.D_DATE)],
      SS_NET_PAID_INC_TAX: [(row) => transformToDisplayValue('netPaidShipTax', row.SS_NET_PAID_INC_TAX)],
    };

    //#endregion helper methods

    if (Array.isArray(rows)) {
      const values = rows.map(this.transformToList);
      return values;
    }
    const values = Object.getOwnPropertyNames(rows).map((key) => {
      if (!Object.prototype.hasOwnProperty.call(columnsMap, key)) {
        cubejsLogger(`the column name [${key}] did not have a corresponding transformation`);
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
      ...newRow,
    };
  }

  private dateTimeDifference(startTime: number, endTime: number = performance.now()): number {
    return endTime - startTime;
  }
}
