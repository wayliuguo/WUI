<template>
  <w-barrage v-model="list">
    <div class="video" style="width: 100%; height: 150px; background-color: #f2f3f5" ></div>
  </w-barrage>
  <w-space style="margin-top: 10px">
    <w-button @click="add" type="primary" size="small"> 弹幕 </w-button>
  </w-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BarrageItem } from '@w-ui/components/Barrage'

const defaultList: BarrageItem[] = [
  { id: 100, text: '轻量' },
  { id: 101, text: '可定制的' },
  { id: 102, text: '移动端' },
  { id: 103, text: 'Vue' },
  { id: 104, text: '组件库' },
  { id: 105, text: 'VantUI' },
  { id: 106, text: '666' }
]
const list = ref([...defaultList])
const add = () => {
  list.value.push({ id: Math.random(), text: 'Barrage' })
}
</script>
