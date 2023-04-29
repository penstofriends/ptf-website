<template>
  <div class="container__menu">
    <div class="container__menu-icon">
      <label class="burger" for="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="container__navMenu">
      <router-link to="/" draggable="false">Home</router-link>
      <router-link to="/GettingInvolved" draggable="false">Get Involved</router-link>
      <router-link to="/FrequentQuestions" draggable="false">FAQs</router-link>
      <router-link to="/ContactUs" draggable="false">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const checkbox = document.getElementById('burger');
    const navMenu = document.querySelector('.container__navMenu');

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        navMenu.classList.add('container__navMenu-active');
      } else {
        navMenu.classList.remove('container__navMenu-active');
      }
    });
  }
}
</script>



<style>
.container__menu {
    
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.1rem;

  width: fit-content;
  display: flex;
  position: fixed;
  z-index: 2;
  flex-direction: column;

  background-color: white;
  padding: 1rem;
  opacity: 1;
}

.container__navMenu {
  display: none;
  height: 25vh;
  width: 100vw;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-around;
}

.container__navMenu a {
  padding: 0;
  font-size: 1.6rem;
  color: #646c64;
  text-decoration: none;
}

.container__navMenu-active {
    opacity: 1;
    display: flex;
}

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;

  background-color: white;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}


@media only screen and (min-width: 481px) {
    .container__menu {
        display: none;
    }
}
</style>
