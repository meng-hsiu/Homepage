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
    about_container.style.height = '8vh';
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
              <div class="row w-100 h-100 d-flex justify-content-center">
                <div class="col-2 d-flex justify-content-center">
                    <img style="object-fit: contain; max-height: calc(var(--my-card-base-height)*0.3);" src="/src/images/ot308_1.svg" alt="">
                  </div>
                  <div class="col-6"></div>
                  <div class="col-2 d-flex justify-content-center">
                    <img style="object-fit: contain; max-height: calc(var(--my-card-base-height)*0.3);" src="/src/images/pl159.svg" alt="">
                  </div>
                  <div class="col-2 d-flex justify-content-center">
                    <img style="object-fit: contain; max-height: calc(var(--my-card-base-height)*0.3);" src="/src/images/pl040.svg" alt="">
                  </div>
              </div>
            </div>
            <div class="my-card-body">
              <div class="my-card-body-text">
                <div class="row w-100">
                  <div class="col-3"></div>
                  <div class="col-9">
                    <span style="font-size:clamp(1.5rem,3vw,3rem); color:darkcyan">Hi</span>，我是謝孟修，先前在醫院工作，接受完<span style="text-decoration: underline;">資展國際全端工程師</span>培訓後，已有基本前、後端及資料庫操作能力，希望能成為一名工程師。
                    <br>
                    <br>
                    歡迎來到我的個人頁面，可點擊下方按鈕查看更多訊息
                  </div>
                </div>
              </div>
              <div class="my-card-body-text-link">
              </div>
              <div class="my-card-body-imgs">
                <div class="row w-100" style="position: absolute;bottom: 0;">
                  <div class="col-4 col-lg-3 col-xl-2">
                    <img src="/src/images/go145_3.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-3 d-flex justify-content-center">
        <div class="about-container shadow">
            <AboutComponent @triggerParent="parentFunction()"></AboutComponent>
        </div>
      </div>
      <div class="row pt-1 pb-4">
        <div class="col-xl-4 mb-3 mb-xl-0 d-flex justify-content-center">
          <RouterLink class="cta d-flex justify-content-center justify-content-xl-start" to="/personalProject">
            <div class="my-document shadow">
              <p>個人作品</p>
            </div>
          </RouterLink>
        </div>
        <div class="col-xl-4 mb-3 mb-xl-0 d-flex justify-content-center">
          <RouterLink class="cta d-flex justify-content-center" to="/partyProject">
            <div class="my-document shadow">
              <p>小組作品</p>
            </div>
          </RouterLink>
        </div>
        <div class="col-xl-4 mb-3 mb-xl-0 d-flex justify-content-center">
          <RouterLink class="cta d-flex justify-content-center justify-content-xl-end" to="/contact">
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
  background-color: transparent;
  position: relative;
  height: 7vh;
  width: 96%;
  min-width: 350px;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2),
    rgba(201, 201, 201, 0.1)
  );
  overflow: hidden;
  transition: all 0.3s;
}

@media (min-width: 992px) {
  .about-container{
    width: 98%;
    margin: 0 1% 0 1%;
  }
}

.about-container-open{
  height: fit-content;
}



</style>
