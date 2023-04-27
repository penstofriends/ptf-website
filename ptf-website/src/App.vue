<template>
  <div :style="{ display: displayed ? 'grid' : 'none' }" v-show="showComponent" class="navTab">
    <NavTab />
  </div>

  <div class="routerView">
    <router-view />
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NavTab from './components/NavTab.vue'

const shown = ref(false)
const displayed = ref(false)
const route = useRoute()

function showNavTab() {
  shown.value = (route.path === '/') ? (window.scrollY > 100) : true

  if (shown.value) {
    displayed.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', showNavTab)
  
})

onUnmounted(() => {
  window.removeEventListener('scroll', showNavTab)
})

</script>

<style>
body {
    margin: 0;
    padding: 0;
  }

.navTab {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  animation: slide-in 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

</style>
