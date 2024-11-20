<script setup>
    
</script>

<template>
    <div class="contact" style="height: 100vh;">
        <div class="container">
            <div class="row w-100 py-4">
                <div class="col-12">
                    <RouterLink class="cta" to="/">
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
                        </svg>
                        <span class="hover-underline-animation fs-3">Home</span>
                    </RouterLink>
                </div>
                <div class="col-12 p-4">
                    <h1 class="m-0">Email:</h1>
                    <h2 class="">&emsp;&emsp;menghsiu0120@gmail.com</h2>
                    <h1 class="m-0">Github：</h1>
                    <a href="https://github.com/meng-hsiu"><h2>&emsp;&emsp;https://github.com/meng-hsiu</h2></a>
                    <h1 class="m-0">Cake：</h1>
                    <a href="https://www.cake.me/s--tr3yvIDk1ec742xEIaz7qg--/menghsiu0120?item-just-published=true"><h2>&emsp;&emsp;https://reurl.cc/DK9DV5</h2></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.contact{
    position: absolute;
}

.mail-button{
    position: absolute;
    width: 70%;
    bottom: 10vh;
}
</style>