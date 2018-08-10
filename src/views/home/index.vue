<template>
  <div class="home">
    <TheSwipes></TheSwipes>
    <TheTabbar></TheTabbar>
    <TheGoods></TheGoods>
  </div>
</template>
<script>
import TheSwipes from './swipes';
import TheTabbar from './tabbar';
import TheGoods from './goods';
export default {
  name: 'Home',
  components: {
    TheSwipes,
    TheTabbar,
    TheGoods
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
