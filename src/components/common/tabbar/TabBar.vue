<!--eslint-disable-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<!--eslint-disable-->
<script>
/* eslint-disable */
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: pink;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  box-shadow: 0 -3px 2px rgba(182, 96, 160, 0.2);
}
</style>
