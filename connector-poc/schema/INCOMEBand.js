cube(`INCOMEBand`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."INCOME_BAND"`,

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
  },

  dimensions: {},

  dataSource: `default`,
});
