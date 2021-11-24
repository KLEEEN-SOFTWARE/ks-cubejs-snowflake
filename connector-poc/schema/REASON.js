cube(`REASON`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."REASON"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [rReasonId],
    },
  },

  dimensions: {
    rReasonId: {
      sql: `${CUBE}."R_REASON_ID"`,
      type: `string`,
    },

    rReasonDesc: {
      sql: `${CUBE}."R_REASON_DESC"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
