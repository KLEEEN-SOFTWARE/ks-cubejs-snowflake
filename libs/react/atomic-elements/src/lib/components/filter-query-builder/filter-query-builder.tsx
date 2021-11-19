import {
  FilterQueryBuilderActionsProps,
  FilterQueryBuilderProps,
  FilterQueryBuilderRowsProps,
} from './filter-query-builder.model';
import { QueryFilterProvider, useQueryFilters } from './hooks';

import { ClassNameBem } from '@kleeen/types';
import { FilterRow } from './components';
import { KsButtonText } from '@kleeen/react/components';
import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './filter-query-builder.styles';

const bem = ClassNameBem.FilterQueryBuilder;

export function KsFilterQueryBuilder({
  attributes,
  filterQuery,
  onFilter,
  translate,
}: FilterQueryBuilderProps) {
  const classes = useStyles();

  return (
    <QueryFilterProvider attributes={attributes} filterQuery={filterQuery}>
      <div className={classnames(bem, classes.filterSelectionContainer)}>
        <FilterRows translate={translate} />
        <FilterActions onFilter={onFilter} translate={translate} />
      </div>
    </QueryFilterProvider>
  );
}

//#region Private members
function FilterActions({ onFilter, translate }: FilterQueryBuilderActionsProps) {
  const { addRule, filterState } = useQueryFilters();
  const classes = useStyles();

  const { filterQuery } = filterState;

  function handleFilter() {
    onFilter(filterQuery);
  }

  return (
    <div className={classnames(`${bem}__actions`, classes.actions)}>
      <KsButtonText className={classnames(`${bem}__actionButton`, classes.actionButton)} onClick={addRule}>
        {translate('app.filterSelection.filter.add')}
      </KsButtonText>
      <KsButtonText
        className={classnames(`${bem}__actionButton`, classes.actionButton)}
        onClick={handleFilter}
      >
        {translate('app.filterSelection.filter.apply')}
      </KsButtonText>
    </div>
  );
}

function FilterRows({ translate }: FilterQueryBuilderRowsProps) {
  const { filterState } = useQueryFilters();
  const classes = useStyles();

  const { filterQuery } = filterState;

  if (isNilOrEmpty(filterQuery.rules)) {
    return (
      <div className={classnames(`${bem}__no-filters`, classes.noFilters)}>
        {translate('app.filterSelection.filter.noApplied')}
      </div>
    );
  }

  return (
    <>
      {filterQuery.rules.map((filterRule, index) => (
        <FilterRow
          filterRule={filterRule}
          index={index}
          key={`${filterRule.field}-${filterRule.operation}-${index}`}
          translate={translate}
        />
      ))}
    </>
  );
}
//#endregion
