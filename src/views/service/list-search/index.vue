<template>
  <div class="listSearch">
    <div class="searchBox">
      <van-search v-model="searchValue" placeholder="搜索您需要的服务" show-action>
        <div slot="action" @click="goBack">取消</div>
      </van-search>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchValue: ''
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" src="./style.scss"></style>
