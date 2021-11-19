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
  const taskName = `itemProfile`;
  const workflowData = {
    hasFilters: false,
    taskName: 'itemProfile',
    workflowId: '694760b1-6f21-4ced-9ac0-36e67e6fc26a',
    entity: 'Item',
  };
  const entity = `Item`;
  const classes = SimpleLayoutStyle();
  const [isSummarizeOpen, setIsSummarizeOpen] = useState(true);
  const workflowName = `Item Profile`;
  const objectFocus = `item`;
  const itemActions = useKleeenActions(taskName);

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
              entityActions: itemActions,
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
