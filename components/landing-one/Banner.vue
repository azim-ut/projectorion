<template>
  <!-- Start Main Banner Area -->
  <div>

    <div class="main-banner item-bg1" style="padding: 0; width: 100%; overflow: hidden; background-color: #fff;">
      <video id="videoBG" poster="~/assets/img/electricity-transmission-pylon-on-lake-6V2FKFF.jpg" autoplay muted loop>
        <source :src="logoVideo" type="video/mp4">
      </video>
    </div>

    <div class="aboutAreaRow">
      <b-row>
        <b-col md="2" cols="12"></b-col>
        <b-col cols="*">
          <b-row class="aboutArea">
            <b-col md="6" cols="12" class="one subAbout" data-content="О компании">
              <div class="iconRow">
                <div class="wrapper">
                  <div class="icon"></div>
                </div>
              </div>
              <p>
                Динамично развивающаяся компания «ПРОЕКТ ОРИОН» специализируется на комплексном
                инжиниринге промышленных, гражданских объектов и объектов специального назначения МО РФ по
                направлениям энергетики, автоматизации процессов, слаботочным системам, системам вентиляции и
                кондиционирования
              </p>
            </b-col>
            <b-col md="6" cols="12" class="two subAbout" data-content="2">
              <div class="iconRow">
                <div class="wrapper">
                  <div class="icon"></div>
                </div>
              </div>
              <p>
                Мы осуществляем все работы «под ключ», что позволяет каждому заказчику получить профессиональное
                обслуживание
                и
                высокое качество предоставляемых услуг. Благодаря уникальным предложениям и принципиальному
                использованию
                проверенных технологий, наша команда выполняет даже самые неординарные и трудоемкие задачи, проявляя
                индивидуальный подход к каждому проекту. В своей работе мы применяем высокоточные приборы и современные
                технологичные решения, позволяющие добиться лучших результатов!
              </p>
            </b-col>
            <b-col md="6" cols="12" class="three subAbout" data-content="3">
              <div class="iconRow">
                <div class="wrapper">
                  <div class="icon"></div>
                </div>
              </div>
              <p>
                Предприятие «Проект Орион» использует полный цикл предоставления инжинирингового обслуживания,
                включающий:
                планирование места под строительство или размещение объектов; решение юридических аспектов; инженерные
                изыскания; проектирование; строительство; предоставление и техобслуживание оборудования; сдача в
                эксплуатацию.
              </p>
            </b-col>
            <b-col md="6" cols="12" class="four subAbout" data-content="4">
              <div class="iconRow">
                <div class="wrapper">
                  <div class="icon"></div>
                </div>
              </div>
              <p>
                Нашим главным принципом работы является строгое соблюдение установленных
                регламентов.
                Высококвалифицированные специалисты ИТР, руководящий орган и исполнители способствуют обеспечению
                профессиональной помощи, благодаря которой осуществление услуг проходит в обговоренные сроки, согласно
                прайс-листу.
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="2" cols="12"></b-col>
      </b-row>
    </div>


    <div class="main-banner item-about"
         style="padding: 40px 10px 10px;">
      <div class="overlay gradient-color"></div>

      <div class="timeline">
        <div class="container left">
          <div class="content">

          </div>
        </div>

        <div class="container left">
          <div class="content">
            <h2>Сотрудники</h2>
            <p>Квалифицированный кадровый потенциал инженеров ИТР, руководителей и исполнителей работ
              позволяют грамотно организовать рабочий процесс, сдачу объекта в срок и с наилучшим качеством.
            </p>
          </div>
        </div>

        <div class="container left">
          <div class="content">
            <h2>Преимущества</h2>
            <div><i class="fa fa-arrow-right"></i> &nbsp; Комплексный подход</div>
            <div><i class="fa fa-arrow-right"></i> &nbsp; Проектирование</div>
            <div><i class="fa fa-arrow-right"></i> &nbsp; Производство оборудования</div>
            <div><i class="fa fa-arrow-right"></i> &nbsp; Работа с надзорными органами</div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
  <!-- End Main Banner Area -->
</template>

<script>

export default {
  components: {},
  data() {
    return {
      logoVideo: require('../../assets/video/output_HD720.mp4')
    }
  },
  name: 'Banner',
  methods: {
    toggleMenuTopic(target) {
      this.tab = target
    }
  }
}
</script>
<style>
.aboutAreaRow {
  overflow: hidden;
  width: 100%;
  background: #ffffff;
}

.aboutArea .dark,
.aboutArea .light {
}

.aboutArea .dark p,
.aboutArea .light p {
  position: relative;
  z-index: 10;
}

.aboutArea .subAbout {
  padding: 50px;
}

.aboutArea .one {
  background: #19B2C0;
}

.aboutArea .two {
  background: #D2EDFB;
}

.aboutArea .three {
  background: #FA9C21;
}

.aboutArea .four {
  background: #103340;
}

.aboutArea .one p,
.aboutArea .three p,
.aboutArea .four p {
  color: #fff;
}

.aboutArea .iconRow {
  position: relative;
  height: 100px;
}

.aboutArea .iconRow .wrapper {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.aboutArea .iconRow .wrapper .icon {
  width: 50px;
  height: 50px;
  margin: 20px;
  background: transparent no-repeat center center/contain;
}

.aboutArea .three .iconRow .wrapper {
  background-color: #FFC013;
}

.aboutArea .four .iconRow .wrapper {
  background-color: #D0EEFD;
}

.aboutArea .two .iconRow .wrapper {
  background-color: #2C5C73;
}

.aboutArea .one .iconRow .wrapper {
  background-color: #2C5C73;
}

.aboutArea .one .iconRow .wrapper .icon {
  background-image: url("~@/assets/img/icons/flash.svg");
}

.aboutArea .two .iconRow .wrapper .icon {
  background-image: url("~@/assets/img/icons/plug.svg");
}

.aboutArea .three .iconRow .wrapper .icon {
  background-image: url("~@/assets/img/icons/accumulator.svg");
}

.aboutArea .four .iconRow .wrapper .icon {
  background-image: url("~@/assets/img/icons/buld.svg");
}

.main-banner.item-about {
  /*linear-gradient(180deg, rgba(35,141,199,1) 0%, rgba(42,171,228,1) 100%)*/
  background-image: url("~@/assets/img/cloud-industry-showcase-3-motion-graphic.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: repeat-x;
}

/* The actual timeline (the vertical ruler) */
.main-banner .timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* Container around content */
.main-banner .container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 80%;
}


#videoBG{
  width: 100%;
}

@media screen and (max-width: 800px) {
  .main-banner .content {
    max-width: 100%;
  }
}
</style>
