import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSaleType extends RESTDataSource {
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

  // Add SaleType
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('saleType', entity);

    // Sample HTTP POST request.
    // return this.post('saleType', entity);
  }

  // Delete SaleType
  async deleteEntity(id: string) {
    return KapiCrud.delete('saleType', id);

    // Sample HTTP DELETE request.
    // return this.delete(`saleType/${id}`);
  }

  // List SaleType
  async listEntity(params: any) {
    return KapiCrud.list('saleType', params);

    // Sample HTTP GET request.
    // return this.get('saleType', params);
  }

  // Get SaleType
  async getEntity(id: string) {
    return KapiCrud.get('saleType', id);

    // Sample HTTP GET request.
    // return this.get(`saleType/${id}`);
  }

  // Update SaleType
  async updateEntity(entity) {
    return KapiCrud.update('saleType', entity);

    // Sample HTTP PATCH request.
    // return this.patch(saleType, entity);
  }

  // Auto complete for SaleType
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('saleType');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { saleType: { displayValue: string; value?: any } }) => ({ ...obj.saleType }));
  }
}
