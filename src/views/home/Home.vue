<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
    <home-recommend :cproducts="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control class="tabControl" 
    :titles="['流行','新款','精选']"
    @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import HomeFeature from './childComps/HomeFeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,

    NavBar,
    TabControl,
    GoodsList
  },
  created () {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabClick (index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.dKeyword = res.data.data.dKeyword.list
        this.keywords = res.data.data.keywords.list
        this.recommend = res.data.data.recommend.list
      }, err => console.log(err))
    },
    getHomeGoods (type) {
      const page = this.goods[type].page
      getHomeGoods(type, page + 1).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = res.data.page
      }, err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 9;

  }

  .tabControl {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  #home {
    padding-top: 44px;
  }
</style>