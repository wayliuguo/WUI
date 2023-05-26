<script setup lang="ts">
import { ref } from 'vue'
const checked = ref('1')
</script>

<template>
  <w-radio-group v-model="checked" direction="horizontal">
    <w-radio name="1">单选框 1</w-radio>
    <w-radio name="2">单选框 2</w-radio>
  </w-radio-group>
</template>
