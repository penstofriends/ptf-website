<template>
  <div class="container__components-home">
    <LandingSection />
    
    
    <ScrollArrow />
    <OurStory />
    <LetterExamples />
    <TopArrow />
  </div>
</template>

<script setup>
import LandingSection from '../components/LandingSection.vue'
import LetterExamples from '../components/LetterExamples.vue'
import OurStory from '../components/OurStory.vue'
import ScrollArrow from '../components/ScrollArrow.vue';
import TopArrow from '../components/TopArrow.vue';
</script>

<style>
.container__components-home {
  display: grid;
  justify-content: center;
  justify-items: center;
}
</style>
