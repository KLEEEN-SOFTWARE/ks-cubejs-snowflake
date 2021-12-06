import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSale extends RESTDataSource {
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

  // Add Sale
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sale', entity);

    // Sample HTTP POST request.
    // return this.post('sale', entity);
  }

  // Delete Sale
  async deleteEntity(id: string) {
    return KapiCrud.delete('sale', id);

    // Sample HTTP DELETE request.
    // return this.delete(`sale/${id}`);
  }

  // List Sale
  async listEntity(params: any) {
    return KapiCrud.list('sale', params);

    // Sample HTTP GET request.
    // return this.get('sale', params);
  }

  // Get Sale
  async getEntity(id: string) {
    return KapiCrud.get('sale', id);

    // Sample HTTP GET request.
    // return this.get(`sale/${id}`);
  }

  // Update Sale
  async updateEntity(entity) {
    return KapiCrud.update('sale', entity);

    // Sample HTTP PATCH request.
    // return this.patch(sale, entity);
  }

  // Auto complete for Sale
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sale');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.sale }));
  }
}
