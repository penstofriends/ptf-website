<template>
  <div>
    <nav>
      <router-link to="/" draggable="false">Home</router-link>
      <router-link to="/GettingInvolved" draggable="false">Get Involved</router-link>
      <router-link to="/FrequentQuestions" draggable="false">FAQs</router-link>
      <router-link to="/ContactUs" draggable="false">Contact Us</router-link>
    </nav>
  </div>
</template>

<style scoped>
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
  white-space: nowrap;
  text-decoration: none;
}

nav a:first-of-type {
  border: none;
}

nav a.router-link-exact-active {
  color: var(--turfGreen);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:hover {
  opacity: 60%;
  transition: all 0.5s cubic-bezier(0.19, 0.68, 0.8, 0.41);
}
</style>
