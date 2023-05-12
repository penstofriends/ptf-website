<template>
  <h1>QUESTIONS?</h1>
  <div class="description">
    <p>
      Here are a few of our most commonly asked; if the answer you're looking for is still not here,
      feel free to contact us.
    </p>
  </div>
  <div class="faq-list">
    <div class="faq-item" v-for="(FAQ, index) in FAQs" :key="index">
      <DropDown
        :question="FAQ.question"
        :answer="FAQ.answer"
        :isVisible="FAQ.isVisible"
        @toggle="toggleAnswer(index)"
      >
      </DropDown>
    </div>
  </div>
</template>

<script>
import DropDown from '../components/DropDown.vue'
import { FAQs } from '../FAQs'

export default {
  components: {
    DropDown
  },
  data() {
    return {
      FAQs
    }
  },
  methods: {
    toggleAnswer(index) {
      this.FAQs[index].isVisible = !this.FAQs[index].isVisible
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 2rem;
  margin-bottom: 0;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

p {
  text-indent: 0;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.05rem;
}

.faq-list {
  margin: 0 auto;
  max-width: 65rem;
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.015rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-weight: 400;
}

.faq-item {
  margin-bottom: 20px;
  width: 100%;
}

.description {
  display: flex;
  justify-content: center;
}
</style>
