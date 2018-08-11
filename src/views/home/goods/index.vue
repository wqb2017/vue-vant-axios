<template>
  <div class="goods">
    <h3 class="goods-title">推荐列表</h3>
    <ul class="goods-list">
      <li class="goods-list-item" v-for="(item,index) in getProductListDatas" :key="index">
        <div class="goods-list-item__img">
          <img :src="imgURL(item.home_img)" alt="">
        </div>
        <div class="goods-list-item__desc">
          <p class="label">
            <strong>{{item.name}}</strong>
          </p>
          <p class="price">
            <font class="rice">{{item.proPromotionPrice}}元/{{item.unit}}</font>
            <del class="del">{{item.price}}元/{{item.unit}}</del>
          </p>
          <p class="tip">{{item.detail}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import * as Utils from '@/assets/js/utils';
export default {
  data () {
    return {
      getProductListDatas: [],
      getProductListReq: {
        producttype: this.$store.state.home.goodsProducttype,
        pageNumber: 1,
        pageSize: 10
      }
    };
  },
  watch: {
    '$store.state.home.goodsProducttype' () {
      this.getProductListReq.producttype = this.$store.state.home.goodsProducttype;
      this.getProductList();
    }
  },
  mounted () {
    this.getProductList();
  },
  methods: {
    /**
     * 图片
     * @param {string} file 文件路径
     */
    imgURL (file) {
      return Utils.parseFileURL(file);
    },
    /**
     * 每日推荐列表
     */
    getProductList () {
      this.$createRequestHttp('/product/getProductList', this.getProductListReq).then((res) => {
        if (res.data) {
          this.getProductListDatas = res.data.list;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
