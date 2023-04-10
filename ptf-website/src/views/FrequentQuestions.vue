<template>
  <h1>QUESTIONS?</h1>
  <p>Here are a few of our most commonly asked; if the answer you're looking for is still not here,
    feel free to contact us.
  </p>
  <div class="faq-list">
    <div class="faq-item" v-for="(FAQ, index) in FAQs" :key="index">
      <DropDown :question="FAQ.question" :answer="FAQ.answer" :isVisible="FAQ.isVisible" @toggle="toggleAnswer(index)">
      </DropDown>
    </div>
  </div>
</template>

<script>
import DropDown from '../components/DropDown.vue';
import { FAQs } from '../FAQs';

export default {
  components: {
    DropDown,
  },
  data() {
    return {
      FAQs
    };
  },
  methods: {
    toggleAnswer(index) {
      this.FAQs[index].isVisible = !this.FAQs[index].isVisible;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 6rem;
  text-align: center;
}

p {
  text-indent: 0;
  text-align: center;
}

.faq-list {
  margin: 0 auto;
  max-width: 65rem;
  text-align: center;
}

.faq-item {
  margin-bottom: 20px;
  width: 100%;
}
</style>
