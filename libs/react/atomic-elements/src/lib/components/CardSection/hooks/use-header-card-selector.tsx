import { ItemType, KsSvgIconSize } from '@kleeen/react/components';
import { LibraryWidget, getWidgetsByEntity } from '@kleeen/widgets';
import {
  addInvestigationWidgetProperties,
  removeInvestigateSuffix,
  useKleeenActions,
  useKleeenContext,
} from '@kleeen/react/hooks';
import { useEffect, useState } from 'react';

import { CardSelectorDropdown } from '../components/card-selector-dropdown/card-selector-dropdown';
import { InvestigationWidget } from '@kleeen/types';
import { State } from '@kleeen/react/state-management';
import { getIconByWidgetType } from '@kleeen/frontend/utils';
import { getWidgetWithFilters } from '@kleeen/investigations';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { v4 as uuid } from 'uuid';

interface UseHeaderCardSelectorProps {
  widget: InvestigationWidget;
}

export function useCardSelector({ widget }: UseHeaderCardSelectorProps) {
  const { addWidget } = useKleeenActions('ksInvestigation');
  const [cardOptions, setCardOptions] = useState<ItemType[]>([]);
  const { investigationWidgets } = useKleeenContext<State.InvestigationState>('ksInvestigation');

  const [siblingWidgets] = useState(() => {
    const { entityId, focusDataPointValue, relatedEntityId, scope } = widget;

    return getWidgetsByEntity({ entityId: relatedEntityId || entityId, scope }).map((entityWidget) => ({
      ...entityWidget,
      focusDataPointValue,
    }));
  });

  useEffect(() => {
    const newCardOptions: ItemType[] = siblingWidgets.map((siblingWidget) => {
      return {
        // FIXME: @marimba this should be removed once the KSE3-4630 is solved
        disabled: removeInvestigateSuffix(widget.id) === siblingWidget.id,
        handleOnClick: () => handleClick(siblingWidget),
        icon: getIconByWidgetType(siblingWidget.chartType),
        iconSize: KsSvgIconSize.Large,
        id: siblingWidget.id,
        key: `ks-menu-${siblingWidget.id}-${uuid()}`,
        label: siblingWidget.title,
      };
    });

    setCardOptions(newCardOptions);
  }, [siblingWidgets, investigationWidgets?.length]);

  function handleClick(newWidget: LibraryWidget) {
    if (isNilOrEmpty(newWidget)) return;

    const filters = { ...widget?.params?.filters };
    const resolvedWidgetWithFilters = getWidgetWithFilters({
      filters,
      widget: newWidget,
    });

    const widgetWithInvestigationProperties = addInvestigationWidgetProperties({
      index: investigationWidgets?.length,
      widget: resolvedWidgetWithFilters,
    });

    addWidget(widgetWithInvestigationProperties);
  }

  if (isNilOrEmpty(cardOptions)) {
    return null;
  }

  return <CardSelectorDropdown selectCardOptions={cardOptions} />;
}
