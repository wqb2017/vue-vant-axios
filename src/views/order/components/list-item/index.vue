<script>
export default {
  functional: true,
  props: {
    detail: { type: Object, default: () => ({}) },
    descClick: { type: Function, default: () => {} },
    needToolBar: { type: Boolean }
  },
  render (h, { props }) {
    const { detail, descClick, needToolBar } = props
    return (
      <div id="listItem">
        <div class="top">
          <img src={detail.imgUrl} />
          <span class="userName">{detail.userName}</span>
          <span class="status">{detail.statusName}</span>
        </div>
        <div class="desc" onClick={descClick}>
          <img src={detail.servericeImgUrl} />
          <div class="right">
            <h6 class="title van-ellipsis">{detail.servericeName}</h6>
            <span>服务时间：{detail.servericeTime}</span>
            <span>服务时长：{detail.duration}</span>
            <span>下单时间：{detail.createOrderTime}</span>
            <span class="money">￥{detail.money}</span>
          </div>
        </div>
        <div class="statistics van-hairline--bottom">
          共计 {detail.count} 件服务 合计：
          <span class="total">
            <i>￥</i>
            <span>{(detail.count * detail.money).toFixed(2)}</span>
          </span>
          <span class="end-text"> 元(含保险)</span>
        </div>
        {needToolBar && (
          <div class="tool-bar">
            <van-button type="primary">接单</van-button>
          </div>
        )}
      </div>
    )
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/function.scss';
@import '~@/assets/css/variable.scss';

$paddingLeftAndRight: half(27px);
#listItem {
  margin-bottom: half(10px);
  .top {
    display: flex;
    align-items: center;
    font-size: half(24px);
    height: half(82px);
    padding-left: $paddingLeftAndRight;
    padding-right: $paddingLeftAndRight;
    background-color: #fff;
    img {
      width: half(70px);
      height: half(70px);
      border-radius: 50%;
      margin-right: half(8px);
    }
    .userName {
      color: #626b77;
    }
    .status {
      color: #fc8a04;
      margin-left: auto;
    }
  }
  .desc {
    display: flex;
    padding: half(23px) $paddingLeftAndRight 0;
    img {
      width: half(170px);
      height: half(170px);
      margin-right: half(16px);
    }
    .right {
      display: flex;
      font-size: half(22px);
      color: #bbc0cb;
      flex: 1;
      flex-direction: column;
      .title {
        max-width: half(474px);
        font-size: half(28px);
        color: $font-color-black;
      }
      .money {
        align-self: flex-end;
        font-size: half(28px);
        color: $font-color-black;
      }
    }
  }
  .statistics {
    display: flex;
    height: half(75px);
    background-color: #fff;
    font-size: half(26px);
    align-items: center;
    justify-content: flex-end;
    padding-right: $paddingLeftAndRight;
    .total {
      font-size: half(36px);
      color: #fc8a04;
      i {
        font-style: normal;
        font-size: half(26px);
      }
    }
    .end-text {
      font-size: half(24px);
    }
  }
  .tool-bar {
    display: flex;
    height: half(80px);
    justify-content: flex-end;
    align-items: center;
    padding-right: $paddingLeftAndRight;
    background-color: #fff;
    .van-button {
      height: half(52px);
      line-height: half(52px);
      width: half(120px);
    }
  }
}
</style>
