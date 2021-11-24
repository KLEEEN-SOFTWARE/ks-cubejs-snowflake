import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';
import { Snowflake } from '../dataSources/snowflake';

// Widget Summary
// Widget: Items with Lowest Inventory
// Value: quantityOnHand - Max
// Group by: item - No Aggregation
export const widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012 = async (
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
        I_BRAND,
        INV_QUANTITY_ON_HAND
    from
        INVENTORY
        inner join ITEM on
            INVENTORY.INV_ITEM_SK = ITEM.I_ITEM_SK
    WHERE
        INV_QUANTITY_ON_HAND IS NOT NULL
    ORDER BY INV_QUANTITY_ON_HAND
    LIMIT 100;
`,
    })) as unknown[];

    const data = dataSource.transformToViz(rows, {
      crossLinking: 'I_PRODUCT_NAME',
      category: 'I_PRODUCT_NAME',
      value: 'INV_QUANTITY_ON_HAND',
      xAxis: { key: 'item', type: 'string' },
      yAxis: { key: 'quantityOnHand', type: 'number' },
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
