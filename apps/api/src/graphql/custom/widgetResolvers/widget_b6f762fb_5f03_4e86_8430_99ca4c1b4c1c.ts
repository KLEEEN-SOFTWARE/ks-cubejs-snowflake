import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import { Snowflake } from '../dataSources/snowflake';

// Widget Summary
// Widget: Popular Deals This Month
// Value: sale - Total Count
// Group by: promotion - No Aggregation
export const widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  const dataSource = new Snowflake();

  try {
    await dataSource.connect();
    const rows = (await dataSource.execute({
      sqlText: `
    select
        P_PROMO_SK,
        I_ITEM_SK,
        I_PRODUCT_NAME,
        P_PROMO_NAME,
        P_CHANNEL_DETAILS,
        P_COST,
        COUNT(ITEM.*) AS SALES
    from
        PROMOTION
        JOIN ITEM ON
            ITEM.I_ITEM_SK = P_ITEM_SK
        JOIN DATE_DIM ON
            PROMOTION.P_START_DATE_SK = DATE_DIM.D_DATE_SK
            AND DATE_DIM.D_DATE BETWEEN '1990-11-07' AND '2002-11-15'
    GROUP BY

        P_PROMO_SK,
        I_ITEM_SK,
        I_PRODUCT_NAME,
        P_PROMO_NAME,
        P_CHANNEL_DETAILS,
        P_COST
    ORDER BY
        SALES DESC
    LIMIT 20;
`,
    })) as unknown[];

    const data = dataSource.transformToViz(rows, {
      crossLinking: 'P_PROMO_SK',
      category: 'P_CHANNEL_DETAILS',
      value: 'SALES',
      xAxis: { key: 'promotion', type: 'string' },
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
