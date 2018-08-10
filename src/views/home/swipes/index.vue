<template>
  <div class="swipes">
    <van-swipe :autoplay="3000">
      <van-swipe-item>
        <img src="https://img1.360buyimg.com/da/s750x366_jfs/t22789/61/1863763964/206394/aa1d2a05/5b6c1cc7N9a5a41c7.jpg!cr_1125x549_0_72.dpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t20029/272/1765431541/135543/fbf22a8b/5b25a7d0Ncdb4f0f3.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img1.360buyimg.com/da/jfs/t24085/232/1915524619/128686/c3822ea8/5b6d34a0N813fb491.jpg!cr_1125x549_0_72" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<style lang="scss" scoped>
$IMG__HEIGHT:1.8rem;
.swipes {
  background-color: #39a9ed;
  .van-swipe {
    height: $IMG__HEIGHT;
    line-height: $IMG__HEIGHT;
    text-align: center;
    img{
      width: 100%;
      width: 100%;
    }
  }
}
</style>
