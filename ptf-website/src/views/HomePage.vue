<template>
  <div class="container__components-home">
    <LandingSection />
    <OurStory />
    <LetterExamples />
  </div>
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

</style>
