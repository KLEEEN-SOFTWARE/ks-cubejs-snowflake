import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAddrTypeMailing extends RESTDataSource {
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

  // Add AddrTypeMailing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('addrTypeMailing', entity);

    // Sample HTTP POST request.
    // return this.post('addrTypeMailing', entity);
  }

  // Delete AddrTypeMailing
  async deleteEntity(id: string) {
    return KapiCrud.delete('addrTypeMailing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`addrTypeMailing/${id}`);
  }

  // List AddrTypeMailing
  async listEntity(params: any) {
    return KapiCrud.list('addrTypeMailing', params);

    // Sample HTTP GET request.
    // return this.get('addrTypeMailing', params);
  }

  // Get AddrTypeMailing
  async getEntity(id: string) {
    return KapiCrud.get('addrTypeMailing', id);

    // Sample HTTP GET request.
    // return this.get(`addrTypeMailing/${id}`);
  }

  // Update AddrTypeMailing
  async updateEntity(entity) {
    return KapiCrud.update('addrTypeMailing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(addrTypeMailing, entity);
  }

  // Auto complete for AddrTypeMailing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('addrTypeMailing');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { addrTypeMailing: { displayValue: string; value?: any } }) => ({
      ...obj.addrTypeMailing,
    }));
  }
}