import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Customer Digest',
    scope: undefined,
    type: 'report',
    viableSolutions: [],
    viewId: 'ks-view-benxxqNtSaSJTDTmYjNqiX',
    viewOrder: 0,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfSingle,
            canAddValues: true,
            canEditValues: true,
            crossLinking: [{ title: 'Customer Profile', slug: 'customer-profile' }],
            dataType: `full_name`,
            format: {},
            formatType: `full_name`,
            hasMany: false,
            id: 42841,
            isDisplayValue: true,
            label: `customer`,
            multiple: true,
            name: `customer`,
            settings: { isEditable: true, isFilledByEU: true },
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfSingle,
          },
          {
            aggregation: Transformation.SelfSingle,
            canAddValues: true,
            canEditValues: true,
            crossLinking: [],
            dataType: `CountryMailing`,
            deepDataType: `country`,
            format: {},
            formatType: `country`,
            hasMany: false,
            id: 42846,
            isDisplayValue: false,
            isNullable: false,
            label: `country ( mailing )`,
            multiple: true,
            name: `countryMailing`,
            prototypeId: 42534,
            settings: { isEditable: true },
            statisticalType: StatisticalDataType.UnorderedGeo,
            transformation: Transformation.SelfSingle,
          },
          {
            aggregation: Transformation.SelfSingle,
            canAddValues: true,
            canEditValues: false,
            crossLinking: [],
            dataType: `CreditRating`,
            deepDataType: `severity_level`,
            format: {
              examples: ['Bad', 'Medium', 'Good'],
              valueLabels: [
                { label: 'Bad', value: 1 },
                { label: 'Medium', value: 2 },
                { label: 'Good', value: 3 },
              ],
              max: 3,
              min: 1,
              severityBad: 1,
              severityGood: 3,
              severityLevels: 3,
            },
            formatType: `severity_level`,
            hasMany: false,
            id: 42853,
            isDisplayValue: false,
            isNullable: false,
            label: `credit rating`,
            multiple: true,
            name: `creditRating`,
            prototypeId: 42822,
            settings: {},
            statisticalType: StatisticalDataType.OrderedSeverityRanking,
            transformation: Transformation.SelfSingle,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: true,
            canEditValues: true,
            crossLinking: [],
            dataType: `Sale`,
            deepDataType: `uuid`,
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
            transformation: Transformation.SelfMulti,
          },
        ],
        chartType: WidgetTypes.TABLE,
        id: `15675209-b48f-49e8-8e43-025fa1f15593`,
        params: {
          baseModel: `Customer`,
          operationName: `object_listing_15675209_b48f_49e8_8e43_025fa1f15593`,
          value: {
            format: {},
            formatType: `full_name`,
            name: `customer`,
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Most Active Customers This Month`,
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
            format: { examples: ['20-39', '40-59', '60-79', '80+'] },
            formatType: `prime`,
            id: 42849,
            isFilterable: { in: false, out: false },
            label: `Age Bracket`,
            name: `ageBracket`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `full_name`,
            id: 42841,
            isFilterable: { in: false, out: false },
            label: `Count of Customer`,
            name: `customer`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `5b0d4aff-1640-4328-aeb0-da8c2c0dfba3`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `ageBracket`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3`,
          value: {
            formatType: `full_name`,
            name: `customer`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Age Brackets`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-benxxqNtSaSJTDTmYjNqiX',
      },
      {
        actions: [],
        attributes: [],
        chartType: WidgetTypes.CUSTOM,
        component: 'customers/components/widget-9-v-qt-an-8-c-eei-8-r-xc-jz-jt-54-z',
        id: `484d6745-417e-46a2-a1f3-2c04122d18af`,
        name: 'Customer Locations',
        scope: undefined,
        sortOrder: 2,
        title: `Customer Locations`,
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
            format: { examples: ['Male', 'Female', 'Other'] },
            formatType: `prime`,
            id: 42851,
            isFilterable: { in: false, out: false },
            label: `Gender`,
            name: `gender`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `full_name`,
            id: 42841,
            isFilterable: { in: false, out: false },
            label: `Count of Customer`,
            name: `customer`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `dc314cf7-680e-491b-bfeb-e8136a8ef693`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `gender`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_dc314cf7_680e_491b_bfeb_e8136a8ef693`,
          value: {
            formatType: `full_name`,
            name: `customer`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `Gender Breakdown`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-benxxqNtSaSJTDTmYjNqiX',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { examples: ['Single', 'Married', 'Divorced', 'Widdowed'] },
            formatType: `prime`,
            id: 42854,
            isFilterable: { in: false, out: false },
            label: `Marital Status`,
            name: `maritalStatus`,
            statisticalType: StatisticalDataType.Categorical,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `full_name`,
            id: 42841,
            isFilterable: { in: false, out: false },
            label: `Count of Customer`,
            name: `customer`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.POLAR_AREA,
        id: `ae4c79f7-3dad-4ca4-9d67-e9079e500b54`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `prime`,
            name: `maritalStatus`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54`,
          value: {
            formatType: `full_name`,
            name: `customer`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 4,
        title: `Martial Status`,
        viableSolutions: [WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-benxxqNtSaSJTDTmYjNqiX',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {
              min: 1,
              max: 3,
              examples: ['Bad', 'Medium', 'Good'],
              severityBad: 1,
              severityGood: 3,
              severityLevels: 3,
            },
            formatType: `severity_level`,
            id: 42853,
            isFilterable: { in: false, out: false },
            label: `Credit Rating`,
            name: `creditRating`,
            statisticalType: StatisticalDataType.OrderedSeverityRanking,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `full_name`,
            id: 42841,
            isFilterable: { in: false, out: false },
            label: `Count of Customer`,
            name: `customer`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.DONUT_VARIANT,
        id: `a9d6ed23-8794-42a7-8b33-c2a1eb78a43f`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `severity_level`,
            name: `creditRating`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f`,
          value: {
            formatType: `full_name`,
            name: `customer`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 5,
        title: `Credit Scores`,
        viableSolutions: [WidgetTypes.DONUT, WidgetTypes.PIE, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-benxxqNtSaSJTDTmYjNqiX',
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
        canAddValues: true,
        canEditValues: true,
        crossLinking: [{ title: 'Customer Profile', slug: 'customer-profile' }],
        dataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 42841,
        isDisplayValue: true,
        label: `customer`,
        multiple: true,
        name: `customer`,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `AgeBracket`,
        deepDataType: `string`,
        editable: false,
        format: { examples: ['20-39', '40-59', '60-79', '80+'] },
        formatType: `prime`,
        hasMany: false,
        id: 42849,
        isDisplayValue: false,
        isNullable: false,
        label: `age bracket`,
        multiple: true,
        name: `ageBracket`,
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
        dataType: `CreditRating`,
        deepDataType: `severity_level`,
        editable: false,
        format: {
          examples: ['Bad', 'Medium', 'Good'],
          valueLabels: [
            { label: 'Bad', value: 1 },
            { label: 'Medium', value: 2 },
            { label: 'Good', value: 3 },
          ],
          max: 3,
          min: 1,
          severityBad: 1,
          severityGood: 3,
          severityLevels: 3,
        },
        formatType: `severity_level`,
        hasMany: false,
        id: 42853,
        isDisplayValue: false,
        isNullable: false,
        label: `credit rating`,
        multiple: true,
        name: `creditRating`,
        prototypeId: 42822,
        settings: {},
        statisticalType: StatisticalDataType.OrderedSeverityRanking,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `MaritalStatus`,
        deepDataType: `string`,
        editable: false,
        format: { examples: ['Single', 'Married', 'Divorced', 'Widdowed'] },
        formatType: `prime`,
        hasMany: false,
        id: 42854,
        isDisplayValue: false,
        isNullable: false,
        label: `marital status`,
        multiple: true,
        name: `maritalStatus`,
        prototypeId: 42518,
        settings: {},
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: true,
        crossLinking: [],
        dataType: `Gender`,
        deepDataType: `string`,
        editable: false,
        format: { examples: ['Male', 'Female', 'Other'] },
        formatType: `prime`,
        hasMany: false,
        id: 42851,
        isDisplayValue: false,
        isNullable: false,
        label: `gender`,
        multiple: true,
        name: `gender`,
        prototypeId: 42518,
        settings: { isEditable: true },
        statisticalType: StatisticalDataType.Categorical,
        transformation: Transformation.SelfSingle,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 42841,
    id: `2ea40cee-8bfb-4377-b913-940375698bec`,
    name: 'Customer List',
    params: {
      baseModel: `Customer`,
      operationName: `object_listing_2ea40cee_8bfb_4377_b913_940375698bec`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-6L3DwRv3D8buRZ4H9s8mNY',
    viewOrder: 1,
  },
];
