<template>
    <div class="key m-0 p-0">
        <b-container class="key_cont1 m-0 ml-sm-0 ml-md-4 p-0 float-sm-none float-md-left d-inline-block">
            <p class="key_text text-uppercase d-sm-none d-md-inline-block">РАБОТАЕМ «ПОД КЛЮЧ»</p>
            <b-img class="key_img d-inline-block" src="~/assets/img/worker.jpg"></b-img>
        </b-container>


        <b-container class="key_cont2 pl-1 float-sm-none float-md-right d-inline-block">
            <p class="key_heading h2 mt-md-4 mb-md-4 font-weight-normal">Мы осуществляем все работы «под ключ»</p>
            <p class="key_big_text h5 font-weight-light">Что позволяет каждомузаказчику получить профессиональное обслуживание и высокое качество предоставляемых услуг. Благодаря уникальным предложениям и принципиальному использованию проверенных технологий, наша команда выполняет даже самые неординарные и трудоемкие задачи, проявляя индивидуальный подход к каждому проекту. В своей работе мы применяем высокоточные приборы и современные технологичные решения, позволяющие добиться лучших результатов!</p>
            <b-button squared class="hoverBut hoverCons mt-5 px-5 py-2 font-weight-normal">Получить консультацию</b-button>
        </b-container>    
    </div>
</template>

export default {

}

<style>
    .key{
        font-family: 'Gilroy',Arial,sans-serif;
        width: 100%;
        height:550px;
        margin: 0;
        padding: 0;
    }
    .key_img{
        width:65%;
    }
    .key_text{
        padding: 0;
        margin: 0px;
        -webkit-transform: rotate(270deg); 
        transform: rotate(270deg);
        color: black;
        font-weight: 200;
    }
    .key_heading{
        width: 60%;
    }
    .key_big_text{
        width: 90%;
        font-size: 1.1em;
        line-height: 25px;
    }
    .key_cont1{
        width:45%;
    }
    .key_cont2{
        width: 40%;
    }
    @media only screen and (max-width: 440px){
        .key{
            height: auto;
        }
        .key_text{
            display: none;
        }
        .key_img{
            width: 100%;
            height: 400px;
            
        }
        .key_cont1, .key_cont2{
            width:100%;
        }
        .key_heading, .key_big_text{
            margin-left: 10%;
            margin-top: 5%;
            width: 90%;
        }
        .hoverCons{
            margin-left: 15%;
            display: block;
        }
    }
</style>

