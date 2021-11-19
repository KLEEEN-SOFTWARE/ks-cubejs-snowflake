import { useAttributeContextMenu, useWidgetContext, useWorkflowContext } from '@kleeen/react/hooks';

import { KsSingleBarHighlightMax } from '../../single-bar-highlight-max';
import { Loader } from '@kleeen/react/components';
import { WidgetProps } from '@kleeen/types';
import { getDataPointsFromHighchartsEventClick } from '@kleeen/frontend/utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './single-bar-highlight-max-widget.styles';

export function SingleBarHighlightMaxWidget({
  attributes,
  chartType,
  params,
  taskName,
  widgetId,
}: WidgetProps) {
  const classes = useStyles();
  const widgetData = useWidgetContext({
    params,
    taskName,
    widgetId,
  });
  const { openMenu } = useAttributeContextMenu();
  const workflowData = useWorkflowContext();

  if (isNilOrEmpty(widgetData)) {
    return <Loader />;
  }

  return (
    <div className={classes.widgetContent}>
      <KsSingleBarHighlightMax
        attributes={attributes}
        base={params.baseModel}
        context={widgetData}
        onDataPointClickEvent={(event) => {
          const dataPoints = getDataPointsFromHighchartsEventClick({
            attributes,
            event,
          });
          openMenu({
            chartType,
            dataPoints,
            e: event,
            params,
            widgetId,
            workflowData,
          });
        }}
        params={params}
        widgetId={widgetId}
      />
    </div>
  );
}
