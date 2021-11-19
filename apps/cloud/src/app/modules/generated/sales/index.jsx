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
  const taskName = `sales`;
  const workflowData = {
    hasFilters: true,
    taskName: 'sales',
    workflowId: '2e726a7e-8b54-45ec-988c-a8ecd79e8a69',
    entity: 'Sale',
  };
  const entity = `Sale`;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = CollectionLayoutStyle();
  const params = { operationName: 'workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69' };

  const { data } =
    useFilterContext({
      taskName,
      widgetId: 'workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69',
      params,
    }) || {};

  function handleOnChangeFilterVisible(isFilterVisible) {
    setIsFilterOpen(isFilterVisible);
  }
  const workflowName = `Sales`;
  const objectFocus = `sale`;
  const saleActions = useKleeenActions(taskName);
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
              hasDateFilter
            />
          </div>
          <ViewsManager
            views={widgets}
            SubHeader={DataViewControlSection}
            subHeaderProps={{
              actions: workflowAction,
              entity,
              entityActions: saleActions,
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
