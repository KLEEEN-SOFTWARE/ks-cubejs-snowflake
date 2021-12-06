import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiNetPaidShipTax extends RESTDataSource {
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

  // Add NetPaidShipTax
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('netPaidShipTax', entity);

    // Sample HTTP POST request.
    // return this.post('netPaidShipTax', entity);
  }

  // Delete NetPaidShipTax
  async deleteEntity(id: string) {
    return KapiCrud.delete('netPaidShipTax', id);

    // Sample HTTP DELETE request.
    // return this.delete(`netPaidShipTax/${id}`);
  }

  // List NetPaidShipTax
  async listEntity(params: any) {
    return KapiCrud.list('netPaidShipTax', params);

    // Sample HTTP GET request.
    // return this.get('netPaidShipTax', params);
  }

  // Get NetPaidShipTax
  async getEntity(id: string) {
    return KapiCrud.get('netPaidShipTax', id);

    // Sample HTTP GET request.
    // return this.get(`netPaidShipTax/${id}`);
  }

  // Update NetPaidShipTax
  async updateEntity(entity) {
    return KapiCrud.update('netPaidShipTax', entity);

    // Sample HTTP PATCH request.
    // return this.patch(netPaidShipTax, entity);
  }

  // Auto complete for NetPaidShipTax
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('netPaidShipTax');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.netPaidShipTax }));
  }
}
