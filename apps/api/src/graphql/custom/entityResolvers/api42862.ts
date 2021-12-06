import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiItem extends RESTDataSource {
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

  // Add Item
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('item', entity);

    // Sample HTTP POST request.
    // return this.post('item', entity);
  }

  // Delete Item
  async deleteEntity(id: string) {
    return KapiCrud.delete('item', id);

    // Sample HTTP DELETE request.
    // return this.delete(`item/${id}`);
  }

  // List Item
  async listEntity(params: any) {
    return KapiCrud.list('item', params);

    // Sample HTTP GET request.
    // return this.get('item', params);
  }

  // Get Item
  async getEntity(id: string) {
    return KapiCrud.get('item', id);

    // Sample HTTP GET request.
    // return this.get(`item/${id}`);
  }

  // Update Item
  async updateEntity(entity) {
    return KapiCrud.update('item', entity);

    // Sample HTTP PATCH request.
    // return this.patch(item, entity);
  }

  // Auto complete for Item
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('item');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.item }));
  }
}
