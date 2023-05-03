<template>
  <div :class="{ container_navTab: true, navTab_visible: shown, navTab_hide: !shown, temp_navTab_hide: true }">
    <NavTab />
  </div>
  <div class="container_navMenu">
    <NavMenu />
  </div>

  <div class="routerView">
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavTab from './components/NavTab.vue'
import NavMenu from './components/NavMenu.vue'

const shown = ref(false)
const route = useRoute()

let prevScrollY = window.scrollY

function showNavTab() {
  let currentScrollY = window.scrollY
  shown.value = currentScrollY > prevScrollY
  prevScrollY = currentScrollY

  // if the route path is not on the homepage, the navtab will position: not fixed and stay visible
  if (route.path !== '/') {
    shown.value = true
  }
  document.querySelector('.container_navTab').classList.remove('temp_navTab_hide')
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

.container_navTab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

.navTab_hide {
  opacity: 0;
  animation: pop-out 0.5s;
}

.navTab_visible {
  opacity: 1;
  animation: pop-in 0.5s;
}

.temp_navTab_hide {
  opacity: 0;
}

.routerView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  overflow: hidden;
}

@keyframes pop-in {
  from {
    transform: translatey(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pop-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translatey(-100%);
    opacity: 0;
  }
}
</style>
