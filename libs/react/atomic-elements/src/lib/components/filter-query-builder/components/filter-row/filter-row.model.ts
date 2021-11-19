import { FilterQueryBuilderProps } from '../../filter-query-builder.model';
import { FilterRule } from '@kleeen/types';

export interface FilterRowProps extends Pick<FilterQueryBuilderProps, 'translate'> {
  filterRule: FilterRule;
  index: number;
}

export type FilterRowAttributesProps = FilterRowProps;

export type FilterRowInputProps = Pick<FilterRowProps, 'filterRule' | 'index'>;

export type FilterRowOperationsProps = FilterRowProps;

export type FilterRowWhereProps = Pick<FilterRowProps, 'index' | 'translate'>;
