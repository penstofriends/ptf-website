<template>
  <div>
    <header>
      <NavTab />
    </header>
  </div>
</template>

<script setup>
import NavTab from './components/NavTab.vue';
</script>

<style>
header {
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 100%;
}
</style>
