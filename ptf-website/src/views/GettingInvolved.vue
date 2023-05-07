<template>
  <div class="container__components-gettingInvolved">
    <h1 class="text-header">Spread the Joy</h1>


    <div class="container__gettingInvolved-text">
      <div class="container__gettingInvolved-virtual container__gettingInvolved-letters">

        <h2 class="text-subheader">Virtual Letters</h2>
        <p class="text-description">
          [description about virtual letters] Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed auctor odio in massa commodo commodo. Integer euismod posuere ipsum eget
          sollicitudin. Ut commodo euismod urna, a lacinia arcu maximus sit amet. Etiam et sapien
          sed odio consequat consectetur at nec magna. Morbi pellentesque, mi nec finibus dignissim,
          elit ante faucibus ante, in malesuada eros lectus ac purus.

        </p>
        <div class="container__gettingInvolved-buttons">
          <div class="container__gettingInvolved-buttons-send">

            <img alt="logo" class="logo" src="/logoPlaceholder.png" width="135" height="135" />
            <FormButton text="Send Letter(s)" url="www.google.com" />

          </div>
          <div class="container__gettingInvolved-buttons-recieve">

            <img alt="logo" class="logo" src="/logoPlaceholder.png" width="135" height="135" />
            <FormButton text="Receive Letter(s)" url="google.com" />

          </div>
        </div>
      </div>

      <div class="container__gettingInvolved-physical container__gettingInvolved-letters">

        <h2 class="text-subheader">Handwritten/Physical Letters</h2>
        <p class="text-description">
          [description about physical letters] Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed auctor odio in massa commodo commodo. Integer euismod posuere ipsum eget
          sollicitudin. Ut commodo euismod urna, a lacinia arcu maximus sit amet. Etiam et sapien
          sed odio consequat consectetur at nec magna. Morbi pellentesque, mi nec finibus dignissim,
          elit ante faucibus ante, in malesuada eros lectus ac purus.
        </p>

      </div>
    </div>
  </div>
</template>

<script>
import FormButton from '../components/FormButton.vue'

export default {
  name: 'GettingInvolved',
  components: {
    FormButton
  }
}
</script>

<style scoped>
.container__components-gettingInvolved {
  height: 100%;
}
.text-header {
  text-align: center;

  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.02rem;

  margin: 3rem;
}

.text-subheader {
  text-align: center;

  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.02rem;

  border-bottom: 1px black solid;
}

.text-description {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  max-width: 50rem;
  text-indent: 3rem;
  margin-bottom: 2rem;
}

.container__gettingInvolved-text {
  display: flex;
  width: 100%;
  position: relative;

  background-color: beige;

  border: 3px solid black;
  background: var(--celadonGreen);
  box-shadow:  20px 20px 60px #96928f,
             -20px -20px 60px #ffffff;
}

.container__gettingInvolved-letters {
  width: 50%;
  padding: 2rem;
  margin: 1rem 0;
  border-right: 1px black solid;
}


.container__gettingInvolved-buttons-send,
.container__gettingInvolved-buttons-recieve {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
}

.container__gettingInvolved-buttons-send button,
.container__gettingInvolved-buttons-recieve button {
  margin-top: 1rem;
}

.container__gettingInvolved-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
