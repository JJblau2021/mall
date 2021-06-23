<template>
  <div class="goodsListItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goodsListItem {
    widows: 58%;
    margin: 0 1px;
  }

  .goodsListItem > img {
    width: 100%;
    border-radius: 2px;
  }

  .goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
</style>