<script setup>
    
</script>

<template>
    <div class="contact">
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
                <div class="col-12 py-5">
                    <h1 class="">Email:</h1>
                    <h1 class="">&emsp;&emsp;menghsiu0120@gmail.com</h1>
                </div>
                <div class="mail-button col-12 d-flex justify-content-center">
                    <button><a href="mailto:menghsiu0120@gmail.com" class="fs-1">Email To Me</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.mail-button{
    width: 70%;
    position: absolute;
    bottom: 10vh;
    /* right: 0; */
}
</style>