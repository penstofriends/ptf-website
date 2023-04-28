<template>
  <nav class="container__navTab">
    <router-link to="/" draggable="false">Home</router-link>
    <router-link to="/GettingInvolved" draggable="false">Get Involved</router-link>
    <router-link to="/FrequentQuestions" draggable="false">FAQs</router-link>
    <router-link to="/ContactUs" draggable="false">Contact Us</router-link>
  </nav>

</template>

<style scoped>
.container__navTab {
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

.container__navTab a {
  font-size: 1.2rem;
  color: #646c64;
  padding: 0 1rem;
  margin: 0.5rem;
  text-decoration: none;
}

.container__navTab a:first-of-type {
  border: none;
}

.container__navTab a.router-link-exact-active {
  color: var(--turfGreen);
}

.container__navTab a.router-link-exact-active:hover {
  background-color: transparent;
}

.container__navTab a:hover {
  opacity: 60%;
  transition: all 0.5s cubic-bezier(0.19, 0.68, 0.8, 0.41);
}


@media only screen and (min-width: 320px) and (max-width: 480px) {
  .container__navTab {
    display: none;
  }
}
</style>
