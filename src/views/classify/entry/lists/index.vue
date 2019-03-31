<template>
  <div class="lists">
    <div class="item" v-for="(item,index) in dataList" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="body">
        <ul class="nav">
          <li class="nav-item" v-for="(child,childIndex) in item.lists" :key="childIndex">
            <router-link :to="{path: child.path, query:{id : child.id}}" tag="div">
              <img class="icon" :src="child.image || 'https://via.placeholder.com/88x88'" alt="">
              <p class="label">{{child.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import dataList from './datas.js'
export default {
  data () {
    return {
      dataList: dataList
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
