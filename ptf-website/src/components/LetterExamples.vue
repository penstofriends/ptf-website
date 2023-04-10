<template>
    <div class="letterExamples">
        <div class="pictures">
        <img src="/letterPic01.jpg">
        <img src="/letterPic02.jpg">
        <img src="/letterPic03.jpg">
        <img src="/letterPic04.jpg">
    </div>
    </div>
</template>
  
<style scoped>
img {
    height: 22rem;
    margin: 1.2rem;
}

.pictures{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    background-color: var(--green);
}
</style>
  