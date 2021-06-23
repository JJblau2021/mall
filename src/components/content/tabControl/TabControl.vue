<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
      @click="getActiveIndex(index)"
      :key="item" 
      class="tab-control-item" 
      :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    getActiveIndex (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
  
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .active span {
    padding-bottom: 1px;
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>