<template>
  <section id="section__scrollArrow">
    <div class="container__scrollArrow">
      
     <a href="#section__ourStory" draggable="false"><span></span></a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

.container__scrollArrow a {
  position: absolute;
  bottom: 10%;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  transform: translateX(-50%);
  margin: auto;
  z-index: 2;

  background-color: #696b68;
  opacity: .6;
}
.container__scrollArrow a:hover {
  opacity: 0.5;
}
#section__scrollArrow a span {
  display: block;
  width: 24px;
  height: 24px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-animation: scrolling 1.5s infinite;
  animation: scrolling 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes scrolling {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes scrolling {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>
