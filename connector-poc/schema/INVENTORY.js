cube(`INVENTORY`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."INVENTORY"`,

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
