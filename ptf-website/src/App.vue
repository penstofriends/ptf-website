<template>
  <div class="container__app">
    <div :class="{ container__navTab: true, navTab_visible: shown, navTab_hide: !shown }">
      <NavTab />
    </div>
    <div class="container__navMenu">
      <NavMenu />
    </div>

    <div class="routerView">
      <router-view />
    </div>
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
  const navTab = document.querySelector('.container__navTab')


  let currentScrollY = window.scrollY
  shown.value = currentScrollY > prevScrollY
  prevScrollY = currentScrollY

  if (route.path !== '/') {
    shown.value = true
    navTab.style.position = 'relative'
  } else if (route.path == '/') {
    navTab.style.position = 'fixed'
  }
  navTab.classList.remove('temp_navTab_hide')

  if (navTab.classList.contains('navTab_popOutAnimation') == false) {
    navTab.classList.add('navTab_popOutAnimation')
  }
  }


onMounted(() => {
  window.addEventListener('scroll', showNavTab)

  

  document.addEventListener('click', (event) => {
    
    const navMenu = document.querySelector('.container__navMenu')
    const navMenuLinks = document.querySelector('.container__navMenu-links')
    const checkbox = document.getElementById('burger')

    const clickInsideNavmenu = navMenu.contains(event.target);
    if (clickInsideNavmenu == false && navMenuLinks.classList.contains('container__navMenu-links-active')) {
      navMenuLinks.classList.remove('container__navMenu-links-active')
      checkbox.checked = false;
    }

    console.log(event.target, clickInsideNavmenu)
});
})

watch(
  () => route.path,
  () => {
    showNavTab()
    if (route.path !== '/') {
      shown.value = true
    } else {
      shown.value = false
    }
  }
)
</script>

<style>
.container__app {
  min-height: 100vh;
}
body {
  margin: 0;
  padding: 0;
}

.container__navTab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

.navTab_hide {
  opacity: 0;
}

.navTab_popOutAnimation {
  animation: pop-out 0.5s;
}

.navTab_visible {
  opacity: 1;
  animation: pop-in 0.5s;
}


.routerView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  overflow: hidden;

  min-height: calc(100vh - 70px);
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
