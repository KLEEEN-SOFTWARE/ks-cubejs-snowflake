import { useAttributeContextMenu, useWidgetContext, useWorkflowContext } from '@kleeen/react/hooks';

import { KsPie } from '../../pie/pie';
import { Loader } from '@kleeen/react/components';
import { WidgetProps } from '@kleeen/types';
import { getDataPointsFromHighchartsEventClick } from '@kleeen/frontend/utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './pie-widget.styles';

export function PieWidget({ attributes, chartType, params, taskName, widgetId }: WidgetProps) {
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
      <KsPie
        attributes={attributes}
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
      />
    </div>
  );
}
