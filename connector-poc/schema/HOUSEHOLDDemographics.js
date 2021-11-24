cube(`HOUSEHOLDDemographics`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."HOUSEHOLD_DEMOGRAPHICS"`,

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

    hdVehicleCount: {
      sql: `${CUBE}."HD_VEHICLE_COUNT"`,
      type: `sum`,
    },

    hdDepCount: {
      sql: `${CUBE}."HD_DEP_COUNT"`,
      type: `sum`,
    },
  },

  dimensions: {
    hdBuyPotential: {
      sql: `${CUBE}."HD_BUY_POTENTIAL"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
