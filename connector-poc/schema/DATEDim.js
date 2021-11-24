cube(`DATEDim`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."DATE_DIM"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [dDateId, dHoliday, dDayName, dQuarterName, dFollowingHoliday, dDate],
    },
  },

  dimensions: {
    dDateSK: {
      sql: `${CUBE}."D_DATE_SK"`,
      type: `string`,
      primaryKey: true,
    },

    dDateId: {
      sql: `${CUBE}."D_DATE_ID"`,
      type: `string`,
    },

    dCurrentMonth: {
      sql: `${CUBE}."D_CURRENT_MONTH"`,
      type: `string`,
    },

    dCurrentQuarter: {
      sql: `${CUBE}."D_CURRENT_QUARTER"`,
      type: `string`,
    },

    dHoliday: {
      sql: `${CUBE}."D_HOLIDAY"`,
      type: `string`,
    },

    dCurrentWeek: {
      sql: `${CUBE}."D_CURRENT_WEEK"`,
      type: `string`,
    },

    dDayName: {
      sql: `${CUBE}."D_DAY_NAME"`,
      type: `string`,
    },

    dQuarterName: {
      sql: `${CUBE}."D_QUARTER_NAME"`,
      type: `string`,
    },

    dFollowingHoliday: {
      sql: `${CUBE}."D_FOLLOWING_HOLIDAY"`,
      type: `string`,
    },

    dCurrentYear: {
      sql: `${CUBE}."D_CURRENT_YEAR"`,
      type: `string`,
    },

    dCurrentDay: {
      sql: `${CUBE}."D_CURRENT_DAY"`,
      type: `string`,
    },

    dWeekend: {
      sql: `${CUBE}."D_WEEKEND"`,
      type: `string`,
    },

    dDate: {
      sql: `${CUBE}."D_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
