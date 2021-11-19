import { FilterCombinator, FilterOperation, FilterQuery, FilterRule, FilterRuleValue } from '@kleeen/types';
import {
  QueryFilterAction,
  QueryFilterActions,
  QueryFilterProviderProps,
  QueryFilterState,
  QueryFilters,
} from './use-query-filter.model';
import { createContext, useCallback, useContext, useReducer } from 'react';

import { getFilterOperators } from '@kleeen/elements';
import { isNilOrEmpty } from '@kleeen/common/utils';

const defaultFilterQuery: FilterQuery = {
  combinator: FilterCombinator.AND,
  rules: [],
};
const emptyContextFn = () => {
  console.warn('No preview panel context set');
};
const QueryFilterContext = createContext<QueryFilters>({
  addRule: emptyContextFn,
  filterState: {
    attributes: [],
    filterQuery: defaultFilterQuery,
  },
  removeRule: emptyContextFn,
  setCombinator: emptyContextFn,
  setField: emptyContextFn,
  setOperation: emptyContextFn,
  setValue: emptyContextFn,
});

export function useQueryFilters() {
  const previewPanelContext = useContext<QueryFilters>(QueryFilterContext);

  return previewPanelContext;
}

export function QueryFilterProvider({ attributes, filterQuery, children }: QueryFilterProviderProps) {
  const [filterState, dispatch] = useReducer(reducer, { attributes, filterQuery }, init);

  const addRule = useCallback(() => {
    dispatch({ type: QueryFilterActions.AddRule });
  }, []);

  const removeRule = useCallback((index: number) => {
    dispatch({ type: QueryFilterActions.RemoveRule, payload: { index } });
  }, []);

  const setCombinator = useCallback((combinator: FilterCombinator) => {
    dispatch({ type: QueryFilterActions.SetCombinator, payload: { combinator } });
  }, []);

  const setField = useCallback((index: number, field: string) => {
    dispatch({ type: QueryFilterActions.SetField, payload: { index, field } });
  }, []);

  const setOperation = useCallback((index: number, operation: FilterOperation) => {
    dispatch({ type: QueryFilterActions.SetOperation, payload: { index, operation } });
  }, []);

  const setValue = useCallback((index: number, value: FilterRuleValue) => {
    dispatch({ type: QueryFilterActions.SetValue, payload: { index, value } });
  }, []);

  const queryFilterProps = {
    addRule,
    filterState,
    removeRule,
    setCombinator,
    setField,
    setOperation,
    setValue,
  };

  return <QueryFilterContext.Provider value={queryFilterProps}>{children}</QueryFilterContext.Provider>;
}

//#region Private members
function init({ attributes, filterQuery }: QueryFilterState) {
  if (isNilOrEmpty(filterQuery)) {
    return {
      attributes,
      filterQuery: defaultFilterQuery,
    };
  }

  return { attributes: [...attributes], filterQuery: { ...filterQuery } };
}

function reducer(state: QueryFilterState, action: QueryFilterAction) {
  switch (action.type) {
    case QueryFilterActions.AddRule: {
      if (isNilOrEmpty(state.attributes)) return state;

      const defaultThing = state.attributes[0];
      const availableOperations = getFilterOperators(defaultThing.name);

      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          rules: [
            ...state.filterQuery.rules,
            {
              field: defaultThing.name,
              operation: availableOperations[0],
              value: { displayValue: null },
            },
          ],
        },
      };
    }
    case QueryFilterActions.RemoveRule: {
      const rulesClone = [...state.filterQuery.rules];

      rulesClone.splice(action.payload.index, 1);

      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          rules: rulesClone,
        },
      };
    }
    case QueryFilterActions.SetCombinator:
      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          combinator: action.payload.combinator,
        },
      };
    case QueryFilterActions.SetField:
      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          rules: setRule(state.filterQuery, action.payload.index, { field: action.payload.field }),
        },
      };
    case QueryFilterActions.SetOperation:
      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          rules: setRule(state.filterQuery, action.payload.index, { operation: action.payload.operation }),
        },
      };
    case QueryFilterActions.SetValue:
      return {
        ...state,
        filterQuery: {
          ...state.filterQuery,
          rules: setRule(state.filterQuery, action.payload.index, { value: action.payload.value }),
        },
      };
    default:
      throw new Error('Unknown filter action');
  }
}

function setRule(state: FilterQuery, ruleIndex: number, newRulePartial: Partial<FilterRule>) {
  return state.rules.map((rule, index) => {
    if (index !== ruleIndex) return rule;
    return {
      ...rule,
      ...newRulePartial,
    };
  });
}
//#endregion
