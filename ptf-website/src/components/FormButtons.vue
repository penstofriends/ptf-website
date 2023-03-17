<template>
    <button>
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      text: {
        type: String,
        default: "Button"
      },
    },
  };
  </script>
  
  <style scoped>
button {
    display: inline-block;
    width: auto;
    height: auto;
    padding: 1rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    font-size: 14px;
    border-radius: 3rem;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-duration: .3s;
    letter-spacing: 0.05rem;
    font-weight: 600;
    font-family: 'Noto Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: white;
    background-color: var(--celadonGreen);
}
</style>