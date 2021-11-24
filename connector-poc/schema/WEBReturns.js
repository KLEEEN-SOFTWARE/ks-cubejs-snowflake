cube(`WEBReturns`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."WEB_RETURNS"`,

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

    wrReturnQuantity: {
      sql: `${CUBE}."WR_RETURN_QUANTITY"`,
      type: `sum`,
    },

    wrOrderNumber: {
      sql: `${CUBE}."WR_ORDER_NUMBER"`,
      type: `sum`,
    },

    wrReturnShipCost: {
      sql: `${CUBE}."WR_RETURN_SHIP_COST"`,
      type: `sum`,
    },
  },

  dimensions: {},

  dataSource: `default`,
});
