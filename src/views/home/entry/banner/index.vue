<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in imagesList" :key="index">
        <img class="img" :src="item.image || 'https://via.placeholder.com/750x280'" :alt="item.name">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imagesList: [
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t1/2433/40/3666/74632/5b9a1293Ee1f66486/91d8858be9dd447f.jpg!cr_1125x549_0_72',
          name: 'logo'
        },
        {
          image: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t20029/272/1765431541/135543/fbf22a8b/5b25a7d0Ncdb4f0f3.jpg!cr_1125x549_0_72!q70.jpg.dpg',
          name: 'logo'
        },
        {
          image: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4147/35/3318/519502/5b98d1fcEc9d50201/d2a52f179a5f2fab.jpg!cr_1125x549_0_72!q70.jpg.dpg',
          name: 'logo'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
