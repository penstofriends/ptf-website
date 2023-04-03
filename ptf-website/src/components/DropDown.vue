<template>
  <div class="faq-item">
    <div class="faq-question" @click="toggleAnswer">
      <h3>{{ question }}</h3>
      <span class="faq-toggle">{{ isVisible ? 'Close' : 'Open' }}</span>
    </div>
    <div class="faq-answer" v-show="isVisible">
      {{ answer }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleAnswer() {
      this.$emit('toggle');
    },
  },
};
</script>

<style>


.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.1rem;
  background-color: #f5f5f5;
}

.faq-question h3 {
  margin: 0;
  font-size: 20px;
}

.faq-question {
  max-width: 75rem;
}

.faq-answer {
  margin-top: 10px;
  padding: 10px;

}
</style>