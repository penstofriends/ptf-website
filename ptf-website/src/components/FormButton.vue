<template>
  <button @click="getUrl">{{ text }}</button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    getUrl() {
      window.location.href = this.url
    }
  }
}
</script>

<style scoped>
button {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  vertical-align: middle;
  border: none;
  color: black;
  font-family: 'Noto Sans', sans-serif;
  background-color: #9cb9a0;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}

button:hover {
  background-color: #2c974b;
  border-color: #1b1f2326;
  transition-duration: 0.1s;
}
</style>
