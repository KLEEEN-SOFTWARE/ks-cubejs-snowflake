import { DataPointValue, InvestigationWidget, Thing, TranslateProps, WidgetScope } from '@kleeen/types';
import { KsSubNav, KsTitle } from '@kleeen/react/components';
import { useCardSelector, useHeaderActions, useHeaderFilters, useHeaderGranularity } from '../../hooks';

import { KUIConnect } from '@kleeen/core-react';
import { WidgetHeaderProps } from './widget-header.model';
import { getIconByWidgetType } from '@kleeen/frontend/utils';
import { getThingByName } from '@kleeen/things';
import { useStyles } from './widget-header.styles';

function InvestigationWidgetHeaderBase({ actions, formatMessage, translate, widget }: WidgetHeaderProps) {
  const classes = useStyles();
  const widgetFocus = getThingByName(widget.entityName);

  const FilterPicker = useHeaderFilters({
    widget,
  });

  const GranularityDropdown = useHeaderGranularity({
    actions,
    widget,
  });

  const ActionsDropdown = useHeaderActions({
    widget,
  });

  const CardSelector = useCardSelector({ widget });

  const startSectionStyles = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    // FIXME: @marimba this hack should be removed once the KSE3-4787 is done
    minWidth: 0,
    justifyContent: 'space-between',
    paddingRight: 'var(--pm-3XS)',
  };

  const investigationStartSection = {
    flexNumber: 1,
    sections: [
      {
        component: (
          <div style={startSectionStyles}>
            <KsTitle
              className={classes.widgetHeaderTitle}
              icon={getIconByWidgetType(widget.chartType)}
              title={getTitle({ formatMessage, translate, widget, widgetFocus })}
              upText={widget.title}
            />
            {CardSelector}
          </div>
        ),
        endSeparator: true,
      },
    ],
  };

  const investigationCenterSection = {
    flexNumber: 0,
    sections: [
      {
        component: FilterPicker,
        endSeparator: false,
      },
      {
        component: GranularityDropdown,
        endSeparator: true,
      },
    ],
  };

  const investigationEndSection = {
    flexNumber: 0,
    sections: [
      {
        component: ActionsDropdown,
      },
    ],
  };

  return (
    <div className={classes.widgetHeader}>
      <KsSubNav
        centerSection={investigationCenterSection}
        endSection={investigationEndSection}
        startSection={investigationStartSection}
      />
    </div>
  );
}

interface GetTitleProps extends TranslateProps {
  widget: InvestigationWidget;
  widgetFocus: Thing;
}

//#region Private Members
function getTitle({ formatMessage, translate, widget, widgetFocus }: GetTitleProps): string {
  return widget.scope === WidgetScope.Single
    ? generateSingleWidgetTitle(widget?.focusDataPointValue)
    : generateCollectionWidgetTitle({ formatMessage, translate, widgetFocus });
}

function generateSingleWidgetTitle(widgetFocusedDataPointValue: DataPointValue): string {
  return widgetFocusedDataPointValue?.displayValue?.toString();
}

function generateCollectionWidgetTitle({
  formatMessage,
  translate,
  widgetFocus,
}: Omit<GetTitleProps, 'widget'>) {
  const translationKey = 'app.subHeader.investigation.title.collection';
  const thing = translate(`entities.${widgetFocus.name}.${widgetFocus.name}`);

  return formatMessage({ id: translationKey }, { thing });
}
//#endregion

export const InvestigationWidgetHeader = KUIConnect(({ formatMessage, translate }) => ({
  formatMessage,
  translate,
}))(InvestigationWidgetHeaderBase);
