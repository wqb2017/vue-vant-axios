<template>
  <div class="subnav">
    <ul class="nav">
      <li class="nav-item">
        <router-link :to="{path: '/service/security', query:{id : '1'}}" tag="div">
          <img class="icon" src="https://via.placeholder.com/88x88" alt="">
          <p class="label">保安服务</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{path: '/service/security', query:{id : '2'}}" tag="div">
          <img class="icon" src="https://via.placeholder.com/88x88" alt="">
          <p class="label">保洁服务</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{path: '/service/security', query:{id : '3'}}" tag="div">
          <img class="icon" src="https://via.placeholder.com/88x88" alt="">
          <p class="label">绿化服务</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{path: '/service/security', query:{id : '4'}}" tag="div">
          <img class="icon" src="https://via.placeholder.com/88x88" alt="">
          <p class="label">保修服务</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss" scoped src="./style.scss"></style>
