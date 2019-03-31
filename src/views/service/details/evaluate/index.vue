<template>
  <div class="evaluate">
    <div class="infoWrapper">
      <div class="info">
        <div class="label">客户评价
          <span class="numm">（41554条）</span>
        </div>
        <div class="desc">
          <span class="name">查看详情</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <ul class="search">
        <li class="search-item is-active">全部</li>
        <li class="search-item">确认速度快</li>
        <li class="search-item">打扫很干净</li>
        <li class="search-item">沟通顺畅</li>
        <li class="search-item">态度好</li>
      </ul>
    </div>
    <div class="listsWrapper">
      <ul class="lists">
        <li class="lists-item">
          <div class="label">
            <div class="name">吴***达</div>
            <div class="ratelist">
              <p class="tip">评分</p>
              <van-rate v-model="rateValue" :size="14" />
            </div>
          </div>
          <div class="desc">电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好</div>
        </li>
        <li class="lists-item">
          <div class="label">
            <div class="name">吴***达</div>
            <div class="ratelist">
              <p class="tip">评分</p>
              <van-rate v-model="rateValue" :size="14" />
            </div>
          </div>
          <div class="desc">电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rateValue: 3
    }
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
