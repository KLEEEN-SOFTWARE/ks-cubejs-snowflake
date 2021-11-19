import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { WorkflowProvider, useFilterContext, useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import { useState } from 'react';
import {
  CollectionLayoutStyle,
  FilterSection,
  DataViewControlSection,
  ViewsManager,
  getRowsCountFromFirstTable,
} from '@kleeen/react/atomic-elements';
import { widgets } from './settings/widgets';
import { workflowAction } from './settings/workflow-action';

function Workflow({ translate, ...props }) {
  const taskName = `itemsInventory`;
  const workflowData = {
    hasFilters: true,
    taskName: 'itemsInventory',
    workflowId: '01f178b4-bc97-4f4b-8045-f7ceca5f4574',
    entity: 'Item',
  };
  const entity = `Item`;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = CollectionLayoutStyle();
  const params = { operationName: 'workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574',
      params,
    }) || {};

  function handleOnChangeFilterVisible(isFilterVisible) {
    setIsFilterOpen(isFilterVisible);
  }
  const workflowName = `Items & Inventory`;
  const objectFocus = `item`;
  const itemActions = useKleeenActions(taskName);
  const { paramsBasedOnRoute } = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <WorkflowProvider value={workflowData}>
        <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
          <div className={classes.entityBrowserFilterSection}>
            <FilterSection
              filters={data?.filters}
              taskName={taskName}
              onChangeFilterVisible={handleOnChangeFilterVisible}
            />
          </div>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: itemActions,
              objectValue: objectFocus,
              parent: currentEntity,
              taskName,
              title: workflowName,
              results: `${getRowsCountFromFirstTable(widgets, taskName)} Count of ${entity}`,
            }}
            containerClasses={
              isFilterOpen
                ? `${classes.entityBrowserAreaWithFilterSection} openFilterSection`
                : `${classes.entityBrowserArea} browserArea`
            }
            pageIntroClasses={`${classes.gridPageIntro}`}
            contentClasses={`${classes.gridGridSection}`}
            entityName={entity}
            taskName={taskName}
          />
        </div>
      </WorkflowProvider>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
