<script setup>
  
</script>

<template>
    <div class="navbar d-flex flex-column justify-content-center align-items-center bd-highlight mb-3">
      <div class="row w-100 d-flex justify-content-center">
        <div class="col-12 my-pic-box my-4 w-75">
          <div class="d-flex justify-content-center my-pic">mypic</div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-12 my-3">
          <div class="d-flex justify-content-center mt-5">
            <RouterLink class="cta" to="/">
              <span class="hover-underline-animation"> 首頁 </span>
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
        <div class="col-12 my-3">
          <div class="d-flex justify-content-center">
            <RouterLink class="cta" to="/about">
              <span class="hover-underline-animation"> 個人資訊 </span>
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
        <div class="col-12 my-3">
          <div class="d-flex justify-content-center">
            <RouterLink class="cta" to="/PersonalProject">
              <span class="hover-underline-animation"> 個人作品 </span>
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
        <div class="col-12 my-3">
          <div class="d-flex justify-content-center">
            <RouterLink class="cta" to="/PartyProject">
              <span class="hover-underline-animation"> 小組作品 </span>
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
        <div class="col-12 my-3">
          <div class="d-flex justify-content-center">
            <RouterLink class="cta" to="/Contact">
              <span class="hover-underline-animation"> 聯絡我 </span>
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
</template>

<style lang="css" scoped>
.navbar{
  position: absolute;
}
.my-pic-box{
  height: 30vh;
  width: auto;
}
.my-pic::after{
  position: absolute;
  content: "";
  display: block;
  height: 30vh;
  width: 75%;
  z-index: -1;
  border: 1px solid white;
  filter: blur(1px);
  border-radius: 50px;
}

.cta {
  border: none;
  background: none;
  cursor: pointer;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 18px;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: black;
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a{
  text-decoration: none;
}
</style>