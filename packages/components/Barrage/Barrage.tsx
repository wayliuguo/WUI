import {
  createNamespace,
  makeArrayProp,
  makeNumberProp,
  makeNumericProp,
  truthProp
} from '@w-ui/utils'
import {
  ExtractPropTypes,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch
} from 'vue'
import { useExpose } from '../../composables/use-expose'
import { BarrageExpose } from './types'

const name = 'w-barrage'
const bem = createNamespace('barrage')

export interface BarrageItem {
  id: string | number
  text: string | number
}

export const barrageProps = {
  // 弹幕数据
  modelValue: makeArrayProp<BarrageItem>(),
  // 自动播放
  autoPlay: truthProp,
  // 弹幕文字行数
  rows: makeNumericProp(4),
  // 弹幕文字区域顶部间距，单位 px
  top: makeNumericProp(10),
  // 弹幕文字划过文字的时间
  duration: makeNumericProp(4000),
  // 弹幕动画延时，单位 ms
  delay: makeNumberProp(300)
}

export type BarrageProps = ExtractPropTypes<typeof barrageProps>

export default defineComponent({
  name,
  props: barrageProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    // wrapper ref
    const barrageWrapper = ref<HTMLDivElement>()
    // 弹幕类名
    const className = bem.e('item')
    // 弹幕数量
    const total = ref<number>(0)
    // 弹幕数组
    const barrageItems: HTMLSpanElement[] = []
    // 是否初始化弹幕
    const isInitBarrage = ref(true)
    // 是否正在播放
    const isPlay = ref(props.autoPlay)

    // 创建弹幕
    const createBarrageItem = (
      text: string | number,
      delay: number = props.delay
    ) => {
      const item = document.createElement('span')
      item.className = className
      item.innerText = String(text)

      item.style.animationDuration = `${props.duration}ms`
      item.style.animationDelay = `${delay}ms`
      item.style.animationName = 'w-barrage'
      item.style.animationTimingFunction = 'linear'

      return item
    }

    // append弹幕
    const appendBarrageItem = ({ id, text }: BarrageItem, i: number) => {
      const item = createBarrageItem(
        text,
        isInitBarrage.value ? i * props.delay : undefined
      )
      if (!props.autoPlay && isPlay.value === false) {
        item.style.animationPlayState = 'paused'
      }
      // 往 wrapper 渲染 弹幕
      barrageWrapper.value?.append(item)
      total.value++

      // 弹幕 top 计算
      const top =
        ((total.value - 1) % +props.rows) * item.offsetHeight + +props.top
      item.style.top = `${top}px`
      item.dataset.id = String(id)
      barrageItems.push(item)

      // 监听动画结束事件
      item.addEventListener('animationend', () => {
        emit(
          'update:modelValue',
          [...props.modelValue].filter(v => String(v.id) !== item.dataset.id)
        )
      })
    }

    // 更新弹幕
    const updateBarrages = (
      newValue: BarrageItem[],
      oldValue: BarrageItem[]
    ) => {
      // 构建旧数据的map结构 item.id => item
      // map 的作用是找出需要移除的弹幕item
      const map = new Map(oldValue.map(item => [item.id, item]))

      // 如果新数据中依然存在item.id，则map delete 该 item
      newValue.forEach((item, i) => {
        if (map.has(item.id)) {
          map.delete(item.id)
        } else {
          appendBarrageItem(item, i)
        }
      })

      // 找出需要移除的弹幕item
      map.forEach(item => {
        const index = barrageItems.findIndex(
          span => span.dataset.id === String(item.id)
        )
        if (index > -1) {
          barrageItems[index].remove()
          barrageItems.splice(index, 1)
        }
      })
      isInitBarrage.value = false
    }

    // 通过 props.modelValue.slice() 复制 props.modelValue, 创建响应式依赖
    watch(
      () => props.modelValue.slice(),
      (newValue, oldValue) => updateBarrages(newValue ?? [], oldValue ?? []),
      { deep: true }
    )

    // wrapper 上挂载 --move-distance 属性，可以在css中var(--move-distance)使用
    const rootStyle = ref<{
      '--move-distance'?: string
    }>({})

    // 挂载完毕后先计算 wrapper 的宽度，渲染后再更新弹幕
    onMounted(async () => {
      rootStyle.value[
        '--move-distance'
      ] = `-${barrageWrapper.value?.offsetWidth}px`
      await nextTick()
      updateBarrages(props.modelValue, [])
    })

    // 播放
    const play = () => {
      isPlay.value = true
      barrageItems.forEach(item => {
        item.style.animationPlayState = 'running'
      })
    }
    // 暂停
    const pause = () => {
      isPlay.value = false
      barrageItems.forEach(item => {
        item.style.animationPlayState = 'paused'
      })
    }
    // 导出全局
    useExpose<BarrageExpose>({
      play,
      pause
    })

    return () => (
      <div class={bem.b()} ref={barrageWrapper} style={rootStyle.value}>
        {slots.default?.()}
      </div>
    )
  }
})
