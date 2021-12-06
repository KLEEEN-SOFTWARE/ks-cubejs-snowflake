import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCustomer extends RESTDataSource {
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

  // Add Customer
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('customer', entity);

    // Sample HTTP POST request.
    // return this.post('customer', entity);
  }

  // Delete Customer
  async deleteEntity(id: string) {
    return KapiCrud.delete('customer', id);

    // Sample HTTP DELETE request.
    // return this.delete(`customer/${id}`);
  }

  // List Customer
  async listEntity(params: any) {
    return KapiCrud.list('customer', params);

    // Sample HTTP GET request.
    // return this.get('customer', params);
  }

  // Get Customer
  async getEntity(id: string) {
    return KapiCrud.get('customer', id);

    // Sample HTTP GET request.
    // return this.get(`customer/${id}`);
  }

  // Update Customer
  async updateEntity(entity) {
    return KapiCrud.update('customer', entity);

    // Sample HTTP PATCH request.
    // return this.patch(customer, entity);
  }

  // Auto complete for Customer
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('customer');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.customer }));
  }

  // Add to Promotion List action for Customer
  async customAction_addToPromotionList(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
