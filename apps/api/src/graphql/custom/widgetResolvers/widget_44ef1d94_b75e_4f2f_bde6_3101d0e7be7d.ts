import { AuthContext, DataAggregationArgs, GetWidgetDataResult } from '../../../types';

import { Snowflake } from '../dataSources/snowflake';

// Widget Summary
// Widget: Most Sold Items This Week
// Value: sale - Total Count
// Group by: item - No Aggregation
export const widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  const dataSource = new Snowflake();
  try {
    await dataSource.connect();

    const rows = (await dataSource.execute({
      sqlText: `
    select
        I_ITEM_SK,
        I_PRODUCT_NAME,
        COUNT(STORE_SALES.*) AS SALES
    from
        STORE_SALES
        JOIN DATE_DIM ON
            STORE_SALES.SS_SOLD_DATE_SK = DATE_DIM.D_DATE_SK
            AND DATE_DIM.D_DATE BETWEEN '2002-11-07' AND '2002-11-15'
        JOIN ITEM ON
            ITEM.I_ITEM_SK = STORE_SALES.SS_ITEM_SK
    GROUP BY
        I_ITEM_SK,
        I_PRODUCT_NAME
    UNION ALL
    select
        I_ITEM_SK,
        I_PRODUCT_NAME,
        COUNT(WEB_SALES.*) AS SALES
    from
        WEB_SALES
        JOIN DATE_DIM ON
            WEB_SALES.WS_SOLD_DATE_SK = DATE_DIM.D_DATE_SK
            AND DATE_DIM.D_DATE BETWEEN '2002-11-07' AND '2002-11-15'
        JOIN ITEM ON
            ITEM.I_ITEM_SK = WEB_SALES.WS_ITEM_SK
    GROUP BY
        I_ITEM_SK,
        I_PRODUCT_NAME
    ORDER BY SALES DESC
    LIMIT 20;
`,
    })) as unknown[];

    const data = dataSource.transformToViz(rows, {
      crossLinking: 'I_ITEM_SK',
      category: 'I_PRODUCT_NAME',
      value: 'SALES',
      xAxis: { key: 'item', type: 'string' },
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
