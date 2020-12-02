<template>
    <div id="proj" class="project">
     
        
        <div class="project_block1 float-sm-left float-xs-none">   
            <b-img fluid class="point d-inline-block align-baseline" src="~/assets/img/point.png" ></b-img>
            <p class="about_about font-weight-lighter text-uppercase d-inline-block align-baseline">Проекты</p>

            <p class="project_block1_h h1 font-weight-light mt-3">Нашей организации доверяет общество и заказчики любого ранга</p>
        </div>

        <div class="project_block2 float-sm-right float-xs-none">
            <p class="project_block2_h h5 font-weight-light">Ведь вся деятельность компании основана на долгосрочных и взаимовыгодных условиях сотрудничества. Этот фактор позволяет нам оставаться динамично-развивающимся предприятием практически в любых экономических условиях и обеспечивать профессиональное обслуживание! Убедиться в этом – просто. Достаточно ознакомиться с завершенными проектами.</p>
        </div>
        


        <div class="slider">
          <h2 style="visibility: hidden;">Image Three</h2>

          <vue-horizontal-list :items="items" :options="options">

            <template v-slot:nav-prev>
              <div><b-img class="img_turn" src="~assets/img/left.png"></b-img></div>
            </template>
 
            <template v-slot:nav-next>
              <div><b-img class="img_turn" src="~assets/img/next.png"></b-img></div>
            </template>

            <template v-slot:default="{ item }">
              <div class="slider_block_collect">
              <div class="slider_block">
                <div class="image_container">
                  <img :src="item.image" />
                </div>

                  <h3 class="slider_h font-weight-normal pl-4 mt-4">{{ item.title }}</h3>
                  <p class="slider_p font-weight-light pl-4 mt-3">{{ item.content }}</p>
              </div>
              </div>
            </template>
          </vue-horizontal-list>
        </div>
  </div>
</template>

<script>
import VueHorizontalList from "vue-horizontal-list";
export default {
  name: "image-three",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      items: [
        {
          title: "ООО «Армада» - поставка оборудования 30 млн. руб.",
          content:"Работы по монтажу и пуско-наладке систем внешнего энергоснабжения 10/0,4 кВ (г.Каспийск).",
          image: "https://drive.google.com/thumbnail?id=18Ts_SRAkTIlhpqbMnC4X0TfWvlOt97Fy",
        },
        {
          title: "ООО «Титан Полимер» - поставка оборудования 100 млн. руб.",
          content:"Работы по монтажу систем 10/0,4 кВ, монтаж кабельных систем и лоточных трасс, монтаж освещения, монтаж слаботочных систем (г.Псков).",
          image: "https://drive.google.com/thumbnail?id=18Ts_SRAkTIlhpqbMnC4X0TfWvlOt97Fy",
        },
        {
          title: "ГК Росстройинвест (РСТИ) – монтаж 25 млн. руб.",
          content:"Монтаж систем внутреннего электроснабжения.",
          image: "https://drive.google.com/thumbnail?id=18Ts_SRAkTIlhpqbMnC4X0TfWvlOt97Fy",
        },
        {
          title: "МО РФ – монтаж 90 млн. руб.",
          content:"Монтаж систем внешнего энергоснабжения 10/0,4 кВ.",
          image: "https://drive.google.com/thumbnail?id=18Ts_SRAkTIlhpqbMnC4X0TfWvlOt97Fy",
        },
      ],
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { size: 3 },
        ],
        navigation: {
          bacgroundColor: 'red',
          color: "white",
        },
      },
    };
  },
};
</script>

<style scoped>
.project{
        position: relative;
        font-family: 'Gilroy',Arial,sans-serif;
        width: 100%;
        height: 1050px;
        color: black;
        background-color: rgb(249,249,249);
        top: 0px;
    }
    .project_block1{
        margin-left: 150px;
        margin-top: 100px;
        padding-left: 0;
        padding-top: 0;
        width: 35%;
    }
    .project_block2{
        width: 50%;
        padding-right: 120px;
        margin-top: 170px;
    }
    .slider {
      margin-left: 10%;
      position: relative;
      width: 80%;
      padding: 80px 24px;
      z-index: 1;
    }
    .slider_h{
      font-size: 1.3em;
      width: 80%;
    }
    .slider_p{
      font-size: 0.9em;
      line-height: 22px;
    }
    .slider p {
      width: 80%;
      margin-top: 4px;
    }
    .subtitle {
      margin-top: 12px;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .image_container {
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      width: 100%;
      padding-top: 60%;
    }
    .image_container img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0%;
      right: 0;
    }
    .slider_block{
        width: 100%;
        background-color: white;
        height:550px;
    }
    .slider_block_collect{
      width: 100%;
      margin-left: 00%;
    }
    .img_turn{
      width: 100%;
      height: 100%;
      padding: 15%;
      background-color: red;
      border-radius: 50px;
    }
     @media only screen and (max-width: 440px){
       .project{
        height: auto;
        color: black;
        background-color: rgb(249,249,249);
        top: 0px;
    }
        .project_block1{
          padding-left: 40px;
          padding-top: 100px;
          margin: 0;
          width: 80%;
        }
        .project_block2{
          width: 80%;
          padding-right: 00px;
          padding-left: 40px;
          margin-top: 30px;
        }
        .project_block2_h{
          font-size: 1em;
          line-height: 24px;
        }
        .project_block1_h{
          font-size: 2em;
          line-height: 35px;
        }
        .slider {
          margin-left: 0%;
          width: 100%;
          padding: 00px 24px;
        }
    }
</style>