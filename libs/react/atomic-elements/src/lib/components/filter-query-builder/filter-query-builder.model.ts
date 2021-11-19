import { FilterQuery, Thing, Translate } from '@kleeen/types';

export interface FilterQueryBuilderProps {
  attributes: Thing[];
  filterQuery: FilterQuery;
  onFilter: (filterQuery: FilterQuery) => void;
  translate: Translate;
}

export type FilterQueryBuilderActionsProps = Pick<FilterQueryBuilderProps, 'onFilter' | 'translate'>;

export type FilterQueryBuilderRowsProps = Pick<FilterQueryBuilderProps, 'translate'>;
