import { DataPoint, FilterQuery, Filters, Maybe, VizParams, WidgetScope } from '@kleeen/types';

import { LibraryWidget } from '@kleeen/widgets';

export interface GetFiltersForDataPointsArgs {
  contextDataPoints: DataPoint[];
  dataPoint: DataPoint;
  scope: WidgetScope;
  widgetContextParams: VizParams;
}

interface GetFiltersForDataPointsProps {
  contextDataPoints: DataPoint[];
  dataPoint: DataPoint;
  scope: WidgetScope;
  widgetContextParams: VizParams;
}

export interface GetContextDataPointFiltersArgs {
  contextDataPoints: DataPoint[];
}

export interface GetWidgetsWithFiltersProps extends GetFiltersForDataPointsArgs {
  widgets: LibraryWidget[];
}

export interface WidgetsWithFilters {
  widgetsWithDefaultFilters: LibraryWidget[];
  widgetsWithContextDataPointFilters: LibraryWidget[];
}

export interface GetWidgetWithFilters {
  filterQuery?: FilterQuery;
  filters: Maybe<Filters>;
  overridePreviousFilters?: boolean;
  widget: LibraryWidget;
}

export interface GetContextFilters {
  widgetContextParams: VizParams;
}

export interface GetDataPointFilters {
  dataPoint: DataPoint;
  scope: WidgetScope;
}

export interface MapFilterToWidgetProps {
  filtersToApply: Filters;
}
