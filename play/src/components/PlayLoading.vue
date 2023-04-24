<script setup lang="ts"></script>

<template>
  <!-- <w-loading /> -->
  <!-- <w-loading type="spinner" />
  <w-loading color="#1989fa" />
  <w-loading type="spinner" color="#1989fa" />
  <w-loading size="24" />

  <w-loading type="spinner" size="24px" />
  <w-loading size="24px">加载中...</w-loading> -->
  <w-loading size="24px" vertical>加载中...</w-loading>
  <!-- 可修改文案和加载图标的颜色 -->
  <!-- <w-loading color="#0094ff" /> -->
  <!-- 只修改文案颜色 -->
  <!-- <w-loading text-color="#0094ff" /> -->
  <!-- <w-loading vertical>
    <template #icon>
    </template>
    加载中...
  </w-loading> -->
</template>

<style>
/* 覆盖样式 */
:root:root {
  --w-padding-xs: 40px;
}
</style>
