import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiContactEmail extends RESTDataSource {
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

  // Add ContactEmail
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('contactEmail', entity);

    // Sample HTTP POST request.
    // return this.post('contactEmail', entity);
  }

  // Delete ContactEmail
  async deleteEntity(id: string) {
    return KapiCrud.delete('contactEmail', id);

    // Sample HTTP DELETE request.
    // return this.delete(`contactEmail/${id}`);
  }

  // List ContactEmail
  async listEntity(params: any) {
    return KapiCrud.list('contactEmail', params);

    // Sample HTTP GET request.
    // return this.get('contactEmail', params);
  }

  // Get ContactEmail
  async getEntity(id: string) {
    return KapiCrud.get('contactEmail', id);

    // Sample HTTP GET request.
    // return this.get(`contactEmail/${id}`);
  }

  // Update ContactEmail
  async updateEntity(entity) {
    return KapiCrud.update('contactEmail', entity);

    // Sample HTTP PATCH request.
    // return this.patch(contactEmail, entity);
  }

  // Auto complete for ContactEmail
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('contactEmail');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { contactEmail: { displayValue: string; value?: any } }) => ({
      ...obj.contactEmail,
    }));
  }
}
