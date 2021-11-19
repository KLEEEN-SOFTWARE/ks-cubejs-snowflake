import { StatisticalDataType, ActionType, ThingMap } from '@kleeen/types';

export const things: ThingMap = {
  addrTypeMailing: {
    actions: [],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: false,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `AddrTypeMailing`,
    editable: false,
    format: { examples: ['single family', 'apartment', 'condo'] },
    formatType: `prime`,
    id: 42848,
    multiple: true,
    name: `addrTypeMailing`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  ageBracket: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `9db54c7f-2ee8-430e-b17b-79a977205907`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `87af2475-29c9-482d-ab90-b6cf1d29815d`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `AgeBracket`,
    editable: false,
    format: { examples: ['20-39', '40-59', '60-79', '80+'] },
    formatType: `prime`,
    id: 42849,
    multiple: true,
    name: `ageBracket`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  cityMailing: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `327e6639-98f1-4c88-82c0-5e0e13b6655b`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `80bf9ad6-ab58-47d1-910e-bf6159d08f56`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `city`,
    deepDataType: undefined,
    description: ``,
    displayName: `CityMailing`,
    editable: true,
    format: {},
    formatType: `city`,
    id: 42847,
    multiple: true,
    name: `cityMailing`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.UnorderedGeo,
    type: `city`,
  },
  contactEmail: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `6945cce7-d6ff-44b5-820f-f109ee15c3be`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `5f7d8876-5f76-48ed-8780-0f1c024b101d`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `email`,
    deepDataType: undefined,
    description: ``,
    displayName: `ContactEmail`,
    editable: false,
    format: {},
    formatType: `email`,
    id: 42850,
    multiple: true,
    name: `contactEmail`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.FreeForm,
    type: `email`,
  },
  countryMailing: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `fcd86357-976f-47eb-aef9-6557e1bd3b5e`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `25ecae1f-9f87-41cd-9aaa-1f030eb5e191`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `country`,
    deepDataType: undefined,
    description: ``,
    displayName: `CountryMailing`,
    editable: true,
    format: {},
    formatType: `country`,
    id: 42846,
    multiple: true,
    name: `countryMailing`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.UnorderedGeo,
    type: `country`,
  },
  creditRating: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `179bf2b1-ec1c-444e-8d5f-6f54f970302c`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `829ca643-13ee-411a-aa18-5a57b064fa74`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `severity_level`,
    deepDataType: undefined,
    description: ``,
    displayName: `CreditRating`,
    editable: false,
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
    multiple: true,
    name: `creditRating`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.OrderedSeverityRanking,
    type: `severity_level`,
  },
  customer: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `04e6da1d-8f23-465d-8680-3deae212168e`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: true,
        description: undefined,
        displayName: `Add to Promotion List`,
        id: `83ad0b93-566d-45a3-9755-57d9220e3ea1`,
        isCustomModal: false,
        name: `addToPromotionList`,
        type: ActionType.Custom,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `2d534c4b-d62e-49f4-8387-c1d414722060`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `maritalStatus`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `creditRating`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `gender`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `contactEmail`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `ageBracket`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `addrTypeMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `cityMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `countryMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `stateMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `lastName`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `firstName`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `customerId`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Customer Profile', slug: 'customer-profile' }],
    dataType: `full_name`,
    deepDataType: undefined,
    description: ``,
    displayName: `Customer`,
    editable: true,
    format: {},
    formatType: `full_name`,
    id: 42841,
    multiple: true,
    name: `customer`,
    prototypeId: undefined,
    settings: { isEditable: true, isFilledByEU: true },
    statisticalType: StatisticalDataType.FreeForm,
    type: `full_name`,
  },
  customerId: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `7426be72-3f38-4543-b06b-c6f2e52f2cbf`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `58319d15-b470-400a-a30f-551f6b2d7238`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `uuid`,
    deepDataType: undefined,
    description: ``,
    displayName: `CustomerId`,
    editable: false,
    format: {},
    formatType: `uuid`,
    id: 42842,
    multiple: true,
    name: `customerId`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.FreeForm,
    type: `uuid`,
  },
  discountGiven: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `46ad4409-a3d1-44d9-b0df-c50493535cd1`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `f1a5840a-f525-41aa-9757-0ee30b1bbb1b`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `sale`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `integer`,
    deepDataType: undefined,
    description: ``,
    displayName: `DiscountGiven`,
    editable: false,
    format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
    formatType: `USD`,
    id: 42859,
    multiple: true,
    name: `discountGiven`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.NumericDiscrete,
    type: `integer`,
  },
  firstName: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `2664045f-5131-441d-858b-1d912824622e`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `4a26290d-32f3-43e0-9b7b-66a24971c252`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `first_name`,
    deepDataType: undefined,
    description: ``,
    displayName: `FirstName`,
    editable: true,
    format: {},
    formatType: `first_name`,
    id: 42843,
    multiple: true,
    name: `firstName`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.FreeForm,
    type: `first_name`,
  },
  gender: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `93d023db-cdcb-439c-97e6-6fabd6175ca4`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `1de953ec-4528-4b92-aaf9-b0bf45e2e215`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `Gender`,
    editable: true,
    format: { examples: ['Male', 'Female', 'Other'] },
    formatType: `prime`,
    id: 42851,
    multiple: true,
    name: `gender`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  item: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `93ac8c7c-1288-4b4d-84f1-079c0a43b292`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `31c56e9c-c87a-47f3-8a8c-cd8765a033b9`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `quantityOnHand`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `manufacturer`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `itemClass`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `itemCategory`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [{ title: 'Item Profile', slug: 'item-profile' }],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `Item`,
    editable: true,
    format: {},
    formatType: `prime`,
    id: 42862,
    multiple: true,
    name: `item`,
    prototypeId: undefined,
    settings: { isEditable: true, isFilledByEU: true },
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  itemCategory: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `62cbc526-1fff-43fa-a36e-239f2af677d7`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `86d82fb7-3c8e-487c-a3f1-feb45270e99e`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `item`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `itemClass`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `ItemCategory`,
    editable: false,
    format: { examples: ['Women', 'Men', 'Jewelry', 'Home', 'Electronics', 'Children', 'Books'] },
    formatType: `prime`,
    id: 42860,
    multiple: true,
    name: `itemCategory`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  itemClass: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `e9929e18-a8db-4332-89f8-31c8eb6e8c6e`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `68154531-f2c7-4234-bd0d-df3135117d7e`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `item`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `itemCategory`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `ItemClass`,
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
    id: 42861,
    multiple: true,
    name: `itemClass`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  lastName: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `5a4b6b91-f022-4478-8f9e-796b1a423d2c`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `2d39f679-801d-4fb8-bd90-4f7b9c4e4acf`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `last_name`,
    deepDataType: undefined,
    description: ``,
    displayName: `LastName`,
    editable: true,
    format: {},
    formatType: `last_name`,
    id: 42844,
    multiple: true,
    name: `lastName`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.FreeForm,
    type: `last_name`,
  },
  manufacturer: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `632b6579-5917-495c-9b31-8852fdf8704f`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `f596af71-32f9-4602-a3be-3370baf405b9`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `item`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `company_name`,
    deepDataType: undefined,
    description: ``,
    displayName: `Manufacturer`,
    editable: false,
    format: {},
    formatType: `company_name`,
    id: 42863,
    multiple: true,
    name: `manufacturer`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.FreeForm,
    type: `company_name`,
  },
  maritalStatus: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `775ba071-f416-40ad-8bbf-ee5896f4ddcf`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `aaf9ec1b-9743-48b5-9179-e1a50c8afbd9`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `MaritalStatus`,
    editable: false,
    format: { examples: ['Single', 'Married', 'Divorced', 'Widdowed'] },
    formatType: `prime`,
    id: 42854,
    multiple: true,
    name: `maritalStatus`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  netPaidShipTax: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `92a32eb9-648f-402c-98ad-83704b2d15bd`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `a3fb8471-4116-4391-9197-ea55583c0645`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `sale`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `integer`,
    deepDataType: undefined,
    description: ``,
    displayName: `NetPaidShipTax`,
    editable: false,
    format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
    formatType: `USD`,
    id: 42857,
    multiple: true,
    name: `netPaidShipTax`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.NumericDiscrete,
    type: `integer`,
  },
  netProfit: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `5a438c2f-1e3d-4549-9365-de8f9b7ca652`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `a15a9ccb-0212-471d-85d9-48cdc314070b`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `sale`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `integer`,
    deepDataType: undefined,
    description: ``,
    displayName: `NetProfit`,
    editable: false,
    format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
    formatType: `USD`,
    id: 42858,
    multiple: true,
    name: `netProfit`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.NumericDiscrete,
    type: `integer`,
  },
  promotion: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `4b301984-2005-4d9c-9593-3b9879837f21`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `c7cfd4fe-d069-43a5-b7dc-96524c5f4f74`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `Promotion`,
    editable: false,
    format: {},
    formatType: `prime`,
    id: 42865,
    multiple: true,
    name: `promotion`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  quantityOnHand: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `cec1ae29-55ec-44f8-9cfc-4ad1e124ea6f`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `3a68046a-f498-4368-b157-49c938122520`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `item`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `timestamp`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `integer`,
    deepDataType: undefined,
    description: ``,
    displayName: `QuantityOnHand`,
    editable: false,
    format: {},
    formatType: `integer`,
    id: 42864,
    multiple: true,
    name: `quantityOnHand`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.NumericDiscrete,
    type: `integer`,
  },
  sale: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `d8b4669e-b752-49fc-8e42-3baec2ffa25d`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `62b03ad3-c6e2-4c43-b62f-bc88d234c5a5`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: false,
        isNullable: false,
        name: `addrTypeMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `cityMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `stateMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `countryMailing`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `promotion`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `itemClass`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `itemCategory`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `item`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `discountGiven`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `netProfit`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `netPaidShipTax`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `saleType`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `customer`,
      },
      {
        hasMany: false,
        isNullable: false,
        name: `timestamp`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `uuid`,
    deepDataType: undefined,
    description: ``,
    displayName: `Sale`,
    editable: true,
    format: {},
    formatType: `uuid`,
    id: 42855,
    multiple: true,
    name: `sale`,
    prototypeId: undefined,
    settings: { isEditable: true, isFilledByEU: true },
    statisticalType: StatisticalDataType.FreeForm,
    type: `uuid`,
  },
  saleType: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `0c555d8c-5383-487c-b184-ccd3aeb45763`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `8a02db89-07da-4e6e-bafc-bf7997437b68`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
    ],
    canAddValues: true,
    canEditValues: false,
    crossLinking: [],
    dataType: `string`,
    deepDataType: undefined,
    description: ``,
    displayName: `SaleType`,
    editable: false,
    format: { examples: ['Web', 'Store', 'Catalogue'] },
    formatType: `prime`,
    id: 42856,
    multiple: true,
    name: `saleType`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.Categorical,
    type: `string`,
  },
  stateMailing: {
    actions: [
      {
        areYouSure: false,
        description: undefined,
        displayName: `Add`,
        id: `88143805-ec17-45a6-98b3-6ff79e5bc3c4`,
        isCustomModal: false,
        name: `add`,
        type: ActionType.Add,
      },
      {
        areYouSure: false,
        description: undefined,
        displayName: `Delete`,
        id: `1b702bf8-afca-4f8d-a741-ec7f1e40a042`,
        isCustomModal: false,
        name: `_delete_`,
        type: ActionType.Delete,
      },
    ],
    attributes: [
      {
        hasMany: true,
        isNullable: false,
        name: `sale`,
      },
      {
        hasMany: true,
        isNullable: false,
        name: `customer`,
      },
    ],
    canAddValues: true,
    canEditValues: true,
    crossLinking: [],
    dataType: `state`,
    deepDataType: undefined,
    description: ``,
    displayName: `StateMailing`,
    editable: true,
    format: {},
    formatType: `state`,
    id: 42845,
    multiple: true,
    name: `stateMailing`,
    prototypeId: undefined,
    settings: { isEditable: true },
    statisticalType: StatisticalDataType.UnorderedGeo,
    type: `state`,
  },
  timestamp: {
    actions: [],
    attributes: [],
    canAddValues: false,
    canEditValues: false,
    crossLinking: [],
    dataType: `timestamp`,
    deepDataType: undefined,
    description: undefined,
    displayName: `Timestamp`,
    editable: false,
    format: {},
    formatType: `timestamp`,
    id: 42839,
    multiple: true,
    name: `timestamp`,
    prototypeId: undefined,
    settings: {},
    statisticalType: StatisticalDataType.NumericTemporal,
    type: `timestamp`,
  },
};
