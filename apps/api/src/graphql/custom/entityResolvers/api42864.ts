import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiQuantityOnHand extends RESTDataSource {
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

  // Add QuantityOnHand
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('quantityOnHand', entity);

    // Sample HTTP POST request.
    // return this.post('quantityOnHand', entity);
  }

  // Delete QuantityOnHand
  async deleteEntity(id: string) {
    return KapiCrud.delete('quantityOnHand', id);

    // Sample HTTP DELETE request.
    // return this.delete(`quantityOnHand/${id}`);
  }

  // List QuantityOnHand
  async listEntity(params: any) {
    return KapiCrud.list('quantityOnHand', params);

    // Sample HTTP GET request.
    // return this.get('quantityOnHand', params);
  }

  // Get QuantityOnHand
  async getEntity(id: string) {
    return KapiCrud.get('quantityOnHand', id);

    // Sample HTTP GET request.
    // return this.get(`quantityOnHand/${id}`);
  }

  // Update QuantityOnHand
  async updateEntity(entity) {
    return KapiCrud.update('quantityOnHand', entity);

    // Sample HTTP PATCH request.
    // return this.patch(quantityOnHand, entity);
  }

  // Auto complete for QuantityOnHand
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('quantityOnHand');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { quantityOnHand: { displayValue: string; value?: any } }) => ({
      ...obj.quantityOnHand,
    }));
  }
}
