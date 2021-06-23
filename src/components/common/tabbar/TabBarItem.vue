<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemclick">
    <slot v-if="isActive" name="item-icon-active">
      <div>图标act</div>
    </slot>
    <slot v-else name="item-icon">
      <div>图标</div>
    </slot>
    <slot name="item-name">
      <div>名称</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'skyblue'
    }
  },
  methods: {
    itemclick () {
      this.$router.replace(this.path)
      // console.log(this.$router)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.includes(this.path)
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

</style>