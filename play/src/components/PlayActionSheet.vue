<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from '@w-ui/components/Toast'
import { ActionSheetAction } from '@w-ui/components/ActionSheet'

const show = ref(false)
const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
const onSelect = (item: ActionSheetAction) => {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false
  showToast(item.name)
}
</script>

<template>
  <w-cell is-link title="基础用法" @click="show = true" />
  <w-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
</template>
