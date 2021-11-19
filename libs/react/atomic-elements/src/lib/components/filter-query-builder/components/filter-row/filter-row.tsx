import {
  ClassNameBem,
  ElementInputType,
  FilterCombinator,
  FilterOperation,
  ListItem,
  SingleFilterRuleValue,
} from '@kleeen/types';
import {
  FilterRowAttributesProps,
  FilterRowInputProps,
  FilterRowOperationsProps,
  FilterRowProps,
  FilterRowWhereProps,
} from './filter-row.model';
import { IconButton, Tooltip } from '@material-ui/core';
import { KsAutocomplete, KsTextField } from '@kleeen/react/components';
import { getFilterElement, getFilterOperators } from '@kleeen/elements';
import { useEffect, useState } from 'react';

import { Clear } from '@material-ui/icons';
import classnames from 'classnames';
import { getInputElement } from '../../../input-element/input-element-catalog';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useQueryFilters } from '../../hooks';
import { useStyles } from '../../filter-query-builder.styles';

const bem = ClassNameBem.FilterRow;

export function FilterRow({ filterRule, index, translate }: FilterRowProps) {
  const { removeRule } = useQueryFilters();
  const classes = useStyles();

  return (
    <div className={classnames(bem, classes.row)}>
      <FilterRowWhere index={index} translate={translate} />
      <FilterRowAttributes filterRule={filterRule} index={index} translate={translate} />
      <FilterRowOperations filterRule={filterRule} index={index} translate={translate} />
      <FilterRowInput filterRule={filterRule} index={index} />
      <Tooltip title={translate('app.filterSelection.filter.remove')} placement="left">
        <IconButton
          onClick={() => removeRule(index)}
          className={classnames(`${bem}__removeButton`, classes.removeButton)}
        >
          <Clear style={{ fontSize: 17 }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

//#region Private members
function FilterRowAttributes({ filterRule, index, translate }: FilterRowAttributesProps) {
  const { filterState, setField } = useQueryFilters();
  const classes = useStyles();

  const { attributes } = filterState;

  return (
    <KsAutocomplete
      className={classnames(`${bem}__attributes-section`, classes.option)}
      disableClearable
      getOptionLabel={(value) => translate(`entities.${value}.${value}`)}
      onChange={(_, value) => setField(index, value)}
      options={attributes.map((attribute) => attribute.name)}
      renderInput={(params) => (
        <KsTextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
          InputProps={{ ...params.InputProps }}
        />
      )}
      value={filterRule.field}
    />
  );
}

function FilterRowInput({ filterRule, index }: FilterRowInputProps) {
  const { setValue } = useQueryFilters();
  const [elementInputType, setElementInputType] = useState<ElementInputType | null>(null);
  const [, setSelectedOption] = useState<ListItem | null>(null);

  useEffect(() => {
    if (isNilOrEmpty(filterRule.field) || isNilOrEmpty(filterRule.operation)) return;

    const filterElementInputType = getFilterElement({
      filterOperator: filterRule.operation,
      thingName: filterRule.field,
    });

    setElementInputType(filterElementInputType);
  }, [filterRule.field, filterRule.operation]);

  const InputComponent = getInputElement(elementInputType);

  if (isNilOrEmpty(InputComponent)) return null;

  return (
    <InputComponent
      autoCompleteValues={[]}
      getInputElement={getInputElement}
      setSelectedOption={setSelectedOption}
      setValue={(value) => {
        setValue(index, {
          displayValue: value,
        });
      }}
      value={(filterRule.value as SingleFilterRuleValue).displayValue}
    />
  );
}

function FilterRowOperations({ filterRule, index, translate }: FilterRowOperationsProps) {
  const { setOperation } = useQueryFilters();
  const [operationsOptions, setOperationsOptions] = useState<FilterOperation[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (isNilOrEmpty(filterRule.field)) return;

    const newOperationsOptions = getFilterOperators(filterRule.field);

    setOperationsOptions(newOperationsOptions);
  }, [filterRule.field]);

  return (
    <KsAutocomplete
      className={classnames(`${bem}__operations-section`, classes.option)}
      disableClearable
      getOptionLabel={(value) => translate(`app.filter.operator.${value}`)}
      onChange={(_, value) => setOperation(index, value)}
      options={operationsOptions}
      renderInput={(params) => (
        <KsTextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
          InputProps={{ ...params.InputProps }}
        />
      )}
      value={filterRule.operation}
    />
  );
}

function FilterRowWhere({ index, translate }: FilterRowWhereProps) {
  const { filterState, setCombinator } = useQueryFilters();
  const classes = useStyles();

  const { filterQuery } = filterState;

  const shouldRenderWhereText = index === 0;

  if (shouldRenderWhereText) {
    return (
      <span className={classnames(`${bem}__where-text-section`, classes.where)}>
        {translate('app.filterSelection.section.where')}
      </span>
    );
  }

  return (
    <KsAutocomplete
      className={classnames(`${bem}__where-section`, classes.where)}
      disableClearable
      disabled={false}
      getOptionLabel={(value) => translate(`app.filter.combinator.${value}`)}
      onChange={(_, value) => setCombinator(value)}
      options={[FilterCombinator.AND, FilterCombinator.OR]}
      renderInput={(params) => (
        <KsTextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
          InputProps={{ ...params.InputProps }}
        />
      )}
      value={filterQuery.combinator}
    />
  );
}
//#endregion
