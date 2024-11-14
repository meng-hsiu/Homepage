<script setup>
    
</script>

<template>
    <div class="personal">
        <div class="container d-flex justify-content-center">
            <div class="row w-100 py-4">
                <div class="col-12">
                    <h1>個人專題</h1>
                </div>
                <div class="col-12 mb-5 border-bottom pb-5">
                    <a href="https://github.com/meng-hsiu/WindowsFormsBingoBingo" target="_blank"><h2 class=""><i class="fa-brands fa-github"></i>模擬台灣彩券BingoBingo</h2></a>
                    <div class="row">
                        <div class="col-md-5">
                            <img class="w-100" src="/src/images/BingoBingo.png" alt="">
                        </div>
                        <div class="col-md-7">
                            &emsp;&emsp;以WinForm製作而成，模擬台灣彩券BingoBingo的小軟體，可電腦選號，自選號碼，開獎、兌獎並計算獎金。
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-5 border-bottom pb-5">
                    <a href="https://github.com/meng-hsiu/AI_IcecreamStore" target="_blank"><h2 class=""><i class="fa-brands fa-github"></i>像素冰舖</h2></a>
                    <div class="row">
                        <div class="col-md-5">
                            <img class="w-100" src="/src/images/Pixel_Store.png" alt="">
                        </div>
                        <div class="col-md-7">
                            &emsp;&emsp;以WinForm製作而成，搭配ADO.NET，使用像素的風格去呈現各種商品的樣式，分為顧客和管理兩個權限：
                            <br>
                            1.顧客端:註冊、搜尋商品、商品下單、購物車查詢、歷史訂單查詢、個人資料修改
                            <br>
                            2.管理端：針對商品、顧客、訂單的CRUD管理，可以查看營業額
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-5 border-bottom pb-5">
                    <a href="https://github.com/meng-hsiu/licence" target="_blank"><h2 class=""><i class="fa-brands fa-github"></i>車牌辨識</h2></a>
                    <div class="row">
                        <div class="col-md-5">
                            <img class="w-100" src="/src/images/license_detector.png" alt="">
                        </div>
                        <div class="col-md-7">
                            &emsp;&emsp;以Python製作，為了模擬小組專題而製作的簡易車牌辨識程式
                            <br>
                            1.先使用yolov10模型判斷物件後
                            <br>
                            2.再以車牌辨識的模型裁切出車牌範圍並進行影像處理
                            <br>
                            3.由EasyOCR去辨識車牌號碼
                            <br>
                            4.透過正則表達式判斷不符合台灣規格的車牌
                            <br>
                            5.使用pyodbc與小組的資料庫進行篩選和比對後，將符合條件的數據寫入資料庫。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
a{
    color:black;
    text-decoration: none;
}
a:hover, a:visited, a:link, a:active {
    text-decoration: none;
}
a:hover{
    color:white;
}
</style>