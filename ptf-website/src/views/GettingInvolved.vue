<template>
  <h1>Spread the joy</h1>
  <div class="container">
    <div class="virtual">
      <h2>Virtual Letters</h2>
      <p>[description about virtual letters]
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor odio in massa commodo commodo.
        Integer euismod posuere ipsum eget sollicitudin. Ut commodo euismod urna, a lacinia arcu maximus sit amet.
        Etiam et sapien sed odio consequat consectetur at nec magna. Morbi pellentesque, mi nec finibus dignissim,
        elit ante faucibus ante, in malesuada eros lectus ac purus.
      </p>
      <div class="send">
        <img alt="logo" class="logo" src="/logoPlaceholder.png" width="125" height="125" />
        <FormButton text="Send Letter(s)" url="google.com" />
      </div>
      <div class="recieve">
        <img alt="logo" class="logo" src="/logoPlaceholder.png" width="125" height="125" />
        <FormButton text="Receive Letter(s)" url="google.com" />
      </div>
    </div>

    <div class="physical">
      <h2>Handwritten/Physical Letters</h2>
      <p>[description about physical letters]
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor odio in massa commodo commodo.
        Integer euismod posuere ipsum eget sollicitudin. Ut commodo euismod urna, a lacinia arcu maximus sit amet.
        Etiam et sapien sed odio consequat consectetur at nec magna. Morbi pellentesque, mi nec finibus dignissim,
        elit ante faucibus ante, in malesuada eros lectus ac purus.
      </p>
    </div>
  </div>
</template>

<script>
import FormButton from '../components/FormButton.vue';

export default {
  name: "GettingInvolved",
  components: {
    FormButton,
  },
};
</script>

<style scoped>  

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    max-width: 28rem;
  }

  .container {
    display: flex;
    width: 100%;
    position: relative;
  }

  .virtual {
    width: 50%;
    padding: 1rem;
    margin: 1rem;
  }

  .physical {
    width: 50%;
    padding: 1rem;
    margin: 1rem;
    position: relative;
  }

  .virtual::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 1px solid black;
  }
</style>
