<template>
    <div class="service">
        <div class="service_inner">
            <b-img fluid class="point d-inline-block align-baseline" src="~/assets/img/point.png" ></b-img>
            <p id="opt" class="about_about font-weight-lighter text-uppercase d-inline-block align-baseline">Услуги </p>


            <p class="service_heading h1 font-weight-normal mt-sm-0 mt-4 ">Компания предоставляет полный спектр услуг, связанных с инжинирингом</p>
            
        </div>

        <div class="service_container">
            <p class="service_text1 h5 m-sm-4 ml-sm-4 mt-0 ml-4 font-sm-weight-light font-weight-lighter align-baseline ">Что позволяет заказчику получить все и сразу в одном месте! Мы работаем в отраслях промышленного, гражданского, инфраструктурного, транспортного и ряда других видов строительства; принимаем участие в градостроительстве и эксплуатации сооружений различного назначения.</p>
            <p class="service_text2 h5 m-sm-4 ml-sm-4 mt-4 ml-4 font-sm-weight-light font-weight-lighter"><strong>Наши услуги распространяются на государственные и коммерческие предприятия,</strong> что позволяет проводить работы различного характера, а именно: оказывать профессиональную помощь в комплексном управлении проектов, организовывать и управлять генподрядом/стройкой, осуществлять исследования, проводить управленческое консультирование и многое другое.</p>
        </div>

        
    </div>
        
</template>



export default {

}

<style>
    .service{
        font-family: 'Gilroy',Arial,sans-serif;
        position: relative;
        top: 00px;
        width: 100%;
        height: 700px;
        background: url("~assets/img/back.svg") no-repeat 220% 5% rgb(249,249,249);
    }
    .service_inner{
        width: 65%;
        position: relative;
        left: 10%;
        padding-top: 10%; 
    }
    .service_heading{
        width: 100%;
    }
    .service_text1, .service_text2{
        width: 65%;
    }
    .service_container{
        padding-bottom: 50px;
        margin-left: 120px;
    }
    @media only screen and (max-width: 440px){
        .service{
            height: 800px;
            width: 100%;
            background: url("~assets/img/back.svg") no-repeat 150px 3% rgb(249,249,249);
            background-size: 100%;
        }
        .service_inner{
            width: 90%;
            left: 10%;
            padding-top: 30%;
        }
        .service_text1, .service_text2{
            font-size: 1em;
            width: 85%;
        }
        .service_heading{
            width: 85%;
            font-size: 1.7em;
        }
        .service_container{
            margin-left: 15px;
        }
    }
</style>