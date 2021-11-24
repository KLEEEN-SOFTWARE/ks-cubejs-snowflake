cube(`WEBSite`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."WEB_SITE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        webCity,
        webSiteId,
        webName,
        webCompanyName,
        webCountry,
        webStreetName,
        webRecStartDate,
        webRecEndDate,
      ],
    },
  },

  dimensions: {
    webCounty: {
      sql: `${CUBE}."WEB_COUNTY"`,
      type: `string`,
    },

    webClass: {
      sql: `${CUBE}."WEB_CLASS"`,
      type: `string`,
    },

    webMarketManager: {
      sql: `${CUBE}."WEB_MARKET_MANAGER"`,
      type: `string`,
    },

    webManager: {
      sql: `${CUBE}."WEB_MANAGER"`,
      type: `string`,
    },

    webCity: {
      sql: `${CUBE}."WEB_CITY"`,
      type: `string`,
    },

    webStreetType: {
      sql: `${CUBE}."WEB_STREET_TYPE"`,
      type: `string`,
    },

    webMktClass: {
      sql: `${CUBE}."WEB_MKT_CLASS"`,
      type: `string`,
    },

    webMktDesc: {
      sql: `${CUBE}."WEB_MKT_DESC"`,
      type: `string`,
    },

    webSiteId: {
      sql: `${CUBE}."WEB_SITE_ID"`,
      type: `string`,
    },

    webState: {
      sql: `${CUBE}."WEB_STATE"`,
      type: `string`,
    },

    webName: {
      sql: `${CUBE}."WEB_NAME"`,
      type: `string`,
    },

    webStreetNumber: {
      sql: `${CUBE}."WEB_STREET_NUMBER"`,
      type: `string`,
    },

    webCompanyName: {
      sql: `${CUBE}."WEB_COMPANY_NAME"`,
      type: `string`,
    },

    webCountry: {
      sql: `${CUBE}."WEB_COUNTRY"`,
      type: `string`,
    },

    webZip: {
      sql: `${CUBE}."WEB_ZIP"`,
      type: `string`,
    },

    webStreetName: {
      sql: `${CUBE}."WEB_STREET_NAME"`,
      type: `string`,
    },

    webSuiteNumber: {
      sql: `${CUBE}."WEB_SUITE_NUMBER"`,
      type: `string`,
    },

    webRecStartDate: {
      sql: `${CUBE}."WEB_REC_START_DATE"`,
      type: `time`,
    },

    webRecEndDate: {
      sql: `${CUBE}."WEB_REC_END_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
