<template>
  <div class="contentBlock">
    <div id="proj" class="projectBlock">

      <div class="verticalLeft">&nbsp;</div>

      <div class="verticalCenter Project">
        <div class="dotTitle">
          <img src="/img/point.png" /> ПРОЕКТЫ
        </div>
        <div class="content">
          <h2>
            Нашей организации доверяет общество и заказчики любого ранга.
          </h2>
          <p>
            Деятельность компании ориентированна на долгосрочное и
            взаимовыгодное сотрудничество. Наш опыт и постоянный профессиональный прогресс - обеспечивают
            качество и пунктуальность - которые так ценятся нашими клиентами!
            <br />
            Каждый клиент - важен для нас!
          </p>
        </div>
      </div>


    </div>
    <div class="SliderBlock">
      <div class="verticalLeft">&nbsp;</div>
      <div class="slider">

        <vue-horizontal-list :items="items" :options="options">

          <template v-slot:nav-prev>
            <div>
              <img class="img_turn" src="/img/left.png">
            </div>
          </template>

          <template v-slot:nav-next>
            <div>
              <img class="img_turn" src="/img/next.png">
            </div>
          </template>

          <template v-slot:default="{ item }">
            <div class="box">
              <div class="text">
                <img :src="item.image" />
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.content }}
                </p>
              </div>
            </div>
          </template>
        </vue-horizontal-list>

      </div>
      <div class="verticalLeft">&nbsp;</div>
    </div>
  </div>

</template>

<script>
import VueHorizontalList from 'vue-horizontal-list'

export default {
  name: 'image-three',
  components: {
    VueHorizontalList
  },
  data() {
    return {
      items: [
        {
          title: 'ООО «Армада»',
          content: 'Работы по монтажу и пуско-наладке систем внешнего энергоснабжения 10/0,4 кВ (г.Каспийск).',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'ООО «Титан Полимер»',
          content: 'Работы по монтажу систем 10/0,4 кВ, монтаж кабельных систем и лоточных трасс, монтаж освещения, монтаж слаботочных систем (г.Псков).',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'ГК Росстройинвест (РСТИ)',
          content: 'Монтаж систем внутреннего электроснабжения.',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'Министерство Обороны РФ',
          content: 'Монтаж систем внешнего энергоснабжения 10/0,4 кВ.',
          image: '/img/monopoly_sm.jpg'
        }
      ],
      options: {
        responsive: [
          { end: 600, size: 1 },
          { size: 3 }
        ],
        navigation: {
          backgroundColor: 'red',
          color: 'white'
        }
      }
    }
  }
}
</script>

<style scoped>
.projectBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
}

.Project {
}

.projectBlock .content {
  width: 100%;
  display: inline-flex;
}

.projectBlock .content h2 {
  margin: 5% 10% 5% 0;
  width: 40%;
  font-weight: 400;
  font-size: 200%;
}

.projectBlock .content p {
  margin: 5% 0;
  width: 50%;
}

.SliderBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
}

.slider {
  position: relative;
  width: 80%;
  padding: 0 24px;
  z-index: 1;
  background: #fafafa;
}

.slider .vhl-container div:nth-child(1) {
  background: #fff;
  padding: 5%;
}

.slider p {
  width: 100%;
  margin-top: 4px;
}

.slider .text {
  text-align: center;
  align-items: center;
  position: relative;
  height: 300px;
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

.img_turn {
  width: 100%;
  height: 100%;
  padding: 15%;
  background-color: red;
  border-radius: 50px;
}

@media (max-width: 768px) {

  .projectBlock {
    padding: 8%;
    width: auto;
  }

  .projectBlock .content {
    display: block;
  }

  .projectBlock .content h2,
  .projectBlock .content p {
    width: 100%;
  }
}
</style>
