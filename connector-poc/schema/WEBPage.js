cube(`WEBPage`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."WEB_PAGE"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [wpWebPageId, wpRecEndDate, wpRecStartDate],
    },

    wpImageCount: {
      sql: `${CUBE}."WP_IMAGE_COUNT"`,
      type: `sum`,
    },

    wpMaxAdCount: {
      sql: `${CUBE}."WP_MAX_AD_COUNT"`,
      type: `sum`,
    },

    wpCharCount: {
      sql: `${CUBE}."WP_CHAR_COUNT"`,
      type: `sum`,
    },

    wpLinkCount: {
      sql: `${CUBE}."WP_LINK_COUNT"`,
      type: `sum`,
    },
  },

  dimensions: {
    wpUrl: {
      sql: `${CUBE}."WP_URL"`,
      type: `string`,
    },

    wpAutogenFlag: {
      sql: `${CUBE}."WP_AUTOGEN_FLAG"`,
      type: `string`,
    },

    wpWebPageId: {
      sql: `${CUBE}."WP_WEB_PAGE_ID"`,
      type: `string`,
    },

    wpType: {
      sql: `${CUBE}."WP_TYPE"`,
      type: `string`,
    },

    wpRecEndDate: {
      sql: `${CUBE}."WP_REC_END_DATE"`,
      type: `time`,
    },

    wpRecStartDate: {
      sql: `${CUBE}."WP_REC_START_DATE"`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
