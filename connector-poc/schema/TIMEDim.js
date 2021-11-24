cube(`TIMEDim`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."TIME_DIM"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [tTimeId],
    },
  },

  dimensions: {
    tAmPm: {
      sql: `${CUBE}."T_AM_PM"`,
      type: `string`,
    },

    tMealTime: {
      sql: `${CUBE}."T_MEAL_TIME"`,
      type: `string`,
    },

    tShift: {
      sql: `${CUBE}."T_SHIFT"`,
      type: `string`,
    },

    tSubShift: {
      sql: `${CUBE}."T_SUB_SHIFT"`,
      type: `string`,
    },

    tTimeId: {
      sql: `${CUBE}."T_TIME_ID"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
