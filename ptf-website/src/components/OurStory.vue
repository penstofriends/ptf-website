<template>
    <h1>Our Story</h1>
    <div class="container">
        <p>
            In February 2021, Pens to Friends was born in little town in Arizona, by a group of
            high schoolers who wanted to make the world a little brighter. One of our founders
            grew up hearing stories of her parent’s struggles in foster care. We wanted to do
            something that combined our passion for art and desire to create positive change.
            Quickly, we grew from an organization that connected with a couple of kids to one
            that’s managed to spread light all around the world. We realize that even the smallest
            of things can make a day brighter— a piece of art, a heartfelt story, or even just a few
            kinds words. At Pens to Friends, our goal is to band the world together. <br>
            Spreading smiles, one letter at a time
        </p>
        <img id="letterPic01" src="/letterPic01.jpg"
            alt="picture of a letter with an envelope on top of it, with the words 'dear friend'">
        <img src="/letterPic02.jpg" alt="picture of a letter resting on a plant">
    </div>
</template>


<style scoped>

h1 {
    text-align: center;
}

p {
    width: 40rem;
    text-indent: 3rem;
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 0.015rem;
}

img {
    height: 22rem;
    margin: 0.8rem;
}

.container {
    display: flex;
    flex-direction: row;
    padding: 3rem;
    justify-content: center;
}

img[id="letterPic01"] {
    margin-left: 15rem;
}
</style>