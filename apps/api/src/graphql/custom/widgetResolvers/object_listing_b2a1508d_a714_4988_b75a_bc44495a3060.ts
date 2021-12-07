import { AuthContext, DataListingArgs, GetListingDataResults } from '../../../types';

import { Cubejs } from '../dataSources/cubejs';

// Widget Summary
// Widget: Most Recent Web Sales
// Thing: sale
// Attributes: Timestamp, Customer, NetPaidShipTax, Item
export const object_listing_b2a1508d_a714_4988_b75a_bc44495a3060 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  const { pagination } = input;
  const dataSource = new Cubejs();
  try {
    const totalCount = await dataSource.getQueryCount(
      {
        measures: ['WEBSales.count'],
        limit: 1,
      },
      { countAttribute: 'WEBSales.count' },
    );
    const rows = await dataSource.getData({
      dimensions: [
        'WEBSales.orderNumber',
        'WEBSales.wsQuantityOfItems',
        'WEBSales.wsNetPaidShipTax',
        'DATEDim.dDate',
        'CUSTOMER.cCustomerSK',
        'CUSTOMER.cFirstName',
        'CUSTOMER.cLastName',
      ],
      filters: [
        {
          member: 'WEBSales.wsSoldDateSK',
          operator: 'set',
        },
      ],
      limit: 50,
      offset: pagination?.startIndex ?? 0,
      order: [['WEBSales.wsSoldDateSK', 'desc']],
    });

    const data = dataSource.transformToList(rows?.data);

    return {
      data,
      format: {},
      pagination: { totalCount: totalCount ?? rows.length },
    };
  } catch (error) {
    console.error(error);
    return {
      data: error,
      format: {},
      pagination: { totalCount: 0 },
    };
  }
};
