cube(`CUSTOMERAddress`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CUSTOMER_ADDRESS"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [caCity, caCountry, caStreetName, caAddressId],
    },
  },

  dimensions: {
    caStreetNumber: {
      sql: `${CUBE}."CA_STREET_NUMBER"`,
      type: `string`,
    },

    caCity: {
      sql: `${CUBE}."CA_CITY"`,
      type: `string`,
    },

    caCountry: {
      sql: `${CUBE}."CA_COUNTRY"`,
      type: `string`,
    },

    caState: {
      sql: `${CUBE}."CA_STATE"`,
      type: `string`,
    },

    caLocationType: {
      sql: `${CUBE}."CA_LOCATION_TYPE"`,
      type: `string`,
    },

    caStreetName: {
      sql: `${CUBE}."CA_STREET_NAME"`,
      type: `string`,
    },

    caStreetType: {
      sql: `${CUBE}."CA_STREET_TYPE"`,
      type: `string`,
    },

    caZip: {
      sql: `${CUBE}."CA_ZIP"`,
      type: `string`,
    },

    caSuiteNumber: {
      sql: `${CUBE}."CA_SUITE_NUMBER"`,
      type: `string`,
    },

    caAddressId: {
      sql: `${CUBE}."CA_ADDRESS_ID"`,
      type: `string`,
    },

    caCounty: {
      sql: `${CUBE}."CA_COUNTY"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
