import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add42839: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42839.addEntity(input.entity, input.parent),
    }),
    list42839: (_parent, args, { dataSources }) => ({ data: dataSources.api42839.listEntity(args) }),
    get42839: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42839.getEntity(id) }),
    delete42839: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42839.deleteEntity(id) }),
    update42839: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42839.updateEntity(entity),
    }),
    autoComplete42839: (_parent, params, { dataSources }) => ({
      data: dataSources.api42839.getAutoCompleteValues(params.input),
    }),

    // Customer Resolvers
    add42841: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42841.addEntity(input.entity, input.parent),
    }),
    list42841: (_parent, args, { dataSources }) => ({ data: dataSources.api42841.listEntity(args) }),
    get42841: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42841.getEntity(id) }),
    delete42841: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42841.deleteEntity(id) }),
    update42841: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42841.updateEntity(entity),
    }),
    autoComplete42841: (_parent, params, { dataSources }) => ({
      data: dataSources.api42841.getAutoCompleteValues(params.input),
    }),
    addToPromotionList42841: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api42841.customAction_addToPromotionList(params.input),

    // CustomerId Resolvers
    add42842: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42842.addEntity(input.entity, input.parent),
    }),
    list42842: (_parent, args, { dataSources }) => ({ data: dataSources.api42842.listEntity(args) }),
    get42842: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42842.getEntity(id) }),
    delete42842: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42842.deleteEntity(id) }),
    update42842: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42842.updateEntity(entity),
    }),
    autoComplete42842: (_parent, params, { dataSources }) => ({
      data: dataSources.api42842.getAutoCompleteValues(params.input),
    }),

    // FirstName Resolvers
    add42843: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42843.addEntity(input.entity, input.parent),
    }),
    list42843: (_parent, args, { dataSources }) => ({ data: dataSources.api42843.listEntity(args) }),
    get42843: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42843.getEntity(id) }),
    delete42843: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42843.deleteEntity(id) }),
    update42843: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42843.updateEntity(entity),
    }),
    autoComplete42843: (_parent, params, { dataSources }) => ({
      data: dataSources.api42843.getAutoCompleteValues(params.input),
    }),

    // LastName Resolvers
    add42844: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42844.addEntity(input.entity, input.parent),
    }),
    list42844: (_parent, args, { dataSources }) => ({ data: dataSources.api42844.listEntity(args) }),
    get42844: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42844.getEntity(id) }),
    delete42844: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42844.deleteEntity(id) }),
    update42844: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42844.updateEntity(entity),
    }),
    autoComplete42844: (_parent, params, { dataSources }) => ({
      data: dataSources.api42844.getAutoCompleteValues(params.input),
    }),

    // StateMailing Resolvers
    add42845: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42845.addEntity(input.entity, input.parent),
    }),
    list42845: (_parent, args, { dataSources }) => ({ data: dataSources.api42845.listEntity(args) }),
    get42845: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42845.getEntity(id) }),
    delete42845: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42845.deleteEntity(id) }),
    update42845: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42845.updateEntity(entity),
    }),
    autoComplete42845: (_parent, params, { dataSources }) => ({
      data: dataSources.api42845.getAutoCompleteValues(params.input),
    }),

    // CountryMailing Resolvers
    add42846: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42846.addEntity(input.entity, input.parent),
    }),
    list42846: (_parent, args, { dataSources }) => ({ data: dataSources.api42846.listEntity(args) }),
    get42846: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42846.getEntity(id) }),
    delete42846: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42846.deleteEntity(id) }),
    update42846: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42846.updateEntity(entity),
    }),
    autoComplete42846: (_parent, params, { dataSources }) => ({
      data: dataSources.api42846.getAutoCompleteValues(params.input),
    }),

    // CityMailing Resolvers
    add42847: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42847.addEntity(input.entity, input.parent),
    }),
    list42847: (_parent, args, { dataSources }) => ({ data: dataSources.api42847.listEntity(args) }),
    get42847: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42847.getEntity(id) }),
    delete42847: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42847.deleteEntity(id) }),
    update42847: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42847.updateEntity(entity),
    }),
    autoComplete42847: (_parent, params, { dataSources }) => ({
      data: dataSources.api42847.getAutoCompleteValues(params.input),
    }),

    // AddrTypeMailing Resolvers
    add42848: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42848.addEntity(input.entity, input.parent),
    }),
    list42848: (_parent, args, { dataSources }) => ({ data: dataSources.api42848.listEntity(args) }),
    get42848: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42848.getEntity(id) }),
    delete42848: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42848.deleteEntity(id) }),
    update42848: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42848.updateEntity(entity),
    }),
    autoComplete42848: (_parent, params, { dataSources }) => ({
      data: dataSources.api42848.getAutoCompleteValues(params.input),
    }),

    // AgeBracket Resolvers
    add42849: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42849.addEntity(input.entity, input.parent),
    }),
    list42849: (_parent, args, { dataSources }) => ({ data: dataSources.api42849.listEntity(args) }),
    get42849: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42849.getEntity(id) }),
    delete42849: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42849.deleteEntity(id) }),
    update42849: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42849.updateEntity(entity),
    }),
    autoComplete42849: (_parent, params, { dataSources }) => ({
      data: dataSources.api42849.getAutoCompleteValues(params.input),
    }),

    // ContactEmail Resolvers
    add42850: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42850.addEntity(input.entity, input.parent),
    }),
    list42850: (_parent, args, { dataSources }) => ({ data: dataSources.api42850.listEntity(args) }),
    get42850: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42850.getEntity(id) }),
    delete42850: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42850.deleteEntity(id) }),
    update42850: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42850.updateEntity(entity),
    }),
    autoComplete42850: (_parent, params, { dataSources }) => ({
      data: dataSources.api42850.getAutoCompleteValues(params.input),
    }),

    // Gender Resolvers
    add42851: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42851.addEntity(input.entity, input.parent),
    }),
    list42851: (_parent, args, { dataSources }) => ({ data: dataSources.api42851.listEntity(args) }),
    get42851: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42851.getEntity(id) }),
    delete42851: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42851.deleteEntity(id) }),
    update42851: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42851.updateEntity(entity),
    }),
    autoComplete42851: (_parent, params, { dataSources }) => ({
      data: dataSources.api42851.getAutoCompleteValues(params.input),
    }),

    // CreditRating Resolvers
    add42853: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42853.addEntity(input.entity, input.parent),
    }),
    list42853: (_parent, args, { dataSources }) => ({ data: dataSources.api42853.listEntity(args) }),
    get42853: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42853.getEntity(id) }),
    delete42853: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42853.deleteEntity(id) }),
    update42853: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42853.updateEntity(entity),
    }),
    autoComplete42853: (_parent, params, { dataSources }) => ({
      data: dataSources.api42853.getAutoCompleteValues(params.input),
    }),

    // MaritalStatus Resolvers
    add42854: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42854.addEntity(input.entity, input.parent),
    }),
    list42854: (_parent, args, { dataSources }) => ({ data: dataSources.api42854.listEntity(args) }),
    get42854: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42854.getEntity(id) }),
    delete42854: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42854.deleteEntity(id) }),
    update42854: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42854.updateEntity(entity),
    }),
    autoComplete42854: (_parent, params, { dataSources }) => ({
      data: dataSources.api42854.getAutoCompleteValues(params.input),
    }),

    // Sale Resolvers
    add42855: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42855.addEntity(input.entity, input.parent),
    }),
    list42855: (_parent, args, { dataSources }) => ({ data: dataSources.api42855.listEntity(args) }),
    get42855: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42855.getEntity(id) }),
    delete42855: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42855.deleteEntity(id) }),
    update42855: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42855.updateEntity(entity),
    }),
    autoComplete42855: (_parent, params, { dataSources }) => ({
      data: dataSources.api42855.getAutoCompleteValues(params.input),
    }),

    // SaleType Resolvers
    add42856: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42856.addEntity(input.entity, input.parent),
    }),
    list42856: (_parent, args, { dataSources }) => ({ data: dataSources.api42856.listEntity(args) }),
    get42856: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42856.getEntity(id) }),
    delete42856: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42856.deleteEntity(id) }),
    update42856: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42856.updateEntity(entity),
    }),
    autoComplete42856: (_parent, params, { dataSources }) => ({
      data: dataSources.api42856.getAutoCompleteValues(params.input),
    }),

    // NetPaidShipTax Resolvers
    add42857: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42857.addEntity(input.entity, input.parent),
    }),
    list42857: (_parent, args, { dataSources }) => ({ data: dataSources.api42857.listEntity(args) }),
    get42857: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42857.getEntity(id) }),
    delete42857: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42857.deleteEntity(id) }),
    update42857: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42857.updateEntity(entity),
    }),
    autoComplete42857: (_parent, params, { dataSources }) => ({
      data: dataSources.api42857.getAutoCompleteValues(params.input),
    }),

    // NetProfit Resolvers
    add42858: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42858.addEntity(input.entity, input.parent),
    }),
    list42858: (_parent, args, { dataSources }) => ({ data: dataSources.api42858.listEntity(args) }),
    get42858: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42858.getEntity(id) }),
    delete42858: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42858.deleteEntity(id) }),
    update42858: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42858.updateEntity(entity),
    }),
    autoComplete42858: (_parent, params, { dataSources }) => ({
      data: dataSources.api42858.getAutoCompleteValues(params.input),
    }),

    // DiscountGiven Resolvers
    add42859: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42859.addEntity(input.entity, input.parent),
    }),
    list42859: (_parent, args, { dataSources }) => ({ data: dataSources.api42859.listEntity(args) }),
    get42859: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42859.getEntity(id) }),
    delete42859: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42859.deleteEntity(id) }),
    update42859: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42859.updateEntity(entity),
    }),
    autoComplete42859: (_parent, params, { dataSources }) => ({
      data: dataSources.api42859.getAutoCompleteValues(params.input),
    }),

    // ItemCategory Resolvers
    add42860: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42860.addEntity(input.entity, input.parent),
    }),
    list42860: (_parent, args, { dataSources }) => ({ data: dataSources.api42860.listEntity(args) }),
    get42860: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42860.getEntity(id) }),
    delete42860: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42860.deleteEntity(id) }),
    update42860: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42860.updateEntity(entity),
    }),
    autoComplete42860: (_parent, params, { dataSources }) => ({
      data: dataSources.api42860.getAutoCompleteValues(params.input),
    }),

    // ItemClass Resolvers
    add42861: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42861.addEntity(input.entity, input.parent),
    }),
    list42861: (_parent, args, { dataSources }) => ({ data: dataSources.api42861.listEntity(args) }),
    get42861: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42861.getEntity(id) }),
    delete42861: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42861.deleteEntity(id) }),
    update42861: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42861.updateEntity(entity),
    }),
    autoComplete42861: (_parent, params, { dataSources }) => ({
      data: dataSources.api42861.getAutoCompleteValues(params.input),
    }),

    // Item Resolvers
    add42862: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42862.addEntity(input.entity, input.parent),
    }),
    list42862: (_parent, args, { dataSources }) => ({ data: dataSources.api42862.listEntity(args) }),
    get42862: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42862.getEntity(id) }),
    delete42862: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42862.deleteEntity(id) }),
    update42862: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42862.updateEntity(entity),
    }),
    autoComplete42862: (_parent, params, { dataSources }) => ({
      data: dataSources.api42862.getAutoCompleteValues(params.input),
    }),

    // Manufacturer Resolvers
    add42863: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42863.addEntity(input.entity, input.parent),
    }),
    list42863: (_parent, args, { dataSources }) => ({ data: dataSources.api42863.listEntity(args) }),
    get42863: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42863.getEntity(id) }),
    delete42863: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42863.deleteEntity(id) }),
    update42863: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42863.updateEntity(entity),
    }),
    autoComplete42863: (_parent, params, { dataSources }) => ({
      data: dataSources.api42863.getAutoCompleteValues(params.input),
    }),

    // QuantityOnHand Resolvers
    add42864: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42864.addEntity(input.entity, input.parent),
    }),
    list42864: (_parent, args, { dataSources }) => ({ data: dataSources.api42864.listEntity(args) }),
    get42864: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42864.getEntity(id) }),
    delete42864: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42864.deleteEntity(id) }),
    update42864: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42864.updateEntity(entity),
    }),
    autoComplete42864: (_parent, params, { dataSources }) => ({
      data: dataSources.api42864.getAutoCompleteValues(params.input),
    }),

    // Promotion Resolvers
    add42865: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api42865.addEntity(input.entity, input.parent),
    }),
    list42865: (_parent, args, { dataSources }) => ({ data: dataSources.api42865.listEntity(args) }),
    get42865: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42865.getEntity(id) }),
    delete42865: (_parent, { id }, { dataSources }) => ({ data: dataSources.api42865.deleteEntity(id) }),
    update42865: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api42865.updateEntity(entity),
    }),
    autoComplete42865: (_parent, params, { dataSources }) => ({
      data: dataSources.api42865.getAutoCompleteValues(params.input),
    }),
  },
};
