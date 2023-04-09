<template>
  <div class="navTab">
    <NavTab />
  </div>

  <div class="view">
    <router-view />
  </div>
</template>

<script setup>
import NavTab from './components/NavTab.vue';
</script>

<style>
.navTab {
  position: fixed;
  top: 0;
  left: 2rem;
  width: 100%;
  z-index: 1;
}

.view {
  margin-top: 5rem;
  z-index: 2;
}
</style>
