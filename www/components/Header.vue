<template>
    <b-container fluid>
        <b-row>
            <b-col cols="4"><b-img class="mt-2 ml-5" src="~/assets/img/logo.jpeg" height="100%" alt='logo'></b-img></b-col>
            <b-col cols="8">
                <b-nav class="d-inline-flex p-2 bd-highlight">
                    <b-nav-item class="hoverAble px-2 py-4 flex-fill bd-highlight" v-b-hover="hoverHandler"><p class="text-dark font-weight-bolder">О нас</p></b-nav-item>
                    <b-nav-item class="hoverAble px-2 py-4 flex-fill bd-highlight"><p class="text-dark font-weight-bolder">Услуги</p></b-nav-item>
                    <b-nav-item class="hoverAble px-2 py-4 flex-fill bd-highlight"><p class="text-dark font-weight-bolder">Проекты</p></b-nav-item>
                    <b-nav-item class="hoverAble px-2 py-4 flex-fill bd-highlight"><p class="text-dark font-weight-bolder">Партнеры</p></b-nav-item>
                    <b-nav-item class="hoverAble px-2 py-4 flex-fill bd-highlight"><p class="text-dark font-weight-bolder">Контакты</p></b-nav-item>
                    <b-nav-item class="px-3 py-2 flex-fill bd-highlight"><b-button squared class="hoverBut px-4 py-3 text-dark bg-white font-weight-bold">Связаться с нами</b-button></b-nav-item>
                </b-nav>
            </b-col>
           
        </b-row>
    </b-container>
</template>



<style>
    .hoverAble { color: #666;display:inline-block; margin:0;text-transform:uppercase; }
    .hoverAble:after {
        display:block;
        content: '';
        border-bottom: solid 2px black;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    .hoverAble:hover:after{  transform-origin:  0% 50%; transform: scaleX(1); }
    .hoverBut{border: 2px solid red;transition: 0.5s all ease;}
    .hoverBut:hover{background-color: black;}
</style>