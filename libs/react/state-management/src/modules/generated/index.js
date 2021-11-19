import * as itemsInventory from './itemsInventory';
import * as sales from './sales';
import * as customers from './customers';
import * as itemProfile from './itemProfile';
import * as overview from './overview';
import * as customerProfile from './customerProfile';

export default {
  ...Object.values({
    itemsInventory,

    sales,

    customers,

    itemProfile,

    overview,

    customerProfile,
  }),
};
