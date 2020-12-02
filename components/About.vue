<template>
        <span id="about">
        <b-container class="about_container">
            <b-container class="p-sm-5 p-md-5 p-lx-5">
                <b-container class="about_second_container">
                    <b-img fluid class="point d-inline-block align-baseline" src="~/assets/img/point.png" ></b-img>
                    <p class="about_about font-weight-lighter text-uppercase d-inline-block align-baseline">О нас </p>
                    <p class="about_heading h2 mt-4 mb-4 font-weight-normal">ООО «Проект Орион» – вертикально развивающаяся компания, которая специализируется на инжиниринговых услугах полного цикла</p>
                    <p class="about-text h5">Реализации различной сложности проектов, имеющих принадлежность к частым или государственным объектам. Уверенно войдя на рынок и заняв одну из лидирующих позиции в Москве и Санкт-Петербурге, наша организация уже смогла завоевать доверие заказчиков, а также сформировать большую клиентскую базу.</p>
                </b-container>
            </b-container>
        </b-container>
        </span>
    
</template>



<script src="https://unpkg.com/vue/dist/vue.js"></script> 
<script src="https://unpkg.com/vue2-smooth-scroll"></script>
<script>


export default {
    

}
</script>



<style>
    .about_container{
        font-family: 'Gilroy',Arial,sans-serif;
        width: 65%;
        height: 600px;
        background-color: rgb(249,249,249);
        position: relative;
        top: -80px;
        left: -20%;
    }
    .about_second_container{
        padding:0;
        margin: 50px 100px;
    }
    .point{
        width: 8px;
    }
    .about_about{
        font-size: 13px;
    }
    .about_heading{
        width: 80%;
        font-size: 2.2em;
    }
    .about-text {
        width: 80%;
        font-weight: 200
    }
    @media only screen and (max-width: 1024px){
        .about_container{
            width: 85%;  
        }
        .about_second_container{
            padding:0;
            margin: 70px 150px;
        }
    }

    @media only screen and (max-width: 440px){
        .about_container{
            width: 100%;  
            height: auto;
            top: -10px;
            left: 0%;
        }
        .about_second_container{
            margin:0;
            padding: 50px 20px;
        }
        .about_heading{
            width: 90%;
            font-size: 1.6em;
        }
        .about-text {
            width: 90%;
            font-weight: 200;
            font-size: 1.1em;
        }
    }

</style>