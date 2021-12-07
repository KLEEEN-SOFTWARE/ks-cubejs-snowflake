import { AuthContext, DataAggregationArgs, GetWidgetDataResult } from '../../../types';

import { Snowflake } from '../dataSources/snowflake';

// Widget Summary
// Widget: Purchase Locations
// Value: sale - Total Count
// Group by: stateMailing - No Aggregation
export const widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  const dataSource = new Snowflake();

  try {
    await dataSource.connect();
    const rows = (await dataSource.execute({
      sqlText: `
    select
        DISTINCT CA_STATE,
        count(WEB_SALES.WS_ORDER_NUMBER) as PURCHASES_BY_LOCATION
    from
        WEB_SALES
        inner join CUSTOMER_ADDRESS on
            WEB_SALES.WS_SHIP_ADDR_SK = CUSTOMER_ADDRESS.CA_ADDRESS_SK
    //Order by WS_SOLD_DATE_SK DESC
    group by
        CA_STATE
`,
    })) as unknown[];

    const data = dataSource.transformToViz(rows, {
      crossLinking: 'CA_STATE',
      category: 'CA_STATE',
      value: 'PURCHASES_BY_LOCATION',
      xAxis: { key: 'stateMailing', type: 'string' },
      yAxis: { key: 'sale', type: 'string' },
    });

    return data;
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    try {
      await dataSource.disconnect();
    } catch (error) {
      console.log(`An error occurred trying to disconnect.`, error);
    }
  }
};
