import {
  FilterCombinator,
  FilterOperation,
  FilterQuery,
  FilterRuleValue,
  ReactElement,
  Thing,
} from '@kleeen/types';

export interface QueryFilters {
  addRule: () => void;
  filterState: QueryFilterState;
  removeRule: (index: number) => void;
  setCombinator: (combinator: FilterCombinator) => void;
  setField: (index: number, field: string) => void;
  setOperation: (index: number, operation: FilterOperation) => void;
  setValue: (index: number, value: FilterRuleValue) => void;
}

export type QueryFilterAction =
  | { type: QueryFilterActions.AddRule }
  | { type: QueryFilterActions.RemoveRule; payload: { index: number } }
  | { type: QueryFilterActions.SetCombinator; payload: { combinator: FilterCombinator } }
  | { type: QueryFilterActions.SetField; payload: { index: number; field: string } }
  | { type: QueryFilterActions.SetOperation; payload: { index: number; operation: FilterOperation } }
  | { type: QueryFilterActions.SetValue; payload: { index: number; value: FilterRuleValue } };

export enum QueryFilterActions {
  AddRule = 'addRule',
  RemoveRule = 'removeRule',
  SetCombinator = 'setCombinator',
  SetField = 'setField',
  SetOperation = 'setOperation',
  SetValue = 'setValue',
}

export interface QueryFilterProviderProps {
  attributes: Thing[];
  children: ReactElement;
  filterQuery: FilterQuery;
}

export type QueryFilterState = Pick<QueryFilterProviderProps, 'attributes' | 'filterQuery'>;
