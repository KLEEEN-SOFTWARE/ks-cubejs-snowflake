cube(`CUSTOMERDemographics`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CUSTOMER_DEMOGRAPHICS"`,

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

    cdDepEmployedCount: {
      sql: `${CUBE}."CD_DEP_EMPLOYED_COUNT"`,
      type: `sum`,
    },

    cdDepCollegeCount: {
      sql: `${CUBE}."CD_DEP_COLLEGE_COUNT"`,
      type: `sum`,
    },

    cdDepCount: {
      sql: `${CUBE}."CD_DEP_COUNT"`,
      type: `sum`,
    },
  },

  dimensions: {
    cdMaritalStatus: {
      sql: `${CUBE}."CD_MARITAL_STATUS"`,
      type: `string`,
    },

    cdEducationStatus: {
      sql: `${CUBE}."CD_EDUCATION_STATUS"`,
      type: `string`,
    },

    cdGender: {
      sql: `${CUBE}."CD_GENDER"`,
      type: `string`,
    },

    cdCreditRating: {
      sql: `${CUBE}."CD_CREDIT_RATING"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
