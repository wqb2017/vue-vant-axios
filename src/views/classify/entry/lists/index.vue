<template>
  <div class="lists">
    <div class="item" v-for="(item,index) in 3" :key="index">
      <div class="title">分类一</div>
      <div class="body">
        <ul class="nav">
          <li class="nav-item">
            <router-link :to="{path: '/service/security', query:{id : '1'}}" tag="div">
              <img class="icon" src="https://via.placeholder.com/88x88" alt="">
              <p class="label">办公室跑腿</p>
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
              <p class="label">法律服务</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path: '/service/security', query:{id : '4'}}" tag="div">
              <img class="icon" src="https://via.placeholder.com/88x88" alt="">
              <p class="label">保安服务</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path: '/service/security', query:{id : '4'}}" tag="div">
              <img class="icon" src="https://via.placeholder.com/88x88" alt="">
              <p class="label">文件打印</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./style.scss"></style>
