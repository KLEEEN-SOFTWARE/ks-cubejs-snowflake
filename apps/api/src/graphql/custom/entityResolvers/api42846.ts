import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCountryMailing extends RESTDataSource {
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

  // Add CountryMailing
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('countryMailing', entity);

    // Sample HTTP POST request.
    // return this.post('countryMailing', entity);
  }

  // Delete CountryMailing
  async deleteEntity(id: string) {
    return KapiCrud.delete('countryMailing', id);

    // Sample HTTP DELETE request.
    // return this.delete(`countryMailing/${id}`);
  }

  // List CountryMailing
  async listEntity(params: any) {
    return KapiCrud.list('countryMailing', params);

    // Sample HTTP GET request.
    // return this.get('countryMailing', params);
  }

  // Get CountryMailing
  async getEntity(id: string) {
    return KapiCrud.get('countryMailing', id);

    // Sample HTTP GET request.
    // return this.get(`countryMailing/${id}`);
  }

  // Update CountryMailing
  async updateEntity(entity) {
    return KapiCrud.update('countryMailing', entity);

    // Sample HTTP PATCH request.
    // return this.patch(countryMailing, entity);
  }

  // Auto complete for CountryMailing
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('countryMailing');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { countryMailing: { displayValue: string; value?: any } }) => ({
      ...obj.countryMailing,
    }));
  }
}
