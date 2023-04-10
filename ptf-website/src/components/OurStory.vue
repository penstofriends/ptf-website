<template>
  <div class="ourStory">
    <h2>OUR STORY</h2>
    <div class="container">
      <div class="text">
        <p>
          In February 2021, Pens to Friends was born in a small town in Arizona, by a group of high schoolers who
          wanted to make the world a little brighter. One of our founders grew up hearing stories of her parents'
          struggles in foster care. We wanted to do something that combined our passion for art and desire to create
          positive change. Quickly, we grew from an organization that connected with a couple of kids to one that’s
          managed to spread light all around the world. We realize that even the smallest things can make a day
          brighter—a piece of art, a heartfelt story, or even just a few kind words. At Pens to Friends, our goal is
          to band the world together.
        </p>
      </div>
      <img src="/letterPic02.jpg" alt="picture of a letter resting on a plant">
    </div>
  </div>
</template>

<style scoped>
.ourStory {
  padding: 2rem 0;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  margin: 0 auto;
}

.text {
  margin-right: 2.5rem;
  flex: 1;
}



img {
  height: 22rem;
  margin: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

img:first-child {
  margin-left: 0;
}

h2 {
  margin-bottom: 0;
  text-align: center;
}

p {
  margin-bottom: 1.5rem;
  max-width: 45rem;
}
</style>
