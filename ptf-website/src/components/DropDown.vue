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
  cursor: pointer;
  padding: 0.1rem;
  background-color: white;
}

.faq-question h3 {
  margin: 0;
  font-size: 20px;
}

.faq-question {
  max-width: 75rem;
  padding: 0.5rem;
}

.faq-toggle {
  margin-left: auto;
  font-size: 16px;
}

.faq-answer {
  margin-top: 10px;
  padding: 10px;
}
</style>
