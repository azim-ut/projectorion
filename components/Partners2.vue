<template>
    <div class="partners">
        <p class="part_vertical text-uppercase font-weight-light">ИНЖИНИРИНГОВАЯ КОМПАНИЯ</p>
        <div class="partners_inner">
            <b-img src="~assets/img/white_points.svg"></b-img>
            <div class="partners_content">
                <p class="partners_content_main h3 font-weight-light">Инжиниринговая компания</p>
                <h1 class="my-3" style="color: red;">PROJECT ORION</h1>
                <p class="partners_content_text my-4 font-weight-lighter">Осуществляет инжиниринг: проектирование, строительство, монтаж и ряд других регламентированных услуг, характерных для предприятия полного цикла. В штате работают исключительно высококвалифицированные специалисты, имеющие большой стаж и высшую квалификацию.</p>
                <p class="partners_content_text my-4 font-weight-lighter">Деятельность организации распространяется на 2 крупнейших города РФ – осуществляем инжиниринг в Санкт-Петербурге и Москве. И объемов – от планирования места под размещение объектов до проектирования и сдачи в эксплуатацию. Гарантируем прозрачную работу по прайс-листу и комплексный подход к решению поставленных задач.</p>
                <div class="partners_content_inner mt-5">
                    <p class="h4 d-sm-inline-block font-weight-light align-middle">Оставить заявку на нужную услугу вы можете по телефону:</p>
                    <a class="d-sm-inline-block" href="tel:+79219439172">+7 (921) 943-91-72</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    

}
</script>


<style>
    .partners{
        font-family: 'Gilroy',Arial,sans-serif;
        width: 100%;
        position: relative;
        padding-top: 100px;
        height: 800px;
        top: 000px;
        color: white;
        background-color: rgb(249,249,249);
    }
    .partners_inner{
        margin-left: 10%;
        padding-top: 100px;
        height: 700px;
        background-color: rgb(249,249,249);
        width: 88%;
        background: url("~assets/img/backgroundlast.jpg") no-repeat ;
    }
    .partners_content{
        position: relative;
        top: -200px;
        padding: 50px 100px;
    }
    .partners_inner img{
        position: relative;
        top: -5%;
        left: 90%;
        width: 10%;
    }
    .partners_content h1{
        font-size: 4em;
    }
    .partners_content_text{
        font-size: 1.1em;
        width: 70%;
    }
    .partners_content_inner p{
        width: 33%;
    }
    .partners_content_inner a{
        color: red !important;
        font-size: 2.2em;
        text-decoration: none;;
    }
    .part_vertical{
        position: relative;
        top: -200px;
        left: -42%;
        -webkit-transform: rotate(270deg); 
        transform: rotate(270deg);
        font-size: 0.8em;
        color: black;
    }
    @media only screen and (max-width: 440px){
        .partners{
            padding-top: 00px;
            height: auto;
            background: url("~assets/img/backgroundlast.jpg") no-repeat 100% 100%;
        }
        .partners_inner{
            margin-left: 0%;
            height: auto;
            width: 100%;   

        }
        .partners_content{
            position: relative;
            top: 00px;
            padding: 10px 40px;
        }
        .partners_content_main{
            font-size: 1.3em;
        }
        .partners_content h1{
            font-size: 2.5em;
        }
        .partners_content_text{
            font-size: 1.2em;
            width: 90%;
        }
        .part_vertical{
            display: none;
        }
        .partners_inner img{
            display: none;
        }
        .partners_content_inner p{
            width: 90%;
            font-size: 1.4em;
        }
    }

</style>