<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
const checkedGroup = ref(['a'])

const checkboxRef = ref()
const checkboxGroupRef = ref()

const toggle = () => {
  checkboxRef.value.toggle()
}
const toggleAll = () => {
  checkboxGroupRef.value.toggleAll({
    checked: true,
    skipDisabled: true,
  })
}
</script>

<template>
  <div class="cell">
    <w-checkbox-group ref="checkboxGroupRef" v-model="checkedGroup">
      <w-checkbox name="a">复选框 a</w-checkbox>
      <w-checkbox name="b">复选框 b</w-checkbox>
    </w-checkbox-group>
    <w-checkbox ref="checkboxRef" v-model="checked">复选框</w-checkbox>
    <w-button @click="toggle">toggle</w-button>
    <w-button @click="toggleAll">toggleAll</w-button>
  </div>
</template>

<style scoped>
.cell {
  width: 375px;
}
</style>
