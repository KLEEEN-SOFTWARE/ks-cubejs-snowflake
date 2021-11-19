import { useAttributeContextMenu, useWidgetContext, useWorkflowContext } from '@kleeen/react/hooks';

import { KsPolarArea } from '../../polar-area';
import { Loader } from '@kleeen/react/components';
import { WidgetProps } from '@kleeen/types';
import { getDataPointsFromHighchartsEventClick } from '@kleeen/frontend/utils';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './polar-area-widget.styles';

export function PolarAreaWidget({ attributes, chartType, params, taskName, widgetId }: WidgetProps) {
  const classes = useStyles();
  const widgetData = useWidgetContext({ taskName, widgetId, params });
  const { openMenu } = useAttributeContextMenu();
  const workflowData = useWorkflowContext();

  if (isNilOrEmpty(widgetData)) {
    return <Loader />;
  }

  return (
    <div className={classes.widgetContent}>
      <KsPolarArea
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
