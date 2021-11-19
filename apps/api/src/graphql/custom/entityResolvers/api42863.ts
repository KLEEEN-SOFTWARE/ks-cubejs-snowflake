import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiManufacturer extends RESTDataSource {
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

  // Add Manufacturer
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('manufacturer', entity);

    // Sample HTTP POST request.
    // return this.post('manufacturer', entity);
  }

  // Delete Manufacturer
  async deleteEntity(id: string) {
    return KapiCrud.delete('manufacturer', id);

    // Sample HTTP DELETE request.
    // return this.delete(`manufacturer/${id}`);
  }

  // List Manufacturer
  async listEntity(params: any) {
    return KapiCrud.list('manufacturer', params);

    // Sample HTTP GET request.
    // return this.get('manufacturer', params);
  }

  // Get Manufacturer
  async getEntity(id: string) {
    return KapiCrud.get('manufacturer', id);

    // Sample HTTP GET request.
    // return this.get(`manufacturer/${id}`);
  }

  // Update Manufacturer
  async updateEntity(entity) {
    return KapiCrud.update('manufacturer', entity);

    // Sample HTTP PATCH request.
    // return this.patch(manufacturer, entity);
  }

  // Auto complete for Manufacturer
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('manufacturer');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { manufacturer: { displayValue: string; value?: any } }) => ({
      ...obj.manufacturer,
    }));
  }
}
