import { ElementInputType, FilterOperation, StatisticalDataType } from '@kleeen/types';

import { GetFilterElementProps } from './elements.model';
import { getThingByName } from '@kleeen/things';
import { resolveBestSdtMatch } from '@kleeen/frontend/utils';

const filterOperatorsBySdt = {
  [StatisticalDataType.Data]: [FilterOperation.Is],
  [StatisticalDataType.Numeric]: [
    FilterOperation.Is,
    FilterOperation.GreaterOrEqualThan,
    FilterOperation.LessOrEqualThan,
  ],
};

const filterInputBySdt = {
  [StatisticalDataType.Binary]: ElementInputType.CheckBox,
  [StatisticalDataType.Color]: ElementInputType.ColorPicker,
  [StatisticalDataType.Data]: ElementInputType.FieldTextAutoComplete,
  [StatisticalDataType.NumericTemporal]: ElementInputType.DateTimeField,
};

/**
 * Get the filter input for a given thing and operator
 * @param {thing} - The thing to get the possible operators from
 * @param {filterOperator} - The Filter Operator being used
 * @return - A Filter Input
 */
export function getFilterElement({ thingName }: GetFilterElementProps): ElementInputType {
  const thing = getThingByName(thingName);
  // TODO: @cafe take into account the filterOperator
  const input = resolveBestSdtMatch({
    defaultMatch: ElementInputType.FieldTextAutoComplete,
    object: filterInputBySdt,
    sdt: thing.statisticalType || StatisticalDataType.Data,
  });

  return input;
}

/**
 * Get the possible filter operators given a thing
 * @param {thing} - The thing to get the possible operators from
 * @return - An array of Filter Operators
 */
export function getFilterOperators(thingName: string): FilterOperation[] {
  const thing = getThingByName(thingName);
  const operators = resolveBestSdtMatch({
    defaultMatch: [FilterOperation.Is],
    object: filterOperatorsBySdt,
    sdt: thing.statisticalType || StatisticalDataType.Data,
  });

  return operators;
}
