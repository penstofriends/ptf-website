<template>
  <header>
    <NavTab />
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavTab from './components/NavTab.vue';
</script>

<style scoped>
header{
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 100%;
}
</style>
