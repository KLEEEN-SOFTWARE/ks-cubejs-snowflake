cube(`STOREReturns`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."STORE_RETURNS"`,

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

    srReturnShipCost: {
      sql: `${CUBE}."SR_RETURN_SHIP_COST"`,
      type: `sum`,
    },

    srTicketNumber: {
      sql: `${CUBE}."SR_TICKET_NUMBER"`,
      type: `sum`,
    },

    srReturnQuantity: {
      sql: `${CUBE}."SR_RETURN_QUANTITY"`,
      type: `sum`,
    },
  },

  dimensions: {},

  dataSource: `default`,
});
