<script setup>
import { defineEmits, onMounted } from 'vue';

let about = null;

onMounted(()=>{
  about = document.querySelector('.about');
  // document.querySelector('.typewriter').addEventListener('animationend', () => {
  //   document.querySelector('.typewriter').style.animation = '';
  // })
})

const emit = defineEmits(['triggerParent']);

const handleClick = () => {
  // 發送事件給父組件
  emit('triggerParent');
};
</script>

<template>
  <div class="about">
    <div class="container d-flex justify-content-center">
      <div class="row w-100 pb-4 pt-lg-1">
        <div class="col-12 pb-3 d-flex justify-content-center">
          <!-- <button>開關</button> -->
          <div @click="handleClick" class="typewriter"><h1 style="color: black; font-size:clamp(1rem,3vw,2.5rem);"><i id="Information_text">Further Information<i id="Information" class="fa-solid fa-arrow-pointer" style="color: #64ceae;transform: translate(0.5vw,0vh) rotate(-45deg);"></i>&emsp13;</i></h1></div>
        </div>
        <div class="col-12 mb-5 pb-5 border-bottom">
          <div class="row">
            <h2><i class="fa-solid fa-circle-user fs-1" style="color: #5dcbaa;"></i>&ensp;個人資料</h2>
            <div class="col-lg-3 col-xl-2 text-lg-end">生日：</div><div class="col-lg-2">1996/01/20</div>
            <div class="col-lg-2 col-xl-2 text-lg-end">兵役：</div><div class="col-lg-2 ">役畢</div>
            <div class="col-12"></div>
            <div class="col-md-4 col-lg-3 col-xl-2 text-lg-end">最高學歷：</div><div class="col-lg-2">義守大學</div>
            <div class="col-lg-2 col-xl-2 text-lg-end">科系：</div><div class="col-lg-5">醫學影像暨放射科學系</div>
            <div class="col-12"></div>
            <div class="col-md-4 col-lg-3 col-xl-2 text-lg-end">受訓單位：</div><div class="col-lg-6">資展國際 全端工程師就業養成班</div>
            <div class="col-1"></div>
          </div>
        </div>
        <div class="col-12 mb-5 pb-5 border-bottom">
          <h2><i class="fa-solid fa-book fs-1" style="color: #5dcbaa;"></i>&ensp;經歷</h2>
          <div class="row">
            <div class="col-md-3 mb-2">六月 2024 <br class="d-none d-md-block">- 十一月 2024</div>
            <div class="col-md-9">
              <h3 class="lxgw-wenkai-mono-tc-bold">資展國際(原資策會)</h3>
              <span>全端工程師就業養成班<span class="noto-sans-tc-big">(582小時)</span>，學習如何建立C# Windows Forms應用程式，以及學習Html並搭配Bootstrap、CSS、JavaScript、jQuery、Vue.js製作網頁 ，再以MVC框架、WebAPI進行前後端與資料庫的串聯。</span>
            </div>
            <div class="col-12 my-3"></div>
            <div class="col-md-3 mb-2">四月 2021 <br class="d-none d-md-block">- 五月 2024</div>
            <div class="col-md-9">
              <h3 class="lxgw-wenkai-mono-tc-bold">光雄長安醫院</h3>
              全職放射師，負責操作CT、骨質密度儀器、X光機，以及些許的行政作業。
            </div>
          </div>
        </div>
        <div class="col-12 mb-5 pb-5 border-bottom">
          <h2><i class="fa-solid fa-toolbox fs-1" style="color: #5dcbaa;"></i>&ensp;技能</h2>
          <div class="row">
            <div class="col-md-3">前端技能</div>
            <div class="col-md-9">
              HTML、CSS、Bootstrap、JavaScript、jQuery、Vue.js
            </div>
            <div class="col-12 my-2"></div>
            <div class="col-md-3">後端技能</div>
            <div class="col-md-9">
              C#、ADO.NET、LINQ、ASP.NET Core MVC、Web API
            </div>
            <div class="col-12 my-2"></div>
            <div class="col-md-3">雲端、資料庫技能</div>
            <div class="col-md-9">
              Azure、SQL SERVER
            </div>
            <div class="col-12 my-2"></div>
            <div class="col-md-3">其他證照</div>
            <div class="col-md-9">
              放射師證書、輻射防護員及格、普通重型機車駕照、小型車普通駕駛駕照
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@media (hover:hover){
  #Information_text:hover{
    color:#ffffff;
  }
}

#Information_text:active{
  color:#ffffff;
}
#Information{
  animation: 2s beats  infinite;
}
@keyframes beats{
  0%{
    scale: 1;
  }
  50%{
    scale: 1.2;
  }
  100%{
    scale: 1;
  }
}

.about{
  position: relative;
}


</style>
