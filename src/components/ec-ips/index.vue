<template>
  <ul class="ec-ips">
    <li class="ec-ips-item jing">精</li>
    <li class="ec-ips-item xin">信</li>
    <li class="ec-ips-item jian">荐</li>
    <li class="ec-ips-item hui">惠</li>
  </ul>
</template>
<style lang="scss" scoped>
$ips--size: 0.48rem /* 18/37.5 */;
.ec-ips {
  &-item {
    float: left;
    height: $ips--size;
    line-height: $ips--size;
    text-align: center;
    width: $ips--size;
    border-radius: 0.106667rem /* 4/37.5 */;
    background: #ccc;
    color: #fff;
    font-size: 0.266667rem /* 10/37.5 */;
    margin-right: 0.106667rem /* 4/37.5 */;
    &.jing {
      background: #fecc66;
    }
    &.xin {
      background: #fe6262;
    }
    &.jian {
      background: #8ecd4a;
    }
    &.hui {
      background: #269fef;
    }
  }
}
</style>
