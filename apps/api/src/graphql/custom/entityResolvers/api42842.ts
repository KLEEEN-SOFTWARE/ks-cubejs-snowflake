import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCustomerId extends RESTDataSource {
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

  // Add CustomerId
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('customerId', entity);

    // Sample HTTP POST request.
    // return this.post('customerId', entity);
  }

  // Delete CustomerId
  async deleteEntity(id: string) {
    return KapiCrud.delete('customerId', id);

    // Sample HTTP DELETE request.
    // return this.delete(`customerId/${id}`);
  }

  // List CustomerId
  async listEntity(params: any) {
    return KapiCrud.list('customerId', params);

    // Sample HTTP GET request.
    // return this.get('customerId', params);
  }

  // Get CustomerId
  async getEntity(id: string) {
    return KapiCrud.get('customerId', id);

    // Sample HTTP GET request.
    // return this.get(`customerId/${id}`);
  }

  // Update CustomerId
  async updateEntity(entity) {
    return KapiCrud.update('customerId', entity);

    // Sample HTTP PATCH request.
    // return this.patch(customerId, entity);
  }

  // Auto complete for CustomerId
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('customerId');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.customerId }));
  }
}
