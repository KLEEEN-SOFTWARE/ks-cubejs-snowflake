import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiLastName extends RESTDataSource {
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

  // Add LastName
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('lastName', entity);

    // Sample HTTP POST request.
    // return this.post('lastName', entity);
  }

  // Delete LastName
  async deleteEntity(id: string) {
    return KapiCrud.delete('lastName', id);

    // Sample HTTP DELETE request.
    // return this.delete(`lastName/${id}`);
  }

  // List LastName
  async listEntity(params: any) {
    return KapiCrud.list('lastName', params);

    // Sample HTTP GET request.
    // return this.get('lastName', params);
  }

  // Get LastName
  async getEntity(id: string) {
    return KapiCrud.get('lastName', id);

    // Sample HTTP GET request.
    // return this.get(`lastName/${id}`);
  }

  // Update LastName
  async updateEntity(entity) {
    return KapiCrud.update('lastName', entity);

    // Sample HTTP PATCH request.
    // return this.patch(lastName, entity);
  }

  // Auto complete for LastName
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('lastName');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.lastName }));
  }
}
