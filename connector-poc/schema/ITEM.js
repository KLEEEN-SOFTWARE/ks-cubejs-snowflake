cube(`ITEM`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."ITEM"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [iItemId, iProductName, iRecStartDate, iRecEndDate],
    },

    iWholesaleCost: {
      sql: `${CUBE}."I_WHOLESALE_COST"`,
      type: `sum`,
    },

    iCurrentPrice: {
      sql: `${CUBE}."I_CURRENT_PRICE"`,
      type: `sum`,
    },
  },

  dimensions: {
    iCategory: {
      sql: `${CUBE}."I_CATEGORY"`,
      type: `string`,
    },

    iItemDesc: {
      sql: `${CUBE}."I_ITEM_DESC"`,
      type: `string`,
    },

    iContainer: {
      sql: `${CUBE}."I_CONTAINER"`,
      type: `string`,
    },

    iSize: {
      sql: `${CUBE}."I_SIZE"`,
      type: `string`,
    },

    iItemId: {
      sql: `${CUBE}."I_ITEM_ID"`,
      type: `string`,
    },

    iManufact: {
      sql: `${CUBE}."I_MANUFACT"`,
      type: `string`,
    },

    iProductName: {
      sql: `${CUBE}."I_PRODUCT_NAME"`,
      type: `string`,
    },

    iUnits: {
      sql: `${CUBE}."I_UNITS"`,
      type: `string`,
    },

    iBrand: {
      sql: `${CUBE}."I_BRAND"`,
      type: `string`,
    },

    iColor: {
      sql: `${CUBE}."I_COLOR"`,
      type: `string`,
    },

    iFormulation: {
      sql: `${CUBE}."I_FORMULATION"`,
      type: `string`,
    },

    iClass: {
      sql: `${CUBE}."I_CLASS"`,
      type: `string`,
    },

    iRecStartDate: {
      sql: `${CUBE}."I_REC_START_DATE"`,
      type: `time`,
    },

    iRecEndDate: {
      sql: `${CUBE}."I_REC_END_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
