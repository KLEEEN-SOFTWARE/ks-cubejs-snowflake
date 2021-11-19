import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAgeBracket extends RESTDataSource {
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

  // Add AgeBracket
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ageBracket', entity);

    // Sample HTTP POST request.
    // return this.post('ageBracket', entity);
  }

  // Delete AgeBracket
  async deleteEntity(id: string) {
    return KapiCrud.delete('ageBracket', id);

    // Sample HTTP DELETE request.
    // return this.delete(`ageBracket/${id}`);
  }

  // List AgeBracket
  async listEntity(params: any) {
    return KapiCrud.list('ageBracket', params);

    // Sample HTTP GET request.
    // return this.get('ageBracket', params);
  }

  // Get AgeBracket
  async getEntity(id: string) {
    return KapiCrud.get('ageBracket', id);

    // Sample HTTP GET request.
    // return this.get(`ageBracket/${id}`);
  }

  // Update AgeBracket
  async updateEntity(entity) {
    return KapiCrud.update('ageBracket', entity);

    // Sample HTTP PATCH request.
    // return this.patch(ageBracket, entity);
  }

  // Auto complete for AgeBracket
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ageBracket');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { ageBracket: { displayValue: string; value?: any } }) => ({
      ...obj.ageBracket,
    }));
  }
}
