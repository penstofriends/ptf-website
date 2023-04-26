<template>
  <div class="container__landingSection">

    <div class="text__landingSection-header">
      <h1>Pens to Friends</h1>
    </div>

    <div class="text__landingSection-subheader">
      <h2>Spreading smiles, one letter at a time</h2>
    </div>
    
    <div class="text__landingSection-content">
      <h3>i also didn't develop this part yet</h3>
    </div>

  </div>
</template>

<style scoped>
.container__landingSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10vh 0;
  margin-top: 2vh;
  width: 80vw;

  border-radius: 55px;
  background: linear-gradient(145deg, #779670, #647e5f);
  box-shadow:  22px 22px 44px #aaa5a2,
              -22px -22px 44px #ffffff;
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
