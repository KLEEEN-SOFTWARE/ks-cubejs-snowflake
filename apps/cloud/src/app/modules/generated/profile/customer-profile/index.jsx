import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useKleeenActions } from '@kleeen/react/hooks';
import {
  SimpleLayoutStyle,
  EntityDetailsSection,
  DataViewControlSection,
  ViewsManager,
} from '@kleeen/react/atomic-elements';
import { useState } from 'react';
import { entityDetailsSectionEntityDetails } from './settings/entity-details-section-entity-details';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `customerProfile`;
  const workflowData = {
    hasFilters: false,
    taskName: 'customerProfile',
    workflowId: 'b3557b50-8617-4c3b-b3a6-5eb02a36b80c',
    entity: 'Customer',
  };
  const entity = `Customer`;
  const classes = SimpleLayoutStyle();
  const [isSummarizeOpen, setIsSummarizeOpen] = useState(true);
  const workflowName = `Customer Profile`;
  const objectFocus = `customer`;
  const customerActions = useKleeenActions(taskName);

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <div className={classes.entityBrowserDetailsSection}>
            <EntityDetailsSection
              entityName={entity}
              objectValue={objectFocus}
              entityDetails={entityDetailsSectionEntityDetails}
              taskName={taskName}
              displayTaskName={workflowName}
              onChangeFilterVisible={setIsSummarizeOpen}
            />
          </div>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: customerActions,
              hideRefreshControl: true,
              isEntityDetails: true,
              objectValue: objectFocus,
              taskName,
              title: workflowName,
            }}
            containerClasses={
              isSummarizeOpen
                ? `${classes.entityBrowserAreaWithDetailsSection} openDetailsSection `
                : `${classes.entityBrowserArea} browserArea `
            }
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.dataViewDisplaySection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
