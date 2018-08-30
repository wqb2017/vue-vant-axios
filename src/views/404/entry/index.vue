<template>
  <div class="entry">
    <div class="body">
      <i class="fa fa-lock"></i>
      <div class="desc">
        抱歉，您暂未具备使用该应用的权限，请联系人力资源池相关人员开通权限。
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.entry {
  .body{
    padding: 0 1.28rem /* 48/37.5 */;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #333b46;
    .fa{
      font-size: 1.28rem /* 48/37.5 */;
    }
    .desc{
      font-size: .426667rem /* 16/37.5 */;
    }
  }
}
</style>
