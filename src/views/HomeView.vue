<script setup>
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
            </div>
            <div class="my-card-body">
              <div class="my-card-body-text">&emsp;&emsp;Hi，我是謝孟修，先前在醫院工作，接受完資展國際全端工程師培訓後轉職中，已有基本前、後端及資料庫操作能力，希望能成為一位工程師。</div>
              <div class="my-card-body-text-link">
                <RouterLink class="cta" to="/about">
                    <span class="hover-underline-animation"> 更多資訊 </span>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="10"
                      viewBox="0 0 46 16"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"
                      ></path>
                    </svg>
                </RouterLink>
              </div>
            </div>
          </div>
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
.my-card{
  position: relative;
  min-width: 350px;
  width: 100%;
  height: 65vh;
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
  height: 30%;
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
  height: 70%;
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
