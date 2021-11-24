cube(`CUSTOMER`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CUSTOMER"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [cCustomerId, cLastName, cBirthCountry, cLastReviewDate, cFirstName],
    },
  },

  dimensions: {
    cCustomerId: {
      sql: `${CUBE}."C_CUSTOMER_ID"`,
      type: `string`,
    },
    cCustomerSK: {
      sql: `${CUBE}."C_CUSTOMER_SK"`,
      type: `string`,
      primaryKey: true,
    },

    cSalutation: {
      sql: `${CUBE}."C_SALUTATION"`,
      type: `string`,
    },

    cEmailAddress: {
      sql: `${CUBE}."C_EMAIL_ADDRESS"`,
      type: `string`,
    },

    cLastName: {
      sql: `${CUBE}."C_LAST_NAME"`,
      type: `string`,
    },

    cBirthCountry: {
      sql: `${CUBE}."C_BIRTH_COUNTRY"`,
      type: `string`,
    },

    cLastReviewDate: {
      sql: `${CUBE}."C_LAST_REVIEW_DATE"`,
      type: `string`,
    },

    cLogin: {
      sql: `${CUBE}."C_LOGIN"`,
      type: `string`,
    },

    cPreferredCustFlag: {
      sql: `${CUBE}."C_PREFERRED_CUST_FLAG"`,
      type: `string`,
    },

    cFirstName: {
      sql: `${CUBE}."C_FIRST_NAME"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
