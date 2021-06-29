
<h1 align="center">z-ellipsis</h1>

<p align="center">
<a href="" target="_blank">反馈</a>
</p>
<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg">
<p>
<p align="center">
<img src="https://github.com/aleen42/badges/raw/master/src/visual_studio_code_flat_square.svg?sanitize=true">
<img src="https://github.com/aleen42/badges/raw/master/src/typescript_flat_square.svg?sanitize=true">
<img src="https://github.com/aleen42/badges/raw/master/src/vue.svg?sanitize=true">
</p>


## 使用方法

```html
<template>
  <z-ellipsis :roll="true" triger="hover" ellipsis-position="middle">
    长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本
  </z-ellipsis>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import ZEllipsis  from 'z-ellipsis';
import 'z-ellipsis/dist/style.css'
export default defineComponent({
    name: 'App',
    components: {
    ZEllipsis
  }
})
</script>

```

## 参数说明
参数 |说明 | 类型 | 默认值
---|---|---|---
content| 内容 | string | 
showTips | 是否显示Tips | boolean | true
ellipsisPosition | 省略号位置 | right , middle | right
roll|是否滚动(开启时showTips默认置为false)|boolean|false
speed|滚动速度|string|8s
triger|滚动触发方式 | always , hover | hover
background|背景 | string | #fff
color|字体颜色 | string | #000

