<template>
  <div class="container__landingSection">
    <div class="text__landingSection-header">
      <h1>Pens to Friends</h1>
    </div>

    <div class="text__landingSection-subheader">
      <h2>Spreading smiles, one letter at a time</h2>
    </div>

    <div class="text__landingSection-content">
      <h3>still developing this part</h3>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container__landingSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 99vw;
  height: 100vh;

  background: linear-gradient(90deg, #a4baf5, #779670, #c2c1b7);
  background-size: 300% 300%;
  animation: gradient 4s alternate infinite;

  box-shadow: 32px 32px 64px #b8b8b8, -32px -32px 64px #ffffff;
}
@keyframes gradient {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}

.text__landingSection-header {
  font-size: 50px;
  font-weight: 600;
}

.text__landingSection-subheader {
  font-size: 28px;
}

.text__landingSection-content {
  font-size: 16px;
}
</style>
