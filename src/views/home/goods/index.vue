<template>
  <div class="goods">
    <h3 class="goods-title">每日推荐</h3>
    <ul class="goods-list">
      <li class="goods-list-item" v-for="(item,index) in getProductListDatas" :key="index">
        <div class="goods-list-item__img">
          <img :src="imgServerBaseURL(item.home_img)" alt="">
        </div>
        <div class="goods-list-item__desc">
          <p class="label">
            <strong>{{item.name}}</strong>
          </p>
          <p class="price">
            <font class="rice">{{item.proPromotionPrice}}/{{item.unit}}</font>
            <del class="del">{{item.price}}/{{item.unit}}</del>
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
      getProductListDatas: []
    };
  },
  mounted () {
    this.$createRequestHttp('/product/getProductList', {
      producttype: 1,
      pageNumber: 1,
      pageSize: 10
    }).then((res) => {
      if (res.data) {
        this.getProductListDatas = res.data.list;
      }
    });
  },
  methods: {
    imgServerBaseURL (file) {
      return Utils.setImagesURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
