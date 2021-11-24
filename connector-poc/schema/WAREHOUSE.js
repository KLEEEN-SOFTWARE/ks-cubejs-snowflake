cube(`WAREHOUSE`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."WAREHOUSE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [wWarehouseId, wCity, wStreetName, wWarehouseName, wCountry],
    },
  },

  dimensions: {
    wWarehouseId: {
      sql: `${CUBE}."W_WAREHOUSE_ID"`,
      type: `string`,
    },

    wZip: {
      sql: `${CUBE}."W_ZIP"`,
      type: `string`,
    },

    wCity: {
      sql: `${CUBE}."W_CITY"`,
      type: `string`,
    },

    wStreetName: {
      sql: `${CUBE}."W_STREET_NAME"`,
      type: `string`,
    },

    wWarehouseName: {
      sql: `${CUBE}."W_WAREHOUSE_NAME"`,
      type: `string`,
    },

    wStreetNumber: {
      sql: `${CUBE}."W_STREET_NUMBER"`,
      type: `string`,
    },

    wCountry: {
      sql: `${CUBE}."W_COUNTRY"`,
      type: `string`,
    },

    wState: {
      sql: `${CUBE}."W_STATE"`,
      type: `string`,
    },

    wSuiteNumber: {
      sql: `${CUBE}."W_SUITE_NUMBER"`,
      type: `string`,
    },

    wCounty: {
      sql: `${CUBE}."W_COUNTY"`,
      type: `string`,
    },

    wStreetType: {
      sql: `${CUBE}."W_STREET_TYPE"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
