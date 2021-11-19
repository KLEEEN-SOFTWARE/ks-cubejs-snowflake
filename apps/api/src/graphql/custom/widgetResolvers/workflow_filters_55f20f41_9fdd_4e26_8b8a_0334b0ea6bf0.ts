import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0';

//Customers filters
export const workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
