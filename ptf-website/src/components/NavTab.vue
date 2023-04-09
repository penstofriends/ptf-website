<template>
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/GettingInvolved">Get Involved</a>
        <a href="/FrequentQuestions">FAQ</a>
        <a href="/ContactUs">Contact Us</a>
      </nav>
      <router-view />
    </div>
  </template>
  
  <style scoped>
  nav {
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 0.1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom:1rem;
    text-align: center;
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
  