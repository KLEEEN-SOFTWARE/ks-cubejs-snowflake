import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiDiscountGiven extends RESTDataSource {
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

  // Add DiscountGiven
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('discountGiven', entity);

    // Sample HTTP POST request.
    // return this.post('discountGiven', entity);
  }

  // Delete DiscountGiven
  async deleteEntity(id: string) {
    return KapiCrud.delete('discountGiven', id);

    // Sample HTTP DELETE request.
    // return this.delete(`discountGiven/${id}`);
  }

  // List DiscountGiven
  async listEntity(params: any) {
    return KapiCrud.list('discountGiven', params);

    // Sample HTTP GET request.
    // return this.get('discountGiven', params);
  }

  // Get DiscountGiven
  async getEntity(id: string) {
    return KapiCrud.get('discountGiven', id);

    // Sample HTTP GET request.
    // return this.get(`discountGiven/${id}`);
  }

  // Update DiscountGiven
  async updateEntity(entity) {
    return KapiCrud.update('discountGiven', entity);

    // Sample HTTP PATCH request.
    // return this.patch(discountGiven, entity);
  }

  // Auto complete for DiscountGiven
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('discountGiven');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { discountGiven: { displayValue: string; value?: any } }) => ({
      ...obj.discountGiven,
    }));
  }
}
