<template>
  <div id="MainTabBar">
    <tab-bar>
      <tab-bar-item  v-for="(item, index) in items" :path="paths[index]" :key="item" activeColor="#ff5777">
        <template #item-icon>
          <div>
            <img :src="require('assets/imges/tabbar/' + imgs[index] + '.svg')" alt="">
          </div>
        </template>
        <template #item-icon-active>
          <div>
            <img :src="require('assets/imges/tabbar/' + imgs[index] + '_active.svg')" alt="">
          </div>
        </template>
        <template v-slot:item-name>
          <div>
            {{item}}
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
    data() {
    return {
      paths: ['/home', '/category', '/cart', '/profile'],
      items: ['首页', '分类', '购物车', '我的'],
      imgs: ['home', 'category', 'shopcart', 'profile']
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  img {
    padding-top: 2px;
    width: 25px;
  }

</style>
