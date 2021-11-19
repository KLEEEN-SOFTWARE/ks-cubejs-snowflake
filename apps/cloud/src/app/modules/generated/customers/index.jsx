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
  const taskName = `customers`;
  const workflowData = {
    hasFilters: true,
    taskName: 'customers',
    workflowId: '55f20f41-9fdd-4e26-8b8a-0334b0ea6bf0',
    entity: 'Customer',
  };
  const entity = `Customer`;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = CollectionLayoutStyle();
  const params = { operationName: 'workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0',
      params,
    }) || {};

  function handleOnChangeFilterVisible(isFilterVisible) {
    setIsFilterOpen(isFilterVisible);
  }
  const workflowName = `Customers`;
  const objectFocus = `customer`;
  const customerActions = useKleeenActions(taskName);
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
              entityActions: customerActions,
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
