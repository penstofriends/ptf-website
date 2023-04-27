<template>
  <div :class="{ navTab: true, visible: shown, hide: !shown }">
    <NavTab />
  </div>

  <div class="routerView">
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavTab from './components/NavTab.vue'

const shown = ref(false)
const route = useRoute()

let prevScrollY = window.scrollY

function showNavTab() {
  let currentScrollY = window.scrollY
  if (route.path === '/') {
    shown.value = currentScrollY > prevScrollY
    prevScrollY = currentScrollY
  }
}

onMounted(() => {
  window.addEventListener('scroll', showNavTab)
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.hide {
  opacity: 0;
  animation: pop-out 1s;
  transition: all 1s;
}

.visible {
  opacity: 1;
  animation: pop-in 1s;
}

.navTab {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

@keyframes pop-in {
  from {
    transform: translatey(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes pop-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translatey(-100%);
  }
}
</style>
