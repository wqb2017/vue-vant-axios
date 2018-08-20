<template>
  <div class="home">
   <TheSlider></TheSlider>
   <TheSubmenu></TheSubmenu>
   <TheNews></TheNews>
  </div>
</template>
<script>
import TheSlider from './slider';
import TheSubmenu from './submenu';
import TheNews from './news';
export default {
  name: 'Home',
  components: {
    TheSlider,
    TheNews,
    TheSubmenu
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
