<template>
  <div class="container__ourStory">
    <div class="text__ourStory-subheader">
      <h2>OUR STORY</h2>
    </div>

    <div class="container__ourStory-content">
      <div class="text__ourStory">
        <p>
          In February 2021, Pens to Friends was born in a small town in Arizona, by a group of high
          schoolers who wanted to make the world a little brighter. One of our founders grew up
          hearing stories of her parents' struggles in foster care. We wanted to do something that
          combined our passion for art and desire to create positive change. Quickly, we grew from
          an organization that connected with a couple of kids to one that’s managed to spread light
          all around the world. We realize that even the smallest things can make a day brighter—a
          piece of art, a heartfelt story, or even just a few kind words. At Pens to Friends, our
          goal is to band the world together.
        </p>
      </div>
      <img
        class="image__ourStory"
        src="/letterPic02.jpg"
        alt="picture of a letter resting on a plant"
      />
    </div>
  </div>
</template>

<style scoped>
.container__ourStory {
  display: grid;
  justify-items: center;
  justify-content: center;

  border-radius: 55px;
  background: #e0e0e0;
  box-shadow: 22px 22px 44px #aaa5a2, -22px -22px 44px #ffffff;

  width: 70vw;

  padding: 2rem 0;
  margin: 5rem 0;
}


.text__ourStory-subheader {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  text-align: center;

  width: 30%;

  border-radius: 55px;
  background: #cac9c9;
}

.container__ourStory-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
}


.text__ourStory {
  margin-right: 2.5rem;
  margin-bottom: 1.5rem;
  max-width: 50%;
}

.image__ourStory {
  height: 22rem;
  margin: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .text__ourStory-subheader {
    width: 45vw;
  }

  .text__ourStory {
    margin-right: 0;
    width: 100vw;
  }
  .container__ourStory-content {
    flex-direction: column;
  }
}
</style>
