<script setup lang="ts">
import PlayLoading from './components/PlayLoading.vue'
import PlayIcon from './components/PlayIcon.vue'
import PlayBadge from './components/PlayBadge.vue';
import PlayButton from './components/PlayButton.vue';
import PlayCell from './components/PlayCell.vue';
import PlayLayOut from './components/PlayLayOut.vue';
</script>

<template>
  <PlayLoading v-if="false"></PlayLoading>
  <PlayBadge v-if="false"></PlayBadge>
  <PlayIcon v-if="false"></PlayIcon>
  <PlayButton v-if="false"></PlayButton>
  <PlayCell v-if="false"></PlayCell>
  <PlayLayOut></PlayLayOut>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
