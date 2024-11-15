<script setup>

</script>

<template>
  <div class="home" style="height: auto;">
    <div class="container d-flex justify-content-center">
      <div class="row w-100 py-4">
        <div class="col-12">
            <RouterLink class="cta" to="/">
                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
                </svg>
                <span class="hover-underline-animation fs-3">Home</span>
            </RouterLink>
          <div class="col-12 profile mb-5 py-5 border-bottom">
            <h2>前言</h2>
            <span class="lxgw-wenkai-mono-tc-bold">
              　　Hi，我是謝孟修，先前在醫院工作，接受完資展國際全端工程師培訓後轉職中，已有基本前、後端及資料庫操作能力，希望能成為一位工程師。
            </span>
          </div>
        </div>
        <div class="col-12 mb-5 pb-5 border-bottom">
          <div class="row">
            <h2>個人資料</h2>
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
          <h2>經歷</h2>
          <div class="row">
            <div class="col-md-4 mb-2">六月 2024 - 十一月 2024</div>
            <div class="col-md-8">
              <h3>資展國際(原資策會)</h3>
              <span>全端工程師就業養成班(582小時)，學習如何建立C# Windows Forms應用程式，以及學習Html並搭配Bootstrap、CSS、JavaScript、jQuery、Vue.js製作網頁 ，再以MVC框架、WebAPI進行前後端與資料庫的串聯。</span>
            </div>
            <div class="col-12 my-3"></div>
            <div class="col-md-4 mb-2">四月 2021 - 五月 2024</div>
            <div class="col-md-8">
              <h3>光雄長安醫院</h3>
              全職放射師，負責操作CT、骨質密度儀器、X光機，以及些許的行政作業。
            </div>
          </div>
        </div>
        <div class="col-12 mb-5 pb-5 border-bottom">
          <h2>技能</h2>
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

</style>
