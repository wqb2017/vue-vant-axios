<template>
  <div class="details">
    <div class="imgWrapper">
      <img class="img" src="https://via.placeholder.com/780x480" alt="">
      <p class="tips">深圳高级保姆，高级家教，好几工程师深圳高级保姆，高级家教，好几工程师</p>
    </div>
    <div class="timeWrapper">
      <div class="price">￥
        <span class="num">88</span>/小时</div>
      <div class="label">服务时间</div>
      <div class="times">2018-01-01 14:20:10</div>
    </div>
    <div class="infoWrapper">
      <img class="img" src="https://via.placeholder.com/120x120" alt="">
      <div class="info">
        <div class="label">
          <span class="name">陈不二</span>
          <span class="total">成交：36件</span>
        </div>
        <div class="address">
          <i class="fa fa-map-marker"></i>深圳市龙华区留仙大道彩悦大夏</div>
        <div class="tel">
          <i class="fa fa-phone"></i>
        </div>
      </div>
    </div>
    <div class="evaluateWrapper">
      <TheEvaluate></TheEvaluate>
    </div>
    <div class="serviceDetails">
      <TheServiceDetails></TheServiceDetails>
    </div>
  </div>
</template>
<script>
import TheEvaluate from './evaluate'
import TheServiceDetails from './service-details'
export default {
  components: {
    TheEvaluate,
    TheServiceDetails
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
