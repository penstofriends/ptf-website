<template>
    <div class="container__topArrow none-topArrow">
        <button class="button__topArrow">
            <a href="#section__landingSection" class="anchor__topArrow"></a>
        </button>
    </div>
  
</template>

<script>
export default {
    name: 'TopArrow',
    methods: {
        ifScrolledEnough: function() {
            const topArrow = document.querySelector('.container__topArrow')

            if(window.scrollY > 100) {
            topArrow.classList.add('show-topArrow')
            topArrow.classList.remove('none-topArrow')
           } else if(window.screenY < 100) {
            topArrow.classList.remove('show-topArrow')
            topArrow.classList.add('none-topArrow')
           }

           console.log(window.scrollY)
        },
    },
    mounted() {
        window.addEventListener('scroll', this.ifScrolledEnough)
    }
}
</script>

<style scoped>

.container__topArrow {
    height: 30px;
    width: 30px;
    padding: 15px 15px 0px 15px;
    opacity: 0.7;

    position: fixed;
    bottom: 1%;
    right: 2%;

    background-color: white;

    border: 3px rgb(69, 69, 69) solid;
    border-radius: 20%;
}
.button__topArrow {
    width: 100%;
}
.anchor__topArrow {
  border: solid black;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;

  
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.show-topArrow {
    display: grid;
}

.none-topArrow {
    display: none;
}
</style>
