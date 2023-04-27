<template>
  <div :class="{ slideIn: displayed }">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/GettingInvolved">Get Involved</router-link>
      <router-link to="/FrequentQuestions">FAQs</router-link>
      <router-link to="/ContactUs">Contact Us</router-link>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>

.slideIn {
  animation: slideIn 0.2s;
}

@keyframes slideIn {
  0%,
  100% {
    transform: translateY(54px);
  }
}

body {
  margin: 0;
}

nav {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: white;
  padding: 1rem 0rem 1rem 0rem;
}

nav a {
  font-size: 1.2rem;
  color: #646c64;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  margin: 0.5rem;
  width: fit-content;
  white-space: nowrap;
  text-decoration: none;
}

nav a:first-of-type {
  border: none;
}

nav a.router-link-exact-active {
  color: var(--turfGreen);
}

nav a.router-link-active {
  opacity: 60%;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:hover {
  opacity: 60%;
  transition: all 1s ease;
}
</style>
