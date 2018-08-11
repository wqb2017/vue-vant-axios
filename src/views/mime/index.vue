<template>
  <div class="mime">
    <TheSelf></TheSelf>
    <TheOrder></TheOrder>
  </div>
</template>
<script>
import TheSelf from './self';
import TheOrder from './order';
export default {
  name: 'Mime',
  components: {
    TheSelf,
    TheOrder
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
