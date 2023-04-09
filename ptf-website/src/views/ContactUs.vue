<template>
  <div class="container">
    <div class="email">
      <h1>Get in Touch</h1>
      <h3>Feel free to contact us with any questions, comments, or feedback you may have. We'll try to get back to you ASAP!!</h3>
      <EmailUs/>
      <FormButton/>
    </div>
    <div class="socials">
      <h3>Social Medias</h3>
    </div>
  </div>
</template>


<script>
import EmailUs from '../components/EmailUs.vue';

export default {
  components: {
    EmailUs
  }
}
</script>


<style scoped>
.container {
  display: flex;
  width: 100%;
}

.email {
  width: 50%;
  padding: 1rem;
}
.socials {
  width: 50%;
  padding: 1rem;
  position: relative;
}

h2{
  font-size: 4rem;
  margin-bottom: 0;
}

h3{
  font-size: 1rem;
  font-weight: 400;
  max-width: 28rem;
}
</style>
