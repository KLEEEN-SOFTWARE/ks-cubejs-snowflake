import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiFirstName extends RESTDataSource {
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

  // Add FirstName
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('firstName', entity);

    // Sample HTTP POST request.
    // return this.post('firstName', entity);
  }

  // Delete FirstName
  async deleteEntity(id: string) {
    return KapiCrud.delete('firstName', id);

    // Sample HTTP DELETE request.
    // return this.delete(`firstName/${id}`);
  }

  // List FirstName
  async listEntity(params: any) {
    return KapiCrud.list('firstName', params);

    // Sample HTTP GET request.
    // return this.get('firstName', params);
  }

  // Get FirstName
  async getEntity(id: string) {
    return KapiCrud.get('firstName', id);

    // Sample HTTP GET request.
    // return this.get(`firstName/${id}`);
  }

  // Update FirstName
  async updateEntity(entity) {
    return KapiCrud.update('firstName', entity);

    // Sample HTTP PATCH request.
    // return this.patch(firstName, entity);
  }

  // Auto complete for FirstName
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('firstName');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.firstName }));
  }
}
