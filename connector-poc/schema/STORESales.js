cube(`STORESales`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."STORE_SALES"`,

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

    ssSalesPrice: {
      sql: `${CUBE}."SS_SALES_PRICE"`,
      type: `sum`,
    },

    ssTicketNumber: {
      sql: `${CUBE}."SS_TICKET_NUMBER"`,
      type: `sum`,
    },

    ssQuantity: {
      sql: `${CUBE}."SS_QUANTITY"`,
      type: `sum`,
    },

    ssExtSalesPrice: {
      sql: `${CUBE}."SS_EXT_SALES_PRICE"`,
      type: `sum`,
    },

    ssListPrice: {
      sql: `${CUBE}."SS_LIST_PRICE"`,
      type: `sum`,
    },

    ssExtListPrice: {
      sql: `${CUBE}."SS_EXT_LIST_PRICE"`,
      type: `sum`,
    },

    ssExtWholesaleCost: {
      sql: `${CUBE}."SS_EXT_WHOLESALE_COST"`,
      type: `sum`,
    },

    ssWholesaleCost: {
      sql: `${CUBE}."SS_WHOLESALE_COST"`,
      type: `sum`,
    },
  },

  dimensions: {},

  dataSource: `default`,
});
