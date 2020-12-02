<template>
    <b-container class="aboutpart d-block m-2 m-sm-0">

        <b-container class="part_container2 ml-md-2 mt-md-5 ml-sm-0 mt-sm-0 float-sm-none float-md-right">
            <b-img src="~/assets/img/dd1.jpg"></b-img>
        </b-container>


        <b-container class="part_container1 float-sm-none float-md-left">
            <b-img class="part_img ml-md-4 ml-sm-0" src="~/assets/img/points.svg"></b-img>
            <p class="part_text1 h2 font-weight-normal">Предприятие «Проект Орион» использует полный цикл предоставления инжинирингового обслуживания, включающий:</p>
            <p class="part_text2 h5 font-weight-light">Планирование места под строительство или размещение объектов; решение юридических аспектов; инженерные изыскания; проектирование; строительство; предоставление и техобслуживание оборудования; сдача в эксплуатацию. Нашим главным принципом работы является строгое соблюдение установленных регламентов. Высококвалифицированные специалисты ИТР, руководящий орган и исполнители способствуют обеспечению профессиональной помощи, благодаря которой осуществление услуг проходит в обговоренные сроки, согласно прайс-листу.</p>
        </b-container>
        
        
         
    </b-container>    
</template>



export default {

}

<style>
    .aboutpart{
        font-family: 'Gilroy',Arial,sans-serif;
        position: relative;
        top: 60px;
        left: 0%;
        height: 700px;
        width: 100%;
        margin: 0;
        color: black;
        padding: 0;
        padding-bottom: 100px;
    }
    .part_img{
        display: inline-block;
        position: relative;
        left: -30%;
        width: 40%;
    }
    .part_container1{
        width: 60%;
    }
    .part_container2{
        width: 35%;
    }
    .part_container2 img{
        width: 100%;
    }
    .part_text1{
        width: 80%;
        position: relative;
        line-height: 40px;
        top: -250px;
        left: 20%;
    }
    .part_text2{
        width: 80%;
        position: relative;
        top: -230px;
        line-height: 28px;
        left: 20%;
    }
    @media only screen and (max-width: 440px){
        .aboutpart{
            height: auto;
        }
        .part_img{
            display: none;
        }
        .part_container1{
            width: 100%;
        }
        .part_container2{
            width: 100%;
        }
        .part_text1{
            margin: 25px 10px;
            width: 100%;
            line-height: 30px;
            font-size: 1.6em;
            position: static;
            font-weight: 300;

        }
        .part_text2{
            position: static;
            margin: 25px 10px;
            width: 100%;
            line-height: 25px;
            font-size: 0.9em;
            font-weight: 100;
        }
    }

</style>