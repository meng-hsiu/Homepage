<script setup>
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
import './assets/js/background.js';
</script>

<template>
  <div class="my-container">
    <div class="container w-100 d-flex justify-content-center shadow">
      <div class="context-container w-100 h-100">
        <div class="row">
          <div class="col-3 nav justify-content-center">
            <NavbarComponent></NavbarComponent>
          </div>
          <div class="col-9">
            <RouterView></RouterView>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="text-container">
    Bubbles
  </div> -->
  <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div>
      <div class="interactive"></div>
    </div>
  </div>
</template>

<style scoped>
.my-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.container{
  height: 90vh;
  background-color: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.5),
    rgba(87, 87, 87, 0.3)
  );
  border-radius: 20px;
  overflow: hidden;
  border-bottom: #c0c0c0;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

@media (max-width:576px){
  .container{
    height: 100vh;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0;
  }
  .nav {
    /* position: relative; */
    height: 100% !important;
  }
  .nav::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 25%;
    height: 100vh !important; /* 設為 100vh */
    border-right: 1px solid wheat;
  }
}

.context-container{
  overflow-y: scroll;
  overflow-x: hidden;
  /* scroll-margin-block-start: 1px; */
  scrollbar-width: thin;
  scrollbar-color: #c0c0c0 transparent;
}

.nav{
  padding: 0;
  height: 90vh;
}

.nav::after{
  position: absolute;
  content: "";
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  width: 25%;
  height:85vh;
  border-right: 1px solid white;
  z-index: -1;
  filter: blur(1px);
}


</style>
