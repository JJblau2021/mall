<template>
  <div class="goods">
    <!-- <goods-list-item v-for="item in goods" :goods-item="item" :key="item"></goods-list-item> -->

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods {
    display: flex;

    /* 根据组件宽度放置成一行，默认 nowrap */
    flex-wrap: wrap;

    /* 均分模块间隔 */
    justify-content: space-evenly;
  }
</style>