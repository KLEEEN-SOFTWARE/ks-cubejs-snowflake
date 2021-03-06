export const entityDetailsSectionEntityDetails = [
  {
    attributes: [
      {
        id: 42860,
        statisticalType: 'Data - Categorical',
        canAddValues: true,
        canEditValues: false,
        format: { examples: ['Women', 'Men', 'Jewelry', 'Home', 'Electronics', 'Children', 'Books'] },
        formatType: 'prime',
        hasMany: false,
        label: 'Item Category',
        name: 'itemCategory',
        rawEntityName: 'ItemCategory',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'Label' },
    fullWidth: false,
    id: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860',
    params: {
      baseModel: 'Item',
      operationName: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860',
      value: {
        format: { examples: ['Women', 'Men', 'Jewelry', 'Home', 'Electronics', 'Children', 'Books'] },
        formatType: 'prime',
        name: 'itemCategory',
        transformation: 'selfSingle',
      },
      taskName: 'itemProfile',
    },
    readOnly: true,
    statisticalType: 'Data - Categorical',
  },
  {
    attributes: [
      {
        id: 42861,
        statisticalType: 'Data - Categorical',
        canAddValues: true,
        canEditValues: false,
        format: {
          examples: [
            'swimware',
            'dresses',
            'maternity',
            'golf',
            'pools',
            'athletic shoes',
            'archery',
            'fitness',
            'kids',
            'mens',
            'atheletic',
            'pop',
          ],
        },
        formatType: 'prime',
        hasMany: false,
        label: 'Item Class',
        name: 'itemClass',
        rawEntityName: 'ItemClass',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'Label' },
    fullWidth: false,
    id: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861',
    params: {
      baseModel: 'Item',
      operationName: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861',
      value: {
        format: {
          examples: [
            'swimware',
            'dresses',
            'maternity',
            'golf',
            'pools',
            'athletic shoes',
            'archery',
            'fitness',
            'kids',
            'mens',
            'atheletic',
            'pop',
          ],
        },
        formatType: 'prime',
        name: 'itemClass',
        transformation: 'selfSingle',
      },
      taskName: 'itemProfile',
    },
    readOnly: true,
    statisticalType: 'Data - Categorical',
  },
  {
    attributes: [
      {
        id: 42863,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'company_name',
        hasMany: false,
        label: 'Manufacturer',
        name: 'manufacturer',
        rawEntityName: 'Manufacturer',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'Label' },
    fullWidth: true,
    id: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863',
    params: {
      baseModel: 'Item',
      operationName: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863',
      value: { format: {}, formatType: 'company_name', name: 'manufacturer', transformation: 'selfSingle' },
      taskName: 'itemProfile',
    },
    readOnly: true,
    statisticalType: 'Data - Categorical - free form',
  },
  {
    attributes: [
      {
        id: 42855,
        statisticalType: 'Data - Categorical - free form',
        aggregation: 'trendCountHighLowSparkline',
        canAddValues: true,
        canEditValues: true,
        format: {},
        formatType: 'uuid',
        hasMany: true,
        label: 'undefined of Sale',
        name: 'sale',
        rawEntityName: 'Sale',
        crossLinking: [],
        isPrimary: true,
        transformation: 'trendCountHighLowSparkline',
        metadata: 'trendCountHighLowSparkline',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'TrendSparklineHighLow' },
    fullWidth: false,
    id: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855',
    params: {
      baseModel: 'Item',
      operationName: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855',
      value: { format: {}, formatType: 'uuid', name: 'sale', transformation: 'trendCountHighLowSparkline' },
      taskName: 'itemProfile',
    },
    readOnly: true,
    statisticalType: 'Data - Categorical - free form',
  },
  {
    attributes: [
      {
        id: 42864,
        statisticalType: 'Data - Numeric - NTG - Discrete',
        aggregation: 'trendVsStartSparkline',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'integer',
        hasMany: true,
        label: 'Trend Vs Start Sparkline of Quantity On Hand',
        name: 'quantityOnHand',
        rawEntityName: 'QuantityOnHand',
        crossLinking: [],
        isPrimary: true,
        transformation: 'trendVsStartSparkline',
        metadata: 'trendVsStartSparkline',
      },
    ],
    chartType: '[WIDGET] SLOT',
    elements: { displayComponent: 'TrendSparklineVsStart' },
    fullWidth: false,
    id: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864',
    params: {
      baseModel: 'Item',
      operationName: 'entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864',
      value: {
        format: {},
        formatType: 'integer',
        name: 'quantityOnHand',
        transformation: 'trendVsStartSparkline',
      },
      taskName: 'itemProfile',
    },
    readOnly: true,
    statisticalType: 'Data - Numeric - NTG - Discrete',
  },
];
