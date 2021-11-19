import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69';

//Sales filters
export const workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
