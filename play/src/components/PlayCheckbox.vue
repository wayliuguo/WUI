<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="cell">
    <w-checkbox v-model="checked">复选框</w-checkbox>
  </div>
</template>

<style scoped>
.cell {
  width: 375px;
}
</style>
