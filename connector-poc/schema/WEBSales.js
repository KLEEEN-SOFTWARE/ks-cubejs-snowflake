cube(`WEBSales`, {
  sql: `SELECT * FROM "TPCDS_SF10TCL"."WEB_SALES"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    CUSTOMER: {
      relationship: `hasOne`,
      sql: `${WEBSales}.WS_BILL_CUSTOMER_SK = ${CUSTOMER}.C_CUSTOMER_SK`,
    },

    DATEDim: {
      relationship: `hasOne`,
      sql: `${WEBSales}.WS_SOLD_DATE_SK = ${DATEDim}.D_DATE_SK`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [],
    },

    wsExtSalesPrice: {
      sql: `${CUBE}."WS_EXT_SALES_PRICE"`,
      type: `sum`,
    },

    wsSalesPrice: {
      sql: `${CUBE}."WS_SALES_PRICE"`,
      type: `sum`,
    },

    wsQuantity: {
      sql: `${CUBE}."WS_QUANTITY"`,
      type: `sum`,
    },

    wsWholesaleCost: {
      sql: `${CUBE}."WS_WHOLESALE_COST"`,
      type: `sum`,
    },

    wsExtListPrice: {
      sql: `${CUBE}."WS_EXT_LIST_PRICE"`,
      type: `sum`,
    },

    wsListPrice: {
      sql: `${CUBE}."WS_LIST_PRICE"`,
      type: `sum`,
    },

    wsExtShipCost: {
      sql: `${CUBE}."WS_EXT_SHIP_COST"`,
      type: `sum`,
    },

    wsExtWholesaleCost: {
      sql: `${CUBE}."WS_EXT_WHOLESALE_COST"`,
      type: `sum`,
    },

    wsOrderNumber: {
      sql: `${CUBE}."WS_ORDER_NUMBER"`,
      type: `sum`,
    },
  },

  dimensions: {
    orderNumber: {
      sql: `${CUBE}."WS_ORDER_NUMBER"`,
      type: `string`,
      primaryKey: true,
    },

    wsCustomerId: {
      sql: `${CUBE}."WS_BILL_CUSTOMER_SK"`,
      type: `string`,
    },

    wsSoldDateSK: {
      sql: `${CUBE}."WS_SOLD_DATE_SK"`,
      type: `string`,
    },

    wsQuantityOfItems: {
      sql: `${CUBE}."WS_QUANTITY"`,
      type: `string`,
    },

    wsNetPaidShipTax: {
      sql: `${CUBE}."WS_NET_PAID_INC_SHIP_TAX"`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
