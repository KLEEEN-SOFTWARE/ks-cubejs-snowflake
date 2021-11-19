import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
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
];
