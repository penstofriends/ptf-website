<template>
  <div class="letterExamples">
    <div class="pictures">
      <img src="/letterPic01.jpg" class="image__hidden" />
      <img src="/letterPic02.jpg" class="image__hidden" />
      <img src="/letterPic03.jpg" class="image__hidden" />
      <img src="/letterPic04.jpg" class="image__hidden" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 22rem;
  margin: 1.2rem;
}

.pictures {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  background-color: var(--green);
}

.letterExamples {
  margin-bottom: 5vh;
}

/* hidden images will be invisible until intersected by the observer, and then will be visible with a transition of coming from the left staggered */
.image__hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}

.image__visible {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

/* staggered transition */
.image__visible:nth-child(1) {
  transition-delay: 0.1s;
}

.image__visible:nth-child(2) {
  transition-delay: 0.3s;
}

.image__visible:nth-child(3) {
  transition-delay: 0.5s;
}

.image__visible:nth-child(4) {
  transition-delay: 0.7s;
}
</style>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('image__visible')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.image__hidden')
    hiddenElements.forEach((element) => {
      observer.observe(element)
    })
  }
}
</script>
