<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <w-button @click="show=true">打开</w-button>
  <w-popup v-model:show="show">内容</w-popup>
</template>

<style scoped></style>
