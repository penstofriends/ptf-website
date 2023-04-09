<template>
  <h1>Frequently Asked Questions</h1>
  <div class="faq-list">
    <div class="faq-item" v-for="(FAQ, index) in FAQs" :key="index">
      <DropDown :question="FAQ.question" :answer="FAQ.answer"
        :isVisible="FAQ.isVisible" @toggle="toggleAnswer(index)"></DropDown>
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
  text-align: center;
}

.faq-list {
  margin-top: 20px;
  padding: 1rem;
  width: 100%;
  text-align: center;
}

.faq-item {
  margin-bottom: 20px;
  width: 100%;
}
</style>
