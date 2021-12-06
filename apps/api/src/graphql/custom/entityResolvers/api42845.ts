import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiStateMailing extends RESTDataSource {
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

  // Add StateMailing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('stateMailing', entity);

    // Sample HTTP POST request.
    // return this.post('stateMailing', entity);
  }

  // Delete StateMailing
  async deleteEntity(id: string) {
    return KapiCrud.delete('stateMailing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`stateMailing/${id}`);
  }

  // List StateMailing
  async listEntity(params: any) {
    return KapiCrud.list('stateMailing', params);

    // Sample HTTP GET request.
    // return this.get('stateMailing', params);
  }

  // Get StateMailing
  async getEntity(id: string) {
    return KapiCrud.get('stateMailing', id);

    // Sample HTTP GET request.
    // return this.get(`stateMailing/${id}`);
  }

  // Update StateMailing
  async updateEntity(entity) {
    return KapiCrud.update('stateMailing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(stateMailing, entity);
  }

  // Auto complete for StateMailing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('stateMailing');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.stateMailing }));
  }
}
