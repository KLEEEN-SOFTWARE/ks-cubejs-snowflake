import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';
import { AddDialog } from '@kleeen/react/atomic-elements';

export const widgets = [
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Inventory Digest',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-6igyXkRwfKC7j7nwNWaUjh',
    viewOrder: 0,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [{ title: 'Item Profile', slug: 'item-profile' }],
            format: {},
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Item`,
            name: `item`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Max,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `integer`,
            id: 42864,
            isFilterable: { in: false, out: false },
            label: `Max of Quantity On Hand`,
            name: `quantityOnHand`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Max,
          },
        ],
        chartType: WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX,
        id: `6a633cf4-3d16-4ffd-be3e-d69bc01e9156`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156`,
          value: {
            formatType: `integer`,
            name: `quantityOnHand`,
            transformation: Transformation.Max,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Inventory Levels`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-6igyXkRwfKC7j7nwNWaUjh',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [{ title: 'Item Profile', slug: 'item-profile' }],
            format: {},
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Item`,
            name: `item`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.Average,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
            formatType: `USD`,
            id: 42858,
            isFilterable: { in: false, out: false },
            label: `Average of Net Profit`,
            name: `netProfit`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.Average,
          },
        ],
        chartType: WidgetTypes.COLUMN_BAR,
        id: `6d65bb0c-4f7e-4780-8060-0893663e5962`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_6d65bb0c_4f7e_4780_8060_0893663e5962`,
          value: {
            formatType: `USD`,
            name: `netProfit`,
            transformation: Transformation.Average,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Most Profitable Items`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-6igyXkRwfKC7j7nwNWaUjh',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [{ title: 'Item Profile', slug: 'item-profile' }],
            format: {},
            formatType: `prime`,
            id: 42862,
            isFilterable: { in: false, out: false },
            label: `Item`,
            name: `item`,
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
        chartType: WidgetTypes.COLUMN_BAR,
        id: `67329fba-e7b8-4d54-acbc-f79b19fa526a`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_67329fba_e7b8_4d54_acbc_f79b19fa526a`,
          value: {
            formatType: `uuid`,
            name: `sale`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 2,
        title: `Most Popular Items`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-6igyXkRwfKC7j7nwNWaUjh',
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
            formatType: `company_name`,
            id: 42863,
            isFilterable: { in: false, out: false },
            label: `Manufacturer`,
            name: `manufacturer`,
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
        chartType: WidgetTypes.POLAR_AREA,
        id: `dde3380c-6b4b-4fc4-8e8a-2b72d6cda1a9`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `company_name`,
            name: `manufacturer`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9`,
          value: {
            formatType: `prime`,
            name: `item`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `Manufacturers`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-6igyXkRwfKC7j7nwNWaUjh',
      },
    ],
  },
  {
    actions: [
      {
        addModalAttributes: [
          {
            id: 42862,
            isDisplayValue: true,
            name: 'item',
            label: 'Item',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'item',
            params: {
              baseModel: 'item',
              value: { formatType: 'prime', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 42863,
            isDisplayValue: false,
            name: 'manufacturer',
            label: 'Manufacturer',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'manufacturer',
            params: {
              baseModel: 'manufacturer',
              value: { formatType: 'company_name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 42861,
            isDisplayValue: false,
            name: 'itemClass',
            label: 'Item Class',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'itemClass',
            params: {
              baseModel: 'itemClass',
              value: {
                formatType: 'prime',
                transformation: 'selfSingle',
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
              },
            },
          },
          {
            id: 42860,
            isDisplayValue: false,
            name: 'itemCategory',
            label: 'Item Category',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'itemCategory',
            params: {
              baseModel: 'itemCategory',
              value: {
                formatType: 'prime',
                transformation: 'selfSingle',
                format: { examples: ['Women', 'Men', 'Jewelry', 'Home', 'Electronics', 'Children', 'Books'] },
              },
            },
          },
        ],
        areYouSure: false,
        component: AddDialog,
        displayName: `Add`,
        name: `add`,
        type: `add`,
      },
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
        canAddValues: true,
        canEditValues: true,
        crossLinking: [{ title: 'Item Profile', slug: 'item-profile' }],
        dataType: `string`,
        editable: false,
        format: {},
        formatType: `prime`,
        hasMany: false,
        id: 42862,
        isDisplayValue: true,
        label: `item`,
        multiple: true,
        name: `item`,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.Latest,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `QuantityOnHand`,
        deepDataType: `integer`,
        editable: false,
        format: {},
        formatType: `integer`,
        hasMany: true,
        id: 42864,
        isDisplayValue: false,
        isNullable: false,
        label: `Last/Latest of quantity on hand`,
        multiple: true,
        name: `quantityOnHand`,
        prototypeId: 42521,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.Latest,
      },
      {
        aggregation: Transformation.CountTotal,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Sale`,
        deepDataType: `uuid`,
        editable: false,
        format: {},
        formatType: `uuid`,
        hasMany: true,
        id: 42855,
        isDisplayValue: false,
        isNullable: false,
        label: `Count of sale`,
        multiple: true,
        name: `sale`,
        prototypeId: 42835,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.CountTotal,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `ItemCategory`,
        deepDataType: `string`,
        editable: false,
        format: { examples: ['Women', 'Men', 'Jewelry', 'Home', 'Electronics', 'Children', 'Books'] },
        formatType: `prime`,
        hasMany: false,
        id: 42860,
        isDisplayValue: false,
        isNullable: false,
        label: `item category`,
        multiple: true,
        name: `itemCategory`,
        prototypeId: 42518,
        settings: {},
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `ItemClass`,
        deepDataType: `string`,
        editable: false,
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
        formatType: `prime`,
        hasMany: false,
        id: 42861,
        isDisplayValue: false,
        isNullable: false,
        label: `item class`,
        multiple: true,
        name: `itemClass`,
        prototypeId: 42518,
        settings: {},
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `Manufacturer`,
        deepDataType: `company_name`,
        editable: false,
        format: {},
        formatType: `company_name`,
        hasMany: false,
        id: 42863,
        isDisplayValue: false,
        isNullable: false,
        label: `manufacturer`,
        multiple: true,
        name: `manufacturer`,
        prototypeId: 42532,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 42862,
    id: `d2ce9408-0494-42fd-ba7a-46dc2ba23c9b`,
    name: 'List of Items',
    params: {
      baseModel: `Item`,
      operationName: `object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-s2PqU22dANmhvXVhDe9Wbg',
    viewOrder: 1,
  },
];
