import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCityMailing extends RESTDataSource {
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

  // Add CityMailing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('cityMailing', entity);

    // Sample HTTP POST request.
    // return this.post('cityMailing', entity);
  }

  // Delete CityMailing
  async deleteEntity(id: string) {
    return KapiCrud.delete('cityMailing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`cityMailing/${id}`);
  }

  // List CityMailing
  async listEntity(params: any) {
    return KapiCrud.list('cityMailing', params);

    // Sample HTTP GET request.
    // return this.get('cityMailing', params);
  }

  // Get CityMailing
  async getEntity(id: string) {
    return KapiCrud.get('cityMailing', id);

    // Sample HTTP GET request.
    // return this.get(`cityMailing/${id}`);
  }

  // Update CityMailing
  async updateEntity(entity) {
    return KapiCrud.update('cityMailing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(cityMailing, entity);
  }

  // Auto complete for CityMailing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('cityMailing');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.cityMailing }));
  }
}
