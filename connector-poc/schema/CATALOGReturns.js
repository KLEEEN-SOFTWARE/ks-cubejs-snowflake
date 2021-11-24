cube(`CATALOGReturns`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CATALOG_RETURNS"`,

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

    crOrderNumber: {
      sql: `${CUBE}."CR_ORDER_NUMBER"`,
      type: `sum`,
    },

    crReturnAmount: {
      sql: `${CUBE}."CR_RETURN_AMOUNT"`,
      type: `sum`,
    },

    crReturnQuantity: {
      sql: `${CUBE}."CR_RETURN_QUANTITY"`,
      type: `sum`,
    },

    crReturnShipCost: {
      sql: `${CUBE}."CR_RETURN_SHIP_COST"`,
      type: `sum`,
    },
  },

  dimensions: {},

  dataSource: `default`,
});
