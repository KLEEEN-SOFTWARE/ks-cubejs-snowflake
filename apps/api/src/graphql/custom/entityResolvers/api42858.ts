import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiNetProfit extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add NetProfit
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('netProfit', entity);

    // Sample HTTP POST request.
    // return this.post('netProfit', entity);
  }

  // Delete NetProfit
  async deleteEntity(id: string) {
    return KapiCrud.delete('netProfit', id);

    // Sample HTTP DELETE request.
    // return this.delete(`netProfit/${id}`);
  }

  // List NetProfit
  async listEntity(params: any) {
    return KapiCrud.list('netProfit', params);

    // Sample HTTP GET request.
    // return this.get('netProfit', params);
  }

  // Get NetProfit
  async getEntity(id: string) {
    return KapiCrud.get('netProfit', id);

    // Sample HTTP GET request.
    // return this.get(`netProfit/${id}`);
  }

  // Update NetProfit
  async updateEntity(entity) {
    return KapiCrud.update('netProfit', entity);

    // Sample HTTP PATCH request.
    // return this.patch(netProfit, entity);
  }

  // Auto complete for NetProfit
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('netProfit');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.netProfit }));
  }
}
