/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import {
  CustomActionArgs,
  DataListingArgs,
  DataAggregationArgs,
  MultiTransFormationArgs,
  AuthContext,
} from '../../../types';
import { custom_action_8211fb91_2932_4d60_8dcb_536d7f121670 } from '../../custom/widgetResolvers/custom_action_8211fb91_2932_4d60_8dcb_536d7f121670';
import { entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855 } from '../../custom/widgetResolvers/entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855';
import { entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860 } from '../../custom/widgetResolvers/entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860';
import { entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861 } from '../../custom/widgetResolvers/entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861';
import { entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863 } from '../../custom/widgetResolvers/entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863';
import { entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864 } from '../../custom/widgetResolvers/entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853';
import { entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854 } from '../../custom/widgetResolvers/entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854';
import { object_listing_15675209_b48f_49e8_8e43_025fa1f15593 } from '../../custom/widgetResolvers/object_listing_15675209_b48f_49e8_8e43_025fa1f15593';
import { object_listing_2b8b423f_924d_4166_af75_ac626ae4e974 } from '../../custom/widgetResolvers/object_listing_2b8b423f_924d_4166_af75_ac626ae4e974';
import { object_listing_2ea40cee_8bfb_4377_b913_940375698bec } from '../../custom/widgetResolvers/object_listing_2ea40cee_8bfb_4377_b913_940375698bec';
import { object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad } from '../../custom/widgetResolvers/object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad';
import { object_listing_b2a1508d_a714_4988_b75a_bc44495a3060 } from '../../custom/widgetResolvers/object_listing_b2a1508d_a714_4988_b75a_bc44495a3060';
import { object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776 } from '../../custom/widgetResolvers/object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776';
import { object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691 } from '../../custom/widgetResolvers/object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691';
import { object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57 } from '../../custom/widgetResolvers/object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57';
import { object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b } from '../../custom/widgetResolvers/object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b';
import { widget_1b258c64_46b2_48bf_85c7_87a9af56f29b } from '../../custom/widgetResolvers/widget_1b258c64_46b2_48bf_85c7_87a9af56f29b';
import { widget_40ff3ba8_da40_4f55_8417_1ce42eca814c } from '../../custom/widgetResolvers/widget_40ff3ba8_da40_4f55_8417_1ce42eca814c';
import { widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d } from '../../custom/widgetResolvers/widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d';
import { widget_5a6aac69_378c_4db4_870a_07c7884da497 } from '../../custom/widgetResolvers/widget_5a6aac69_378c_4db4_870a_07c7884da497';
import { widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3 } from '../../custom/widgetResolvers/widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3';
import { widget_60d95e2f_c9f8_424a_bf59_ee585d26155b } from '../../custom/widgetResolvers/widget_60d95e2f_c9f8_424a_bf59_ee585d26155b';
import { widget_67329fba_e7b8_4d54_acbc_f79b19fa526a } from '../../custom/widgetResolvers/widget_67329fba_e7b8_4d54_acbc_f79b19fa526a';
import { widget_67ed8996_b996_4b29_b207_ca33b72020e7 } from '../../custom/widgetResolvers/widget_67ed8996_b996_4b29_b207_ca33b72020e7';
import { widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156 } from '../../custom/widgetResolvers/widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156';
import { widget_6d65bb0c_4f7e_4780_8060_0893663e5962 } from '../../custom/widgetResolvers/widget_6d65bb0c_4f7e_4780_8060_0893663e5962';
import { widget_826ce452_a589_4876_b00e_34eb934a5d3d } from '../../custom/widgetResolvers/widget_826ce452_a589_4876_b00e_34eb934a5d3d';
import { widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012 } from '../../custom/widgetResolvers/widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012';
import { widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f } from '../../custom/widgetResolvers/widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f';
import { widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54 } from '../../custom/widgetResolvers/widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54';
import { widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c } from '../../custom/widgetResolvers/widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c';
import { widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd } from '../../custom/widgetResolvers/widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd';
import { widget_bdeefbc9_99c5_4565_9330_36f42293084f } from '../../custom/widgetResolvers/widget_bdeefbc9_99c5_4565_9330_36f42293084f';
import { widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327 } from '../../custom/widgetResolvers/widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327';
import { widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1 } from '../../custom/widgetResolvers/widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1';
import { widget_dc314cf7_680e_491b_bfeb_e8136a8ef693 } from '../../custom/widgetResolvers/widget_dc314cf7_680e_491b_bfeb_e8136a8ef693';
import { widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9 } from '../../custom/widgetResolvers/widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9';
import { widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0 } from '../../custom/widgetResolvers/widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0';
import { widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13 } from '../../custom/widgetResolvers/widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13';
import { widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51 } from '../../custom/widgetResolvers/widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51';
import { workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574 } from '../../custom/widgetResolvers/workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574';
import { workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69 } from '../../custom/widgetResolvers/workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69';
import { workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0 } from '../../custom/widgetResolvers/workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async custom_action_8211fb91_2932_4d60_8dcb_536d7f121670(args: CustomActionArgs) {
    return custom_action_8211fb91_2932_4d60_8dcb_536d7f121670(args, this.context);
  }

  async entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855(args: DataListingArgs) {
    return entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42855(args, this.context);
  }

  async entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860(args: DataListingArgs) {
    return entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42860(args, this.context);
  }

  async entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861(args: DataListingArgs) {
    return entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42861(args, this.context);
  }

  async entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863(args: DataListingArgs) {
    return entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42863(args, this.context);
  }

  async entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864(args: DataListingArgs) {
    return entity_detail_694760b1_6f21_4ced_9ac0_36e67e6fc26a_42864(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42842(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42843(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42844(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42845(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42846(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42847(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42848(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42849(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42850(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42851(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42853(args, this.context);
  }

  async entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854(args: DataListingArgs) {
    return entity_detail_b3557b50_8617_4c3b_b3a6_5eb02a36b80c_42854(args, this.context);
  }

  async object_listing_15675209_b48f_49e8_8e43_025fa1f15593(args: DataListingArgs) {
    return object_listing_15675209_b48f_49e8_8e43_025fa1f15593(args, this.context);
  }

  async object_listing_2b8b423f_924d_4166_af75_ac626ae4e974(args: DataListingArgs) {
    return object_listing_2b8b423f_924d_4166_af75_ac626ae4e974(args, this.context);
  }

  async object_listing_2ea40cee_8bfb_4377_b913_940375698bec(args: DataListingArgs) {
    return object_listing_2ea40cee_8bfb_4377_b913_940375698bec(args, this.context);
  }

  async object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad(args: DataListingArgs) {
    return object_listing_79204372_645a_4a7b_a017_cbef3a6dbcad(args, this.context);
  }

  async object_listing_b2a1508d_a714_4988_b75a_bc44495a3060(args: DataListingArgs) {
    return object_listing_b2a1508d_a714_4988_b75a_bc44495a3060(args, this.context);
  }

  async object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776(args: DataListingArgs) {
    return object_listing_c29df561_a8a4_45b3_9eac_f879dbaff776(args, this.context);
  }

  async object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691(args: DataListingArgs) {
    return object_listing_c957f090_9d77_40fe_b70a_2bf9ab173691(args, this.context);
  }

  async object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57(args: DataListingArgs) {
    return object_listing_d0e2d8b1_2fd3_4dcf_8b29_b33802645d57(args, this.context);
  }

  async object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b(args: DataListingArgs) {
    return object_listing_d2ce9408_0494_42fd_ba7a_46dc2ba23c9b(args, this.context);
  }

  async widget_1b258c64_46b2_48bf_85c7_87a9af56f29b(args: DataAggregationArgs) {
    return widget_1b258c64_46b2_48bf_85c7_87a9af56f29b(args, this.context);
  }

  async widget_40ff3ba8_da40_4f55_8417_1ce42eca814c(args: DataAggregationArgs) {
    return widget_40ff3ba8_da40_4f55_8417_1ce42eca814c(args, this.context);
  }

  async widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d(args: DataAggregationArgs) {
    return widget_44ef1d94_b75e_4f2f_bde6_3101d0e7be7d(args, this.context);
  }

  async widget_5a6aac69_378c_4db4_870a_07c7884da497(args: DataAggregationArgs) {
    return widget_5a6aac69_378c_4db4_870a_07c7884da497(args, this.context);
  }

  async widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3(args: DataAggregationArgs) {
    return widget_5b0d4aff_1640_4328_aeb0_da8c2c0dfba3(args, this.context);
  }

  async widget_60d95e2f_c9f8_424a_bf59_ee585d26155b(args: DataAggregationArgs) {
    return widget_60d95e2f_c9f8_424a_bf59_ee585d26155b(args, this.context);
  }

  async widget_67329fba_e7b8_4d54_acbc_f79b19fa526a(args: DataAggregationArgs) {
    return widget_67329fba_e7b8_4d54_acbc_f79b19fa526a(args, this.context);
  }

  async widget_67ed8996_b996_4b29_b207_ca33b72020e7(args: DataAggregationArgs) {
    return widget_67ed8996_b996_4b29_b207_ca33b72020e7(args, this.context);
  }

  async widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156(args: DataAggregationArgs) {
    return widget_6a633cf4_3d16_4ffd_be3e_d69bc01e9156(args, this.context);
  }

  async widget_6d65bb0c_4f7e_4780_8060_0893663e5962(args: DataAggregationArgs) {
    return widget_6d65bb0c_4f7e_4780_8060_0893663e5962(args, this.context);
  }

  async widget_826ce452_a589_4876_b00e_34eb934a5d3d(args: DataAggregationArgs) {
    return widget_826ce452_a589_4876_b00e_34eb934a5d3d(args, this.context);
  }

  async widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012(args: DataAggregationArgs) {
    return widget_83f1fd76_e0a4_4f55_b694_27aadf9b0012(args, this.context);
  }

  async widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f(args: DataAggregationArgs) {
    return widget_a9d6ed23_8794_42a7_8b33_c2a1eb78a43f(args, this.context);
  }

  async widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54(args: DataAggregationArgs) {
    return widget_ae4c79f7_3dad_4ca4_9d67_e9079e500b54(args, this.context);
  }

  async widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c(args: DataAggregationArgs) {
    return widget_b6f762fb_5f03_4e86_8430_99ca4c1b4c1c(args, this.context);
  }

  async widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd(args: DataAggregationArgs) {
    return widget_bc5917b0_e966_48fa_9c57_4dbe391de3cd(args, this.context);
  }

  async widget_bdeefbc9_99c5_4565_9330_36f42293084f(args: DataAggregationArgs) {
    return widget_bdeefbc9_99c5_4565_9330_36f42293084f(args, this.context);
  }

  async widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327(args: DataAggregationArgs) {
    return widget_c9d539e7_a88c_4d3f_a237_6ae4f8de0327(args, this.context);
  }

  async widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1(args: DataAggregationArgs) {
    return widget_ce1d1c28_6777_4ca7_8c92_c9fe5b6619e1(args, this.context);
  }

  async widget_dc314cf7_680e_491b_bfeb_e8136a8ef693(args: DataAggregationArgs) {
    return widget_dc314cf7_680e_491b_bfeb_e8136a8ef693(args, this.context);
  }

  async widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9(args: DataAggregationArgs) {
    return widget_dde3380c_6b4b_4fc4_8e8a_2b72d6cda1a9(args, this.context);
  }

  async widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0(args: MultiTransFormationArgs) {
    return widget_statistics66e97fdb_19eb_488b_ae28_b3ad001acfd0(args, this.context);
  }

  async widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13(args: MultiTransFormationArgs) {
    return widget_statisticsc020923c_68f5_4374_95ae_8212f2d0ce13(args, this.context);
  }

  async widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51(args: MultiTransFormationArgs) {
    return widget_statisticsc3c6450b_a31f_42f5_a2a3_47d664a8ef51(args, this.context);
  }

  async workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574(args: never) {
    return workflow_filters_01f178b4_bc97_4f4b_8045_f7ceca5f4574(args, this.context);
  }

  async workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69(args: never) {
    return workflow_filters_2e726a7e_8b54_45ec_988c_a8ecd79e8a69(args, this.context);
  }

  async workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0(args: never) {
    return workflow_filters_55f20f41_9fdd_4e26_8b8a_0334b0ea6bf0(args, this.context);
  }
}
