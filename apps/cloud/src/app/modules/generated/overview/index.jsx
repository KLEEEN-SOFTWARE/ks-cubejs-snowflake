import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider } from '@kleeen/react/hooks';
import { useState } from 'react';
import { ReportLayoutStyle, DataViewControlSection, ViewsManager } from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `overview`;
  const workflowData = {
    hasFilters: true,
    taskName: 'overview',
    workflowId: '7718c68f-90b6-4bfe-8607-919feb2930a0',
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = ReportLayoutStyle();
  const workflowName = `Overview`;

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.dashboardTask} subhead-dynamic`}>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              taskName,
              title: workflowName,
            }}
            containerClasses={`${classes.dashboardArea} browserArea`}
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
