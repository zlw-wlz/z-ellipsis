<template>
  <div class="z-ellipsis" ref="ZEllipsis" >
    <span class="z-ellipsis__content" :class="{'z-ellipsis__content__no-tips':!showTips}">
      <slot></slot>
    </span>
    <span v-if="showTipsAndRoll" :class="['z-ellipsis__tips',{'z-ellipsis__middle-tips':ellipsisPosition==='middle'}]"
      :title="slotContent">{{slotContent}}</span>
    <span v-if="roll" :class="[
      'z-ellipsis__tips',
      'z-ellipsis__tips__roll',
      {'z-ellipsis__middle-tips':ellipsisPosition==='middle'},
      alwaysAnimation ? 'z-ellipsis__tips__roll__always':'z-ellipsis__tips__hover '
      ]" :data-title="slotContent">{{slotContent}}</span>
  </div>

</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType, ref, Slot, VNode } from 'vue';
type posititon = 'right' | 'middle'
type triger = 'always' | 'hover'
export default defineComponent({
  props: {
    content: {
      type: String,
      default: ''
    },
    showTips: {
      type: Boolean,
      default: true,
    },
    ellipsisPosition: {
      type: String as PropType<posititon>,
      default: 'middle'
    },
    height: {
      type: Number,
      default: 1.5
    },
    roll: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: String,
      default: '8s'
    },
    triger: {
      type: String as PropType<triger>,
      default: 'hover'
    },
    background:{
      type:String,
      default:'#fff'
    },
    color:{
      type:String,
      default:'#000'
    }
  },
  setup(props, { slots }) {
    const ZEllipsis = ref<HTMLElement | null>(null)
    const showTipsAndRoll = computed(() => {
      return !props.roll && props.showTips
    })
    const slotContent = computed(() => {
      if (props.content) return props.content
      const defaultSlot = (slots.default as unknown as () => VNode[])()
      const children = defaultSlot[0].children
      if (typeof children !== 'string') return ''
      return children
    })
    const alwaysAnimation = computed(() => {
      return props.roll && props.triger === 'always'
    })

    onMounted(() => {
      ZEllipsis.value?.style.setProperty('--height', props.height + 'em')
      ZEllipsis.value?.style.setProperty('--speed', props.speed)
      ZEllipsis.value?.style.setProperty('background-color', props.background)
      ZEllipsis.value?.style.setProperty('color', props.color)
    })
    return {
      slotContent,
      ZEllipsis,
      showTipsAndRoll,
      alwaysAnimation
    }

  }
})
</script>

<style lang="scss">
.z-ellipsis {
  display: block;
  line-height: var(--height);
  height: var(--height);
  text-align: left;
  position: relative;
  overflow: hidden;
  .z-ellipsis {
    &__content {
      display: block;
      max-height: calc(2 * var(--height));
    }
    &__content__no-tips {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__tips {
      display: block;
      height: var(--height);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      top: calc(-2 * var(--height));
      background: inherit;
      position: relative;
      text-align: justify;
    }

    &__middle-tips {
      text-overflow: unset;
      white-space: unset;
      &::before {
        content: attr(title);
        width: 50%;
        float: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: rtl;
      }
    }
    &__tips__roll {
      &::before {
        content: attr(data-title);
      }
    }
    &__tips__hover {
      &:hover {
        display: inline-block;
        white-space: nowrap;
        animation: roll var(--speed) 0.2s linear infinite;
        overflow: unset;
        &::before {
          width: 100%;
          overflow: unset;
          float: unset;
          margin-right: 3em;
        }
      }
    }
    &__tips__roll__always {
      display: inline-block;
      white-space: nowrap;
      animation: roll var(--speed) 0.2s linear infinite;
      overflow: unset;
      &::before {
        width: 100%;
        overflow: unset;
        float: unset;
        margin-right: 3em;
      }
    }
  }
  @keyframes roll {
    to {
      transform: translateX(-50%); /*位移到 50% 时 迅速归位*/
    }
  }
}
</style>