cube(`CATALOGSales`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CATALOG_SALES"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [],
    },

    csWholesaleCost: {
      sql: `${CUBE}."CS_WHOLESALE_COST"`,
      type: `sum`,
    },

    csExtShipCost: {
      sql: `${CUBE}."CS_EXT_SHIP_COST"`,
      type: `sum`,
    },

    csOrderNumber: {
      sql: `${CUBE}."CS_ORDER_NUMBER"`,
      type: `sum`,
    },

    csExtWholesaleCost: {
      sql: `${CUBE}."CS_EXT_WHOLESALE_COST"`,
      type: `sum`,
    },

    csQuantity: {
      sql: `${CUBE}."CS_QUANTITY"`,
      type: `sum`,
    },

    csExtSalesPrice: {
      sql: `${CUBE}."CS_EXT_SALES_PRICE"`,
      type: `sum`,
    },

    csSalesPrice: {
      sql: `${CUBE}."CS_SALES_PRICE"`,
      type: `sum`,
    },

    csExtListPrice: {
      sql: `${CUBE}."CS_EXT_LIST_PRICE"`,
      type: `sum`,
    },

    csListPrice: {
      sql: `${CUBE}."CS_LIST_PRICE"`,
      type: `sum`,
    },
  },

  dimensions: {},

  dataSource: `default`,
});
