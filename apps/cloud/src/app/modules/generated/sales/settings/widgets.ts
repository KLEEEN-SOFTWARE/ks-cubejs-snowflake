import { Transformation, ElementDisplayType, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Sales Digest',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
    viewOrder: 0,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.Average,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `integer`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `USD`,
            id: 42858,
            isFilterable: { in: false, out: false },
            label: `Average of Net Profit`,
            multiple: true,
            name: `NetProfit`,
            settings: {},
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Average,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `string`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Count of Item`,
            multiple: true,
            name: `Item`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.CountTotal,
          },
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `string`,
            elements: {
              displayComponent: ElementDisplayType.Chips,
            },
            formatType: `prime`,
            id: 42865,
            isFilterable: { in: false, out: false },
            label: `Promotion`,
            multiple: true,
            name: `Promotion`,
            settings: {},
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Average,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `integer`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `USD`,
            id: 42857,
            isFilterable: { in: false, out: false },
            label: `Average of Net Paid + Ship + Tax`,
            multiple: true,
            name: `NetPaid+Ship+Tax`,
            settings: {},
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Average,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `full_name`,
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            formatType: `full_name`,
            id: 42841,
            isFilterable: { in: false, out: false },
            label: `Count of Customer`,
            multiple: true,
            name: `Customer`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
          {
            aggregation: Transformation.TrendCountHighLowSparkline,
            canAddValues: false,
            canEditValues: true,
            crossLinking: [],
            dataType: `uuid`,
            elements: {
              displayComponent: ElementDisplayType.TrendSparklineHighLow,
            },
            formatType: `uuid`,
            id: 42855,
            isFilterable: { in: false, out: false },
            label: `Count Trend (High Low) of Sale`,
            multiple: true,
            name: `Sale`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.TrendCountHighLowSparkline,
          },
        ],
        chartType: WidgetTypes.SUMMARY,
        id: `c020923c-68f5-4374-95ae-8212f2d0ce13`,
        params: {
          operationName: `widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13`,
          value: {
            attributes: [
              { name: 'NetProfit' },
              { name: 'Item' },
              { name: 'Promotion' },
              { name: 'NetPaidShipTax' },
              { name: 'Customer' },
              { name: 'Sale' },
            ],
            label: ``,
            name: ``,
            transformations: [
              {
                transformation: Transformation.Average,
                isPrimary: true,
              },
              {
                transformation: Transformation.CountTotal,
                isPrimary: false,
              },
              {
                transformation: Transformation.SelfMulti,
                isPrimary: false,
              },
              {
                transformation: Transformation.Average,
                isPrimary: false,
              },
              {
                transformation: Transformation.CountTotal,
                isPrimary: false,
              },
              {
                transformation: Transformation.TrendCountHighLowSparkline,
                isPrimary: false,
              },
            ],
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Summary`,
        viableSolutions: [],
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            formatType: `timestamp`,
            id: 42839,
            isFilterable: { in: false, out: false },
            label: `Timestamp`,
            name: `timestamp`,
            statisticalType: StatisticalDataType.NumericTemporal,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Max,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
            formatType: `USD`,
            id: 42858,
            isFilterable: { in: false, out: false },
            label: `Max of Net Profit`,
            name: `netProfit`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Max,
          },
        ],
        chartType: WidgetTypes.AREA_GRADIENT,
        id: `bc5917b0-e966-48fa-9c57-4dbe391de3cd`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `timestamp`,
            name: `timestamp`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd`,
          value: {
            formatType: `USD`,
            name: `netProfit`,
            transformation: Transformation.Max,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Profit Change`,
        viableSolutions: [
          WidgetTypes.STEP_LINE,
          WidgetTypes.AREA_MACRO_MICRO,
          WidgetTypes.AREA,
          WidgetTypes.SIMPLE_LIST_RANKED,
        ],
        viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.TemporalBucket,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            formatType: `timestamp`,
            id: 42839,
            isFilterable: { in: false, out: false },
            label: `Timestamp`,
            name: `timestamp`,
            statisticalType: StatisticalDataType.NumericTemporal,
            transformation: Transformation.TemporalBucket,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Count of Item`,
            name: `item`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.AREA_GRADIENT,
        id: `826ce452-a589-4876-b00e-34eb934a5d3d`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `timestamp`,
            name: `timestamp`,
            transformation: Transformation.TemporalBucket,
          },
          operationName: `widget_826ce452_a589_4876_b00e_34eb934a5d3d`,
          value: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 2,
        title: `Items Sold Trend`,
        viableSolutions: [
          WidgetTypes.STEP_LINE,
          WidgetTypes.AREA_MACRO_MICRO,
          WidgetTypes.AREA,
          WidgetTypes.SIMPLE_LIST_RANKED,
        ],
        viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `uuid`,
            id: 42855,
            isFilterable: { in: false, out: false },
            label: `Sale`,
            name: `sale`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Count of Item`,
            name: `item`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.COLUMN_BAR,
        id: `67ed8996-b996-4b29-b207-ca33b72020e7`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `uuid`,
            name: `sale`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_67ed8996_b996_4b29_b207_ca33b72020e7`,
          value: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `Most Popular Items`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `prime`,
            id: 42865,
            isFilterable: { in: false, out: false },
            label: `Promotion`,
            name: `promotion`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `uuid`,
            id: 42855,
            isFilterable: { in: false, out: false },
            label: `Count of Sale`,
            name: `sale`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `40ff3ba8-da40-4f55-8417-1ce42eca814c`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `promotion`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_40ff3ba8_da40_4f55_8417_1ce42eca814c`,
          value: {
            formatType: `uuid`,
            name: `sale`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 4,
        title: `Sales by Promotion Code`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `state`,
            id: 42845,
            isFilterable: { in: false, out: false },
            label: `State ( Mailing )`,
            name: `stateMailing`,
            statisticalType: StatisticalDataType.UnorderedGeo,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Sum,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
            formatType: `USD`,
            id: 42857,
            isFilterable: { in: false, out: false },
            label: `Sum of Net Paid + Ship + Tax`,
            name: `netPaidShipTax`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Sum,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `5a6aac69-378c-4db4-870a-07c7884da497`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `state`,
            name: `stateMailing`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_5a6aac69_378c_4db4_870a_07c7884da497`,
          value: {
            formatType: `USD`,
            name: `netPaidShipTax`,
            transformation: Transformation.Sum,
          },
        },
        scope: undefined,
        sortOrder: 6,
        title: `Most Sold States`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-gZZQLExQA1SrViUWNCnKdg',
      },
    ],
  },
  {
    actions: [
      {
        addModalAttributes: [],
        areYouSure: false,
        displayName: `Delete`,
        name: `_delete_`,
        type: `delete`,
      },
    ],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: false,
        canEditValues: false,
        crossLinking: [],
        dataType: `Timestamp`,
        deepDataType: `timestamp`,
        editable: false,
        format: {
          dateTime: {
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            month: '2-digit',
            second: 'numeric',
            year: 'numeric',
          },
        },
        formatType: `timestamp`,
        hasMany: false,
        id: 42839,
        isDisplayValue: false,
        isNullable: false,
        label: `timestamp`,
        multiple: true,
        name: `timestamp`,
        prototypeId: 42828,
        statisticalType: StatisticalDataType.NumericTemporal,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [{ title: 'Customer Profile', slug: 'customer-profile' }],
        dataType: `Customer`,
        deepDataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 42841,
        isDisplayValue: false,
        isNullable: false,
        label: `customer`,
        multiple: true,
        name: `customer`,
        prototypeId: 42553,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `NetPaidShipTax`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 42857,
        isDisplayValue: false,
        isNullable: false,
        label: `net paid + ship + tax`,
        multiple: true,
        name: `netPaidShipTax`,
        prototypeId: 42833,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `SaleType`,
        deepDataType: `string`,
        editable: false,
        format: { examples: ['Web', 'Store', 'Catalogue'] },
        formatType: `prime`,
        hasMany: false,
        id: 42856,
        isDisplayValue: false,
        isNullable: false,
        label: `sale type`,
        multiple: true,
        name: `saleType`,
        prototypeId: 42518,
        settings: {},
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Item`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `prime`,
        hasMany: true,
        id: 42862,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of item`,
        multiple: true,
        name: `item`,
        prototypeId: 42518,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `Promotion`,
        deepDataType: `string`,
        editable: false,
        format: {},
        formatType: `prime`,
        hasMany: false,
        id: 42865,
        isDisplayValue: false,
        isNullable: false,
        label: `promotion`,
        multiple: true,
        name: `promotion`,
        prototypeId: 42518,
        settings: {},
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 42855,
    id: `d0e2d8b1-2fd3-4dcf-8b29-b33802645d57`,
    name: 'List of Sales',
    params: {
      baseModel: `Sale`,
      operationName: `object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-rN4vUiL5EQtojf8qa6vGhx',
    viewOrder: 1,
  },
];
