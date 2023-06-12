<script setup lang="ts"></script>

<template>
  <div class="cell">
    <w-row gutter="20">
      <w-col span="8">span: 8</w-col>
      <w-col span="8">span: 8</w-col>
      <w-col span="8">span: 8</w-col>
      <w-col span="4">span: 4</w-col>
      <w-col span="10" offset="4">offset: 4, span: 10</w-col>
      <w-col offset="12" span="12">offset: 12, span: 12</w-col>
    </w-row>
  </div>
</template>

<style scoped lang="less">
.cell {
  width: 375px;

  .w-col:nth-child(odd) {
    background-color: #39a9ed;
  }

  .w-col:nth-child(even) {
    background-color: #66c6f2;
  }

  .w-col {
    margin-bottom: 10px;
    color: var(--w-white);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
  }
}
</style>
