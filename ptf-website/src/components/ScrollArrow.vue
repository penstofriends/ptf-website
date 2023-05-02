<template>
  <section id="section__scrollArrow">
    <div class="container__scrollArrow hideArrow">
      
     <a href="#section__ourStory" draggable="false"><span></span></a>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const scrollArrow = document.querySelector('.container__scrollArrow')
      scrollArrow.classList.add('showArrow')
      scrollArrow.classList.remove('hideArrow')
    }, 2000)
  },
}
</script>

<style scoped>

.container__scrollArrow a {
  position: absolute;
  bottom:  0%;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
  transform: translateX(-50%);
  margin: auto;

  background-color: #708068;
  opacity: .6;

  z-index: 1;
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

.hideArrow a {
  opacity: 0;
}

.showArrow a {
  opacity: 1;
  animation: slide-in 1s;
}

@keyframes slide-in {
  0% {
    bottom: -100px
  }
  100% {
    bottom: 0px
  }
}
</style>
