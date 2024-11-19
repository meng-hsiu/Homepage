<script setup>
import { onMounted, ref } from 'vue';
import AboutComponent from '../components/AboutComponent.vue';

const about_container_toggle = ref(false);
let about_container = null;
const about_height = ref('');
let about = null;


onMounted(()=>{
  about_container = document.querySelector('.about-container');
  about = document.querySelector('.about')
})


const parentFunction = () => {
  if(about_container_toggle.value){
    // about_container.classList.remove('about-container-open');
    about_container.style.height = '10vh';
    about_container_toggle.value = !about_container_toggle.value
  }
  else{
    // about_container.classList.add('about-container-open');
    about_container.style.height = `${about.scrollHeight}px`;
    about_container_toggle.value = !about_container_toggle.value
  }
  // console.log('父組件方法被觸發了！');
};




</script>

<template>
  <div class="home" style="">
    <div class="container">
      <div class="row pt-4">
        <div class="col-12 d-flex justify-content-center d-md-block">
          <div class="my-card shadow">
            <div class="my-card-img">
            </div>
            <div class="my-card-title">
              <div class="row w-100 h-100">
              </div>
            </div>
            <div class="my-card-body">
              <div class="my-card-body-text">
                <span style="font-size:clamp(1rem,3vw,3rem); color:darkcyan">Hi</span>，我是謝孟修，先前在醫院工作，接受完<span style="text-decoration: underline;">資展國際全端工程師</span>培訓後轉職後，已有基本前、後端及資料庫操作能力，希望能成為一名工程師。
                <br>
                <br>
                歡迎來到我的個人頁面，可點擊下方按鈕查看更多訊息
                </div>
              <div class="my-card-body-text-link">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="about-container shadow">
          <AboutComponent @triggerParent="parentFunction()"></AboutComponent>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-lg-start">
          <RouterLink class="cta" to="/personalProject">
            <div class="my-document shadow">
              <p>個人作品</p>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
          <RouterLink class="cta" to="/partyProject">
            <div class="my-document shadow">
              <p>小組作品</p>
            </div>
          </RouterLink>
        </div>
        <div class="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-lg-end">
          <RouterLink class="cta" to="/contact">
            <div class="my-document shadow">
              <p>聯絡我</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

.about-container{
  position: relative;
  height: 10vh;
  /* height: fit-content; */
  width: 98%;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  overflow: hidden;
  transition: all 0.3s;
  /* transform: scaleY(0.1); */
}

.about-container-open{
  /* height: 115vh; */
  /* transform: scaleY(1); */
  height: fit-content;
}

.my-card{
  position: relative;
  min-width: 350px;
  width: 100%;
  height: var(--my-card-base-height);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.3s all;
}

.my-card:hover{
  transform: translateY(-10px);
}

.my-card-img{
  position: absolute;
  top:20%;
  left: 2.5%;
  min-width: 80px;
  max-width: 230px;
  min-height: 80px;
  max-height: 230px;
  width: 15vw;
  height: 15vw;
  background-color: rgba(255, 255, 255,0.5);
  backdrop-filter: blur(100px);
  z-index: 1;
  border-radius: 100%;
  overflow: hidden;
  background-image: url(/src/images/ot419.svg);
}
.my-card-title{
  position: relative;
  width: 100%;
  height: calc(var(--my-card-base-height) * 0.3);
  background-color: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-image: linear-gradient(
    120deg,
    rgba(141, 243, 200, 0.767),
    rgba(94, 247, 107, 0.3)
  );
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}
.my-card-body{
  position: relative;
  width: 100%;
  height: calc(var(--my-card-base-height)*0.7);
  background-color: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.6),
    rgba(201, 201, 201, 0.3)
  );
  border-radius: 0 0 20px 20px;
  overflow: hidden;
}

.my-card-body-text{
  position: absolute;
  top: 10%;
  left: 25%;
  width: 70%;
  font-size: clamp(1rem, 2vw, 1.5rem)
}

.my-card-body-text-link{
  position: absolute;
  bottom: 5%;
  right: 5%;
}

.card-body{
  background-color: transparent !important;
}

</style>
