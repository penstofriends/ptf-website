<template>
  <div class="container__components-home">
    <LandingSection />
    <OurStory />
    <LetterExamples />
  </div>
  <div class="container__bottom-bar"></div>
</template>

<script setup>
import LandingSection from '../components/LandingSection.vue'
import LetterExamples from '../components/LetterExamples.vue'
import OurStory from '../components/OurStory.vue'
</script>

<style>
.container__components-home {
  display: grid;
  justify-content: center;
  justify-items: center;
}

.container__bottom-bar {
  background-color: #ddd7d4;
  width: 98vw;
  height: 50px;
}
</style>
