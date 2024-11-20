<script setup>

</script>

<template>
    <div class="party">
        <div class="container d-flex justify-content-center">
            <div class="row w-100 py-4">
                <div class="col-12">
                    <RouterLink class="cta" to="/">
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
                        </svg>
                        <span class="hover-underline-animation fs-3">Home</span>
                    </RouterLink>
                    </div>
                    <div class="col-12 my-5">
                        <!-- <img class="w-100" src="/src/images/MyGoParking.gif" alt=""> -->
                        <video class="w-100" controls src="/src/images/MyGoParking.mp4"></video>
                    </div>
                    <div class="col-12">
                    <h2 class="mb-3">專案發想緣由：</h2>
                    &emsp;&emsp;在現今車流擁擠的城市裡，不管是平日通勤、假日出遊，不覺得總是難免一位難求嗎?
                    若是能在抵達目的地前預約停車位，就能省下更多寶貴的時間，也不用擔心預定好的行程被延誤了 ! 當然除了預約臨停車位外，我們也提供查找住家附近可長期月租的車位。
                    <div class="col-12 my-5"></div>
                    <h2 class="mb-3">網站架構：</h2>
                    &emsp;&emsp;前台為Vue.js串.Net Web API, 後台則是Core MVC
                    <div class="col-12 my-5"></div>
                    <h2 class="mb-3">網站功能：</h2>
                    前台部分:
                    <br>
                    &emsp;&emsp;可以查找附近停車場，註冊會員後可以預訂、月租停車場，提供線上繳費、意見回覆、LineBot功能。
                    <br>
                    後台部分:
                    <br>
                    &emsp;&emsp;針對各個服務的資料表的CRUD，統計各類數據。
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.party{
    position: absolute;
}
</style>