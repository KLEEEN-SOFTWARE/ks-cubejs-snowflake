cube(`DBGENVersion`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."DBGEN_VERSION"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [dvCreateDate],
    },
  },

  dimensions: {
    dvCmdlineArgs: {
      sql: `${CUBE}."DV_CMDLINE_ARGS"`,
      type: `string`,
    },

    dvCreateTime: {
      sql: `${CUBE}."DV_CREATE_TIME"`,
      type: `string`,
    },

    dvVersion: {
      sql: `${CUBE}."DV_VERSION"`,
      type: `string`,
    },

    dvCreateDate: {
      sql: `${CUBE}."DV_CREATE_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
