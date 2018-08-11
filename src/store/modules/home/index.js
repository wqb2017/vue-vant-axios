export default {
  state: {
    // 每日推荐列表-列表类型
    goodsProducttype: 1
  },
  mutations: {
    // 列表类型
    GOODS_PRODUCTTYPE (state, active) {
      state.goodsProducttype = active;
    }
  }
};
