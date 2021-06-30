<template>
  <z-ellipsis :roll="true" triger="hover" ellipsis-position="middle" >
    超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动超出一行以后才会有title提示或者滚动
  </z-ellipsis>
  <test></test>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ZEllipsis  from './package/ZEllipsis.vue';
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
