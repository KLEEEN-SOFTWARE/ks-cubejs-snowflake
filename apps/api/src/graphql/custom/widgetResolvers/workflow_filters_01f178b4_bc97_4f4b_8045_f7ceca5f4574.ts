import { WorkflowFiltersResults, AuthContext } from '../../../types';
import { filterSectionFilters } from '../../../assets/filters/workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574';

//Items & Inventory filters
export const workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574 = async (
  input: never,
  context: AuthContext,
): Promise<WorkflowFiltersResults> => {
  const filters: any = filterSectionFilters.map(async (filter) => {
    // KAPI - Integration

    // In order for you to connect your backend, you have to use the dataSource 'formatCheckApi' instead of 'formatCheckFakeApi'

    const accessResponse = await context.dataSources.formatCheckFakeApi.accessControlCheck({
      widgetId: workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574,
      section: filter.name,
    });

    return { ...filter, ...accessResponse };
  });

  return { filters };
};
