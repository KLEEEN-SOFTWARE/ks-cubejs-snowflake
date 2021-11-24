cube(`CALLCenter`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CALL_CENTER"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        ccStreetName,
        ccName,
        ccCallCenterId,
        ccCountry,
        ccDivisionName,
        ccCity,
        ccCompanyName,
        ccRecStartDate,
        ccRecEndDate,
      ],
    },
  },

  dimensions: {
    ccState: {
      sql: `${CUBE}."CC_STATE"`,
      type: `string`,
    },

    ccStreetName: {
      sql: `${CUBE}."CC_STREET_NAME"`,
      type: `string`,
    },

    ccName: {
      sql: `${CUBE}."CC_NAME"`,
      type: `string`,
    },

    ccMarketManager: {
      sql: `${CUBE}."CC_MARKET_MANAGER"`,
      type: `string`,
    },

    ccClass: {
      sql: `${CUBE}."CC_CLASS"`,
      type: `string`,
    },

    ccCallCenterId: {
      sql: `${CUBE}."CC_CALL_CENTER_ID"`,
      type: `string`,
    },

    ccCountry: {
      sql: `${CUBE}."CC_COUNTRY"`,
      type: `string`,
    },

    ccMktDesc: {
      sql: `${CUBE}."CC_MKT_DESC"`,
      type: `string`,
    },

    ccDivisionName: {
      sql: `${CUBE}."CC_DIVISION_NAME"`,
      type: `string`,
    },

    ccHours: {
      sql: `${CUBE}."CC_HOURS"`,
      type: `string`,
    },

    ccZip: {
      sql: `${CUBE}."CC_ZIP"`,
      type: `string`,
    },

    ccCity: {
      sql: `${CUBE}."CC_CITY"`,
      type: `string`,
    },

    ccStreetType: {
      sql: `${CUBE}."CC_STREET_TYPE"`,
      type: `string`,
    },

    ccSuiteNumber: {
      sql: `${CUBE}."CC_SUITE_NUMBER"`,
      type: `string`,
    },

    ccMktClass: {
      sql: `${CUBE}."CC_MKT_CLASS"`,
      type: `string`,
    },

    ccCounty: {
      sql: `${CUBE}."CC_COUNTY"`,
      type: `string`,
    },

    ccManager: {
      sql: `${CUBE}."CC_MANAGER"`,
      type: `string`,
    },

    ccStreetNumber: {
      sql: `${CUBE}."CC_STREET_NUMBER"`,
      type: `string`,
    },

    ccCompanyName: {
      sql: `${CUBE}."CC_COMPANY_NAME"`,
      type: `string`,
    },

    ccRecStartDate: {
      sql: `${CUBE}."CC_REC_START_DATE"`,
      type: `time`,
    },

    ccRecEndDate: {
      sql: `${CUBE}."CC_REC_END_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
