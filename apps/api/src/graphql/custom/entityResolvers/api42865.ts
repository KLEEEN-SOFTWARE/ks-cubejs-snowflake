import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPromotion extends RESTDataSource {
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

  // Add Promotion
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('promotion', entity);

    // Sample HTTP POST request.
    // return this.post('promotion', entity);
  }

  // Delete Promotion
  async deleteEntity(id: string) {
    return KapiCrud.delete('promotion', id);

    // Sample HTTP DELETE request.
    // return this.delete(`promotion/${id}`);
  }

  // List Promotion
  async listEntity(params: any) {
    return KapiCrud.list('promotion', params);

    // Sample HTTP GET request.
    // return this.get('promotion', params);
  }

  // Get Promotion
  async getEntity(id: string) {
    return KapiCrud.get('promotion', id);

    // Sample HTTP GET request.
    // return this.get(`promotion/${id}`);
  }

  // Update Promotion
  async updateEntity(entity) {
    return KapiCrud.update('promotion', entity);

    // Sample HTTP PATCH request.
    // return this.patch(promotion, entity);
  }

  // Auto complete for Promotion
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('promotion');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { promotion: { displayValue: string; value?: any } }) => ({ ...obj.promotion }));
  }
}
