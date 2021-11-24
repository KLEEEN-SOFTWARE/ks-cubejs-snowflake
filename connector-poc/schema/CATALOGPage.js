cube(`CATALOGPage`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."CATALOG_PAGE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [cpCatalogPageId],
    },

    cpCatalogPageNumber: {
      sql: `${CUBE}."CP_CATALOG_PAGE_NUMBER"`,
      type: `sum`,
    },

    cpCatalogNumber: {
      sql: `${CUBE}."CP_CATALOG_NUMBER"`,
      type: `sum`,
    },
  },

  dimensions: {
    cpType: {
      sql: `${CUBE}."CP_TYPE"`,
      type: `string`,
    },

    cpDepartment: {
      sql: `${CUBE}."CP_DEPARTMENT"`,
      type: `string`,
    },

    cpDescription: {
      sql: `${CUBE}."CP_DESCRIPTION"`,
      type: `string`,
    },

    cpCatalogPageId: {
      sql: `${CUBE}."CP_CATALOG_PAGE_ID"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
