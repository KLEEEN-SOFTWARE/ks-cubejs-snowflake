import { AuthContext, DataListingArgs, GetListingDataResults } from '../../../types';

import { Snowflake } from '../dataSources/snowflake';

// Widget Summary
// Widget: Most Recent In-Store Sales
// Thing: sale
// Attributes: Timestamp, Customer, NetPaidShipTax, Item
export const object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const { pagination } = input;
  const dataSource = new Snowflake();
  try {
    await dataSource.connect();
    const sqlFrom = `
    from
        STORE_SALES
        join STORE on
          STORE.S_STORE_SK = STORE_SALES.SS_STORE_SK
        join CUSTOMER on
          STORE_SALES.SS_CUSTOMER_SK = CUSTOMER.C_CUSTOMER_SK
        JOIN DATE_DIM ON
            DATE_DIM.D_DATE_SK = STORE_SALES.SS_SOLD_DATE_SK
`;

    const rows = (await dataSource.execute({
      sqlText: `
    select
      S_STORE_NAME,
      SS_TICKET_NUMBER,
      SS_QUANTITY,
      SS_SALES_PRICE,
      D_DATE,
      SS_NET_PAID_INC_TAX,
      C_FIRST_NAME,
      C_LAST_NAME
    ${sqlFrom}
    limit 50 OFFSET ${pagination?.startIndex ?? 0}
`,
    })) as unknown[];

    const [counter] = (await dataSource.execute({
      sqlText: `
    select
        COUNT(1) as TOTAL_ROWS
    from
        STORE_SALES
`,
    })) as unknown[];

    const data = dataSource.transformToList(rows);

    return {
      data,
      format: {},
      pagination: { totalCount: counter?.['TOTAL_ROWS'] || rows.length },
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
      format: {},
      pagination: { totalCount: 0 },
    };
  } finally {
    try {
      await dataSource.disconnect();
    } catch (error) {
      console.log(`An error occurred trying to disconnect.`, error);
    }
  }
};
