<template>
    <h1>Our Story</h1>
    <div class="container">
      <div class="content">
        <p>
          In February 2021, Pens to Friends was born in a little town in Arizona, by a group of high schoolers who wanted to make the world a little brighter. One of our founders grew up hearing stories of her parent’s struggles in foster care. We wanted to do something that combined our passion for art and desire to create positive change. Quickly, we grew from an organization that connected with a couple of kids to one that’s managed to spread light all around the world. We realize that even the smallest of things can make a day brighter— a piece of art, a heartfelt story, or even just a few kind words. At Pens to Friends, our goal is to band the world together.
          <br>
          Spreading smiles, one letter at a time
        </p>
      </div>
      <div class="images">
        <img src="/letterPic01.jpg" alt="picture of a letter with an envelope on top of it, with the words 'dear friend'">
        <img src="/letterPic02.jpg" alt="picture of a letter resting on a plant">
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    text-align: center;
    font-family: 'Noto Sans', sans-serif;
    font-size: 2.5rem;
    margin: 0;
  }
  
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.5rem 1.5rem 1.5rem;
  }
  
  .content {
    margin-right: 2.5rem;
  }
  
  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  img {
    height: 22rem;
    margin: 0.8rem;
  }
  
  img:first-child {
    margin-left: 0;
  }
  
  </style>
  