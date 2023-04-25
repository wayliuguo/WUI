<script setup lang="ts"></script>

<template>
  <w-badge :content="5">
    <div class="child"></div>
  </w-badge>
</template>

<style lang="less" scoped>
.child {
  width: 40px;
  height: 40px;
  background: #f2f3f5;
  border-radius: 4px;
}
</style>