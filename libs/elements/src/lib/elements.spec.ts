import { ElementInputType, FilterOperation, Maybe, Thing } from '@kleeen/types';
import { getFilterElement, getFilterOperators } from './elements';

import mockThings from './mocks/things.mock.json';

jest.mock('@kleeen/things', () => {
  return {
    getThingById(id: string): Maybe<Thing> {
      return mockThings[id];
    },
    getThingByName(name: string): Maybe<Thing> {
      return Object.values(mockThings).find((thing) => thing.name === name) as Thing;
    },
  };
});

describe('elements', () => {
  describe('get filter operators', () => {
    it('should only return the "is" operator for a categorical statistical type', () => {
      expect(getFilterOperators('cafe').sort()).toEqual([FilterOperation.Is].sort());
    });
    it('should return the "is", "min" and "max" operators for a timestamp statistical type', () => {
      expect(getFilterOperators('importantEvent').sort()).toEqual(
        [FilterOperation.Is, FilterOperation.GreaterOrEqualThan, FilterOperation.LessOrEqualThan].sort(),
      );
    });
    it('should only return the numeric operators for an integer statistical type', () => {
      expect(getFilterOperators('price').sort()).toEqual(
        [FilterOperation.Is, FilterOperation.GreaterOrEqualThan, FilterOperation.LessOrEqualThan].sort(),
      );
    });
  });
  describe('get filter elements', () => {
    it('should return the field text autocomplete for a categorical statistical type and the Is operator', () => {
      expect(getFilterElement({ thingName: 'cafe', filterOperator: FilterOperation.Is })).toEqual(
        ElementInputType.FieldTextAutoComplete,
      );
    });
    it('should return the checkbox for a binary statistical type and the Is operator', () => {
      expect(getFilterElement({ thingName: 'isOpen', filterOperator: FilterOperation.Is })).toEqual(
        ElementInputType.CheckBox,
      );
    });
    it('should return the datePicker for a timestamp statistical type and the Is operator', () => {
      expect(getFilterElement({ thingName: 'importantEvent', filterOperator: FilterOperation.Is })).toEqual(
        ElementInputType.DateTimeField,
      );
    });
  });
});
