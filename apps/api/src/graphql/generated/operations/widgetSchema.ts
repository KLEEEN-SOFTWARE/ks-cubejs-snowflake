/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    crossLinking: JSON
    format: JSON
    results: JSON
    series: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    attributes: JSON!
    entity: String!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

  type Filters {
    accessLevel: AccessLevel!
    name: String!
    statisticalType: String!
  }

  type WorkflowFiltersResult {
    filters: [Filters!]!
  }

    extend type Query {
          # Widget Summary
    # Widget: Add to Promotion Track
    # Thing: customer
    custom_action_8211fb91_2932_4d60_8dcb_536d7f121670(input: CustomActionArgs): CustomActionResults

    # Widget Summary
    # View: itemProfile
    # Widget: Key Information
    # Value: sale
    # Widget type: behavior
    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: itemProfile
    # Widget: Key Information
    # Value: itemCategory - No Aggregation
    # Widget type: behavior
    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: itemProfile
    # Widget: Key Information
    # Value: itemClass - No Aggregation
    # Widget type: behavior
    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: itemProfile
    # Widget: Key Information
    # Value: manufacturer - No Aggregation
    # Widget type: behavior
    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: itemProfile
    # Widget: Key Information
    # Value: quantityOnHand - Trend Vs Start Sparkline
    # Widget type: behavior
    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: customerId - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: firstName - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: lastName - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: stateMailing - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: countryMailing - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: cityMailing - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: addrTypeMailing - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: ageBracket - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: contactEmail - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: gender - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: creditRating - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: customerProfile
    # Widget: Summary Drawer 1
    # Value: maritalStatus - No Aggregation
    # Widget type: behavior
    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Most Active Customers This Month
    # Thing: customer
    # Attributes: Customer, Sale, CreditRating, CountryMailing
    object_listing_15675209_b48f_49e8_8e43_025fa1f15593(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Customer Profile
    # Widget: Purchases
    # Thing: Sale
    # Attributes: timestamp, sale, saleType, item, netPaidShipTax
    # Widget type: goal
    object_listing_2b8b423f_924d_4166_af75_ac626ae4e974(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Customers
    # Widget: Customer List
    # Thing: Customer
    # Attributes: customer, ageBracket, sale, creditRating, maritalStatus, gender
    # Widget type: goal
    object_listing_2ea40cee_8bfb_4377_b913_940375698bec(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Item Profile
    # Widget: Sales
    # Thing: Sale
    # Attributes: timestamp, customer, netProfit, netPaidShipTax, saleType
    # Widget type: goal
    object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Most Recent Web Sales
    # Thing: sale
    # Attributes: Timestamp, Customer, NetPaidShipTax, Item
    object_listing_b2a1508d_a714_4988_b75a_bc44495a3060(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Most Recent In-Store Sales
    # Thing: sale
    # Attributes: Timestamp, Customer, NetPaidShipTax, Item
    object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Most Recent Catalogue Sales
    # Thing: sale
    # Attributes: Timestamp, NetPaidShipTax, Customer, Item
    object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Sales
    # Widget: List of Sales
    # Thing: Sale
    # Attributes: timestamp, customer, netPaidShipTax, saleType, item, promotion
    # Widget type: goal
    object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Items & Inventory
    # Widget: List of Items
    # Thing: Item
    # Attributes: item, quantityOnHand, sale, itemCategory, itemClass, manufacturer
    # Widget type: goal
    object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Spending Trend
    # Value: netPaidShipTax - Max
    # Group by: timestamp - No Aggregation
    widget_1b258c64_46b2_48bf_85c7_87a9af56f29b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sales by Promotion Code
    # Value: sale - Total Count
    # Group by: promotion - No Aggregation
    widget_40ff3ba8_da40_4f55_8417_1ce42eca814c(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Sold Items This Week
    # Value: sale - Total Count
    # Group by: item - No Aggregation
    widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Sold States
    # Value: netPaidShipTax - Sum
    # Group by: stateMailing - No Aggregation
    widget_5a6aac69_378c_4db4_870a_07c7884da497(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Age Brackets
    # Value: customer - Total Count
    # Group by: ageBracket - No Aggregation
    widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Profit
    # Value: netProfit - Max
    # Group by: timestamp - No Aggregation
    widget_60d95e2f_c9f8_424a_bf59_ee585d26155b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Popular Items
    # Value: sale - Total Count
    # Group by: item - No Aggregation
    widget_67329fba_e7b8_4d54_acbc_f79b19fa526a(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Popular Items
    # Value: item - Total Count
    # Group by: sale - No Aggregation
    widget_67ed8996_b996_4b29_b207_ca33b72020e7(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Inventory Levels
    # Value: quantityOnHand - Max
    # Group by: item - No Aggregation
    widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Profitable Items
    # Value: netProfit - Average
    # Group by: item - No Aggregation
    widget_6d65bb0c_4f7e_4780_8060_0893663e5962(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Items Sold Trend
    # Value: item - Total Count
    # Group by: timestamp
    widget_826ce452_a589_4876_b00e_34eb934a5d3d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Items with Lowest Inventory
    # Value: quantityOnHand - Max
    # Group by: item - No Aggregation
    widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Credit Scores
    # Value: customer - Total Count
    # Group by: creditRating - No Aggregation
    widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Martial Status
    # Value: customer - Total Count
    # Group by: maritalStatus - No Aggregation
    widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Popular Deals This Month
    # Value: sale - Total Count
    # Group by: promotion - No Aggregation
    widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Profit Change
    # Value: netProfit - Max
    # Group by: timestamp - No Aggregation
    widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Favorite Categories
    # Value: sale - Total Count
    # Group by: itemCategory - No Aggregation
    widget_bdeefbc9_99c5_4565_9330_36f42293084f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Purchase Locations
    # Value: sale - Total Count
    # Group by: stateMailing - No Aggregation
    widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Favorite Brands
    # Value: manufacturer - Total Count
    # Group by: sale - No Aggregation
    widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Gender Breakdown
    # Value: customer - Total Count
    # Group by: gender - No Aggregation
    widget_dc314cf7_680e_491b_bfeb_e8136a8ef693(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Manufacturers
    # Value: item - Total Count
    # Group by: manufacturer - No Aggregation
    widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Purchase Summary
    # Value: sale
    widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Credit Rating
    # Value: creditRating
    widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Filter Bar
    # View: itemsInventory
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574: WorkflowFiltersResult

    # Filter Bar
    # View: sales
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69: WorkflowFiltersResult

    # Filter Bar
    # View: customers
    # Widget: Filter 1
    # Widget type: behavior
    workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0: WorkflowFiltersResult
    }
  `;
