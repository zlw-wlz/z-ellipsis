<template>
  <z-ellipsis :roll="true" triger="hover" ellipsis-position="right" >
    CSS 测试标题，这是一个稍微有点长的标题，超出一行以后才会有title提示，标题是 实现优惠券的技巧 - 2021-03-26
  </z-ellipsis>
  <test></test>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../dist/style.css'
// import ZEllipsis  from './components/ZEllipsis.vue';
import ZEllipsis  from '../dist/z-ellipsis.es';
export default defineComponent({
  name: 'App',
  components: {
    ZEllipsis
  }
})
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
