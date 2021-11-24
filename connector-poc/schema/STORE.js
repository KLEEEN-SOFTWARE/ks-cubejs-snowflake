cube(`STORE`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."STORE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        sStreetName,
        sStoreId,
        sCity,
        sDivisionName,
        sStoreName,
        sCompanyName,
        sCountry,
        sRecEndDate,
        sRecStartDate,
      ],
    },
  },

  dimensions: {
    sCounty: {
      sql: `${CUBE}."S_COUNTY"`,
      type: `string`,
    },

    sStreetNumber: {
      sql: `${CUBE}."S_STREET_NUMBER"`,
      type: `string`,
    },

    sMarketDesc: {
      sql: `${CUBE}."S_MARKET_DESC"`,
      type: `string`,
    },

    sZip: {
      sql: `${CUBE}."S_ZIP"`,
      type: `string`,
    },

    sStreetName: {
      sql: `${CUBE}."S_STREET_NAME"`,
      type: `string`,
    },

    sStoreId: {
      sql: `${CUBE}."S_STORE_ID"`,
      type: `string`,
    },

    sSuiteNumber: {
      sql: `${CUBE}."S_SUITE_NUMBER"`,
      type: `string`,
    },

    sStreetType: {
      sql: `${CUBE}."S_STREET_TYPE"`,
      type: `string`,
    },

    sCity: {
      sql: `${CUBE}."S_CITY"`,
      type: `string`,
    },

    sGeographyClass: {
      sql: `${CUBE}."S_GEOGRAPHY_CLASS"`,
      type: `string`,
    },

    sManager: {
      sql: `${CUBE}."S_MANAGER"`,
      type: `string`,
    },

    sHours: {
      sql: `${CUBE}."S_HOURS"`,
      type: `string`,
    },

    sDivisionName: {
      sql: `${CUBE}."S_DIVISION_NAME"`,
      type: `string`,
    },

    sStoreName: {
      sql: `${CUBE}."S_STORE_NAME"`,
      type: `string`,
    },

    sCompanyName: {
      sql: `${CUBE}."S_COMPANY_NAME"`,
      type: `string`,
    },

    sMarketManager: {
      sql: `${CUBE}."S_MARKET_MANAGER"`,
      type: `string`,
    },

    sState: {
      sql: `${CUBE}."S_STATE"`,
      type: `string`,
    },

    sCountry: {
      sql: `${CUBE}."S_COUNTRY"`,
      type: `string`,
    },

    sRecEndDate: {
      sql: `${CUBE}."S_REC_END_DATE"`,
      type: `time`,
    },

    sRecStartDate: {
      sql: `${CUBE}."S_REC_START_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
