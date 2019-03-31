<template>
  <div id="mineSetting">
    <van-cell-group class="top-cell-group">
      <van-cell title='头像' is-link>
        <img src="http://placehold.it/65x65">
      </van-cell>
      <van-cell title='名字' is-link>
        陈不二
      </van-cell>
      <van-cell title='OA账号' is-link>
        chenbuer01
      </van-cell>
      <van-cell title='性别' is-link>
        <div class="gender-wrapper">
          男 &nbsp;
          <van-switch v-model="gender" />&nbsp; 女
        </div>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="help-cell-group">
      <van-cell icon="question" title="我的客服" is-link>
        400-8888-888
      </van-cell>
      <van-cell icon="question" title="问答中心" is-link></van-cell>
      <van-cell icon="question" title="关于我们" is-link></van-cell>
    </van-cell-group>
    <div class="sign-out-btn-wrapper">
      <van-button size="large">退出登录</van-button>
    </div>
    <!-- <script src='./index.js'></script> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender: true
    }
  }
}
</script>
<style lang='scss' src='./index.scss'></style>
