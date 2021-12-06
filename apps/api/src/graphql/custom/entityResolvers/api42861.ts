import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiItemClass extends RESTDataSource {
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

  // Add ItemClass
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('itemClass', entity);

    // Sample HTTP POST request.
    // return this.post('itemClass', entity);
  }

  // Delete ItemClass
  async deleteEntity(id: string) {
    return KapiCrud.delete('itemClass', id);

    // Sample HTTP DELETE request.
    // return this.delete(`itemClass/${id}`);
  }

  // List ItemClass
  async listEntity(params: any) {
    return KapiCrud.list('itemClass', params);

    // Sample HTTP GET request.
    // return this.get('itemClass', params);
  }

  // Get ItemClass
  async getEntity(id: string) {
    return KapiCrud.get('itemClass', id);

    // Sample HTTP GET request.
    // return this.get(`itemClass/${id}`);
  }

  // Update ItemClass
  async updateEntity(entity) {
    return KapiCrud.update('itemClass', entity);

    // Sample HTTP PATCH request.
    // return this.patch(itemClass, entity);
  }

  // Auto complete for ItemClass
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('itemClass');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.itemClass }));
  }
}
