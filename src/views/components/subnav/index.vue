<template>
  <div class="subnav">
    <ul class="nav">
      <li class="nav-item" v-for="(item,index) in navList" :key="index">
        <router-link :to="{path: item.path, query:{id : item.id}}" tag="div">
          <img class="icon" :src="item.image || 'https://via.placeholder.com/88x88'" alt="">
          <p class="label">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      navList: [
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t16912/18/2046755333/11079/5d93a046/5ae41d1aN7c1bb190.png',
          name: '超市',
          path: '/service/security',
          id: '1'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png',
          name: '全球购',
          path: '/service/security',
          id: '2'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t1/1547/5/3745/20977/5b9a39fdEb23086ac/1b69fa3c859b04a5.png',
          name: '服饰',
          path: '/service/security',
          id: '3'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
          name: '生鲜',
          path: '/service/security',
          id: '4'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
          name: '到家',
          path: '/service/security',
          id: '5'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
          name: '手机充值',
          path: '/service/security',
          id: '6'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t1/5622/11/2201/112476/5b962c4eE39f9651f/6f62cffb7516fa59.gif',
          name: '领劵',
          path: '/service/security',
          id: '7'
        },
        {
          image: '//m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png',
          name: '赚钱',
          path: '/service/security',
          id: '8'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped src="./style.scss"></style>
