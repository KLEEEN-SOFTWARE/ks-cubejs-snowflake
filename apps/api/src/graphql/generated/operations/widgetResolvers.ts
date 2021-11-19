/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import {
  CustomActionArgs,
  DataListingArgs,
  DataAggregationArgs,
  MultiTransFormationArgs,
} from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    custom_action_8211fb91_2932_4d60_8dcb_536d7f121670: async (
      _parent: any,
      args: { input: CustomActionArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.custom_action_8211fb91_2932_4d60_8dcb_536d7f121670(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.custom_action_8211fb91_2932_4d60_8dcb_536d7f121670(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_15675209_b48f_49e8_8e43_025fa1f15593: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_15675209_b48f_49e8_8e43_025fa1f15593(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_15675209_b48f_49e8_8e43_025fa1f15593(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_2b8b423f_924d_4166_af75_ac626ae4e974: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_2b8b423f_924d_4166_af75_ac626ae4e974(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_2b8b423f_924d_4166_af75_ac626ae4e974(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_2ea40cee_8bfb_4377_b913_940375698bec: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_2ea40cee_8bfb_4377_b913_940375698bec(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_2ea40cee_8bfb_4377_b913_940375698bec(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_b2a1508d_a714_4988_b75a_bc44495a3060: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_b2a1508d_a714_4988_b75a_bc44495a3060(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_b2a1508d_a714_4988_b75a_bc44495a3060(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b(args.input, {
            ...rest,
          })
        : result;
    },

    widget_1b258c64_46b2_48bf_85c7_87a9af56f29b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_1b258c64_46b2_48bf_85c7_87a9af56f29b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_1b258c64_46b2_48bf_85c7_87a9af56f29b(args.input, { ...rest })
        : result;
    },

    widget_40ff3ba8_da40_4f55_8417_1ce42eca814c: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_40ff3ba8_da40_4f55_8417_1ce42eca814c(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_40ff3ba8_da40_4f55_8417_1ce42eca814c(args.input, { ...rest })
        : result;
    },

    widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d(args.input, { ...rest })
        : result;
    },

    widget_5a6aac69_378c_4db4_870a_07c7884da497: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_5a6aac69_378c_4db4_870a_07c7884da497(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_5a6aac69_378c_4db4_870a_07c7884da497(args.input, { ...rest })
        : result;
    },

    widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3(args.input, { ...rest })
        : result;
    },

    widget_60d95e2f_c9f8_424a_bf59_ee585d26155b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_60d95e2f_c9f8_424a_bf59_ee585d26155b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_60d95e2f_c9f8_424a_bf59_ee585d26155b(args.input, { ...rest })
        : result;
    },

    widget_67329fba_e7b8_4d54_acbc_f79b19fa526a: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_67329fba_e7b8_4d54_acbc_f79b19fa526a(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_67329fba_e7b8_4d54_acbc_f79b19fa526a(args.input, { ...rest })
        : result;
    },

    widget_67ed8996_b996_4b29_b207_ca33b72020e7: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_67ed8996_b996_4b29_b207_ca33b72020e7(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_67ed8996_b996_4b29_b207_ca33b72020e7(args.input, { ...rest })
        : result;
    },

    widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156(args.input, { ...rest })
        : result;
    },

    widget_6d65bb0c_4f7e_4780_8060_0893663e5962: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_6d65bb0c_4f7e_4780_8060_0893663e5962(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_6d65bb0c_4f7e_4780_8060_0893663e5962(args.input, { ...rest })
        : result;
    },

    widget_826ce452_a589_4876_b00e_34eb934a5d3d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_826ce452_a589_4876_b00e_34eb934a5d3d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_826ce452_a589_4876_b00e_34eb934a5d3d(args.input, { ...rest })
        : result;
    },

    widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012(args.input, { ...rest })
        : result;
    },

    widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f(args.input, { ...rest })
        : result;
    },

    widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54(args.input, { ...rest })
        : result;
    },

    widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c(args.input, { ...rest })
        : result;
    },

    widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd(args.input, { ...rest })
        : result;
    },

    widget_bdeefbc9_99c5_4565_9330_36f42293084f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_bdeefbc9_99c5_4565_9330_36f42293084f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_bdeefbc9_99c5_4565_9330_36f42293084f(args.input, { ...rest })
        : result;
    },

    widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327(args.input, { ...rest })
        : result;
    },

    widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1(args.input, { ...rest })
        : result;
    },

    widget_dc314cf7_680e_491b_bfeb_e8136a8ef693: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_dc314cf7_680e_491b_bfeb_e8136a8ef693(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_dc314cf7_680e_491b_bfeb_e8136a8ef693(args.input, { ...rest })
        : result;
    },

    widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9(args.input, { ...rest })
        : result;
    },

    widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51(args.input, {
            ...rest,
          })
        : result;
    },

    workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574();

      return result;
    },

    workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69();

      return result;
    },

    workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0();

      return result;
    },
  },
};
