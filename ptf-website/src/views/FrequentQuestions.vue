<template>
  <h1>Frequently Asked Questions</h1>
  <div class="faq-list">
    <DropDown v-for="(FAQ, index) in FAQs" :key="index" :question="FAQ.question" :answer="FAQ.answer"
      :isVisible="FAQ.isVisible" @toggle="toggleAnswer(index)"></DropDown>
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

<style>
.faq-list {
  margin-top: 20px;
}

.faq-item {
  margin-bottom: 20px;
}
</style>