cube(`SHIPMode`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."SHIP_MODE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [smShipModeId],
    },
  },

  dimensions: {
    smType: {
      sql: `${CUBE}."SM_TYPE"`,
      type: `string`,
    },

    smCode: {
      sql: `${CUBE}."SM_CODE"`,
      type: `string`,
    },

    smContract: {
      sql: `${CUBE}."SM_CONTRACT"`,
      type: `string`,
    },

    smShipModeId: {
      sql: `${CUBE}."SM_SHIP_MODE_ID"`,
      type: `string`,
    },

    smCarrier: {
      sql: `${CUBE}."SM_CARRIER"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
