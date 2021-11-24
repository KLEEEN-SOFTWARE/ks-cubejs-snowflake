cube(`PROMOTION`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."PROMOTION"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [pPromoName, pPromoId],
    },

    pCost: {
      sql: `${CUBE}."P_COST"`,
      type: `sum`,
    },
  },

  dimensions: {
    pChannelRadio: {
      sql: `${CUBE}."P_CHANNEL_RADIO"`,
      type: `string`,
    },

    pChannelTv: {
      sql: `${CUBE}."P_CHANNEL_TV"`,
      type: `string`,
    },

    pPromoName: {
      sql: `${CUBE}."P_PROMO_NAME"`,
      type: `string`,
    },

    pChannelEmail: {
      sql: `${CUBE}."P_CHANNEL_EMAIL"`,
      type: `string`,
    },

    pDiscountActive: {
      sql: `${CUBE}."P_DISCOUNT_ACTIVE"`,
      type: `string`,
    },

    pPromoId: {
      sql: `${CUBE}."P_PROMO_ID"`,
      type: `string`,
    },

    pChannelCatalog: {
      sql: `${CUBE}."P_CHANNEL_CATALOG"`,
      type: `string`,
    },

    pChannelDemo: {
      sql: `${CUBE}."P_CHANNEL_DEMO"`,
      type: `string`,
    },

    pChannelDetails: {
      sql: `${CUBE}."P_CHANNEL_DETAILS"`,
      type: `string`,
    },

    pChannelEvent: {
      sql: `${CUBE}."P_CHANNEL_EVENT"`,
      type: `string`,
    },

    pPurpose: {
      sql: `${CUBE}."P_PURPOSE"`,
      type: `string`,
    },

    pChannelDmail: {
      sql: `${CUBE}."P_CHANNEL_DMAIL"`,
      type: `string`,
    },

    pChannelPress: {
      sql: `${CUBE}."P_CHANNEL_PRESS"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
