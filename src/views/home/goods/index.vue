<template>
  <div class="goods">
    <ul class="goods-list">
      <li class="goods-list-item">
        <div class="goods-list-item__img"></div>
        <div class="goods-list-item__desc">
          <p class="label">
            <strong>都烦死你放屁大是大非</strong>
          </p>
          <p class="price">
            <font class="rice">2.21元/小时</font>
            <del class="del">154.21元/小时</del>
          </p>
          <p class="tip">发送到佛安山东你放哪都是废话扫电话覅hi大叔覅你的护肤品dfhsdoifnboi</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import createRequestHttp from '@/assets/js/createRequest';
export default {
  mounted () {
    createRequestHttp('/product/getProductList', {
      producttype: 1,
      pageNumber: 1,
      pageSize: 10
    }).then((res) => {
      console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
