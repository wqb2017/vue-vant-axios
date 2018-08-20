<template>
  <div class="home">
   <TheSlider></TheSlider>
   <TheFloor></TheFloor>
  </div>
</template>
<script>
import TheSlider from './slider';
import TheFloor from './floor';
export default {
  name: 'Home',
  components: {
    TheSlider,
    TheFloor
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
