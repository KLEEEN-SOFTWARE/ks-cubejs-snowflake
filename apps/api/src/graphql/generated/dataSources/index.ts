import { ApiTimestamp } from '../../custom/entityResolvers/api42839';
import { ApiCustomer } from '../../custom/entityResolvers/api42841';
import { ApiCustomerId } from '../../custom/entityResolvers/api42842';
import { ApiFirstName } from '../../custom/entityResolvers/api42843';
import { ApiLastName } from '../../custom/entityResolvers/api42844';
import { ApiStateMailing } from '../../custom/entityResolvers/api42845';
import { ApiCountryMailing } from '../../custom/entityResolvers/api42846';
import { ApiCityMailing } from '../../custom/entityResolvers/api42847';
import { ApiAddrTypeMailing } from '../../custom/entityResolvers/api42848';
import { ApiAgeBracket } from '../../custom/entityResolvers/api42849';
import { ApiContactEmail } from '../../custom/entityResolvers/api42850';
import { ApiGender } from '../../custom/entityResolvers/api42851';
import { ApiCreditRating } from '../../custom/entityResolvers/api42853';
import { ApiMaritalStatus } from '../../custom/entityResolvers/api42854';
import { ApiSale } from '../../custom/entityResolvers/api42855';
import { ApiSaleType } from '../../custom/entityResolvers/api42856';
import { ApiNetPaidShipTax } from '../../custom/entityResolvers/api42857';
import { ApiNetProfit } from '../../custom/entityResolvers/api42858';
import { ApiDiscountGiven } from '../../custom/entityResolvers/api42859';
import { ApiItemCategory } from '../../custom/entityResolvers/api42860';
import { ApiItemClass } from '../../custom/entityResolvers/api42861';
import { ApiItem } from '../../custom/entityResolvers/api42862';
import { ApiManufacturer } from '../../custom/entityResolvers/api42863';
import { ApiQuantityOnHand } from '../../custom/entityResolvers/api42864';
import { ApiPromotion } from '../../custom/entityResolvers/api42865';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api42839: new ApiTimestamp(),
  api42841: new ApiCustomer(),
  api42842: new ApiCustomerId(),
  api42843: new ApiFirstName(),
  api42844: new ApiLastName(),
  api42845: new ApiStateMailing(),
  api42846: new ApiCountryMailing(),
  api42847: new ApiCityMailing(),
  api42848: new ApiAddrTypeMailing(),
  api42849: new ApiAgeBracket(),
  api42850: new ApiContactEmail(),
  api42851: new ApiGender(),
  api42853: new ApiCreditRating(),
  api42854: new ApiMaritalStatus(),
  api42855: new ApiSale(),
  api42856: new ApiSaleType(),
  api42857: new ApiNetPaidShipTax(),
  api42858: new ApiNetProfit(),
  api42859: new ApiDiscountGiven(),
  api42860: new ApiItemCategory(),
  api42861: new ApiItemClass(),
  api42862: new ApiItem(),
  api42863: new ApiManufacturer(),
  api42864: new ApiQuantityOnHand(),
  api42865: new ApiPromotion(),
});
