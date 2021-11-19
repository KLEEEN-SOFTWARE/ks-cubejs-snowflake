import { Widget, WidgetScope, WidgetsByEntityMap } from '@kleeen/types';

export interface WidgetByIdMap {
  [key: string]: Widget;
}

// TODO: @cafe remove this type and replace all usages with Widget
/**
 * @deprecated Use Widget from @kleeen/types instead
 */
export type LibraryWidget = Widget;

export type WidgetsByEntity = WidgetsByEntityMap<Widget>;

export interface WidgetByEntityBaseParam {
  entityId: number | string;
  scope: WidgetScope;
}
