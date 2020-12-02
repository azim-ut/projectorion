<template>
    <div>
        <p class="vertical_text text-uppercase">Инжиниринговая компания</p>
        <b-container fluid class="back">
            <b-container class="ml-0 ml-sm-5 pt-0 pt-sm-5 h-50">
                <b-container class="cont_mob ml-sm-5 pt-sm-5 ml-0 pt-4 h-50 text-white">
                    <p class="h4text h4 font-weight-lighter">Инжиниринговая компания</p>
                    <p class="h2text h2 font-weight-normal mt-2" style="font-family: 'Raleway', sans-serif;">PROJECT ORION</p>
                    <p class="h3text h3 font-weight-normal font-weight-normal mt-5">Качество имеет значение!</p>
                    <p style="line-height: 30px; font-weight: 100;" class="h5text mt-4">Реализуем инжиниринговые проекты любой сложности и объемов
                        - от планирования места под размещение объектов до проектирования и сдачи в эксплуатацию. Гарантируем   
                        прозрачную работу по прайс-листу и комплексный подход к решению поставленных задач.    
                    </p>
                    <div style="visibility: hidden;">
                    <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>
                    </div>

                </b-container>
                <b-img class="many_points" src="~assets/img/points.svg" fluid alt="Many points image"></b-img>
            </b-container>
        </b-container>

  

    </div>
</template>

export default {

}


<style>

    .back{
        font-family: 'Gilroy',Arial,sans-serif;
        width: 88%;
        margin-left: 10%;
        position: relative;
        top: 0px;
        height: 600px;
        margin-right: 2%;
        background: url("~assets/img/background.jpg") no-repeat fixed;
    }
    .vertical_text{
        -webkit-transform: rotate(270deg); 
        transform: rotate(270deg);
        color: black;
        position: absolute;
        left: 0%;
        top: 60%;
        font-weight: 200;
    }
    .many_points{
        width: 20%;
        position: absolute;
        top: 80%;
        right: 10%;
    }
    .h2text{
        color: rgb(229, 39, 41);
        font-size: 4em;
    }
    .cont_mob{
        width: 60%;
    }
    @media only screen and (max-width: 440px){
        .back{
            width: 100%;
            margin-left: 0%;
            margin-right: 0%;
            top: 150px;

        }
        .many_points{
            width: 30%;
            position: absolute;
            top: 80%;
            right: 0%;
        }
        .vertical_text{
            display:none;
        }
        .h4text{
            font-size: 0.9em;
        }
        .h2text{
            font-size: 1.6em;
        }
        .h3text{
            font-size: 1.1em;
        }
        .h5text{
            font-size: 0.9em;
        }
        .cont_mob{
            width: 100%;
        }
    }
    @media only screen and (max-width: 330px){
        .back{
            width: 100%;
            margin-left: 0%;
            margin-right: 0%;
        }
        .many_points{
            width: 30%;
            position: absolute;
            top: 80%;
            right: 0%;
        }
        .vertical_text{
            display:none;
        }
        .h4text{
            font-size: 0.8em;
        }
        .h2text{
            font-size: 1.2em;
        }
        .h3text{
            font-size: 0.8em;
        }
        .h5text{
            font-size: 0.7em;
        }
        
    }
</style>