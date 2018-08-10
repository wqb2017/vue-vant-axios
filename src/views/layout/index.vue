<template>
  <div class="layout">
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from '@/views/components/tabBar';
export default {
  name: 'layout',
  components: {
    TabBar
  }
};
</script>
