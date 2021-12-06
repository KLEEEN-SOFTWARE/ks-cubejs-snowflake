import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiItemCategory extends RESTDataSource {
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

  // Add ItemCategory
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('itemCategory', entity);

    // Sample HTTP POST request.
    // return this.post('itemCategory', entity);
  }

  // Delete ItemCategory
  async deleteEntity(id: string) {
    return KapiCrud.delete('itemCategory', id);

    // Sample HTTP DELETE request.
    // return this.delete(`itemCategory/${id}`);
  }

  // List ItemCategory
  async listEntity(params: any) {
    return KapiCrud.list('itemCategory', params);

    // Sample HTTP GET request.
    // return this.get('itemCategory', params);
  }

  // Get ItemCategory
  async getEntity(id: string) {
    return KapiCrud.get('itemCategory', id);

    // Sample HTTP GET request.
    // return this.get(`itemCategory/${id}`);
  }

  // Update ItemCategory
  async updateEntity(entity) {
    return KapiCrud.update('itemCategory', entity);

    // Sample HTTP PATCH request.
    // return this.patch(itemCategory, entity);
  }

  // Auto complete for ItemCategory
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('itemCategory');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.itemCategory }));
  }
}
