<template>
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/GettingInvolved">Get Involved</a>
        <a href="/FrequentQuestions">FAQ</a>
        <a href="/ContactUs">Contact Us</a>
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
  
  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }
</style>
