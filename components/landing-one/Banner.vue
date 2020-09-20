<template>
  <!-- Start Main Banner Area -->
  <div>

    <div class="main-banner item-bg1" style="padding: 0; min-height: 100vh;">
      <video-bg :loop="false" :sources="[logoVideo]" img="~/assets/img/electricity-transmission-pylon-on-lake-6V2FKFF.jpg">

      </video-bg>
    </div>


    <div class="main-banner item-about"
         style="padding: 40px 10px 10px;">
      <div class="overlay gradient-color"></div>

      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>О компании</h2>
            <p>
              Динамично развивающаяся компания «ПРОЕКТ ОРИОН» специализируется на комплексном
              инжиниринге промышленных, гражданских объектов и объектов специального назначения МО РФ по
              направлениям энергетики, автоматизации процессов, слаботочным системам, системам вентиляции и
              кондиционирования
            </p>
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
import VideoBg from 'vue-videobg'

export default {
  components: { VideoBg },
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
.main-banner.item-about{
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

/* The actual timeline (the vertical ruler) */
.main-banner .timeline::after {
  content: '';
  position: absolute;
  width: 0px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0%;
  margin-left: -3px;
}

/* Container around content */
.main-banner .container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 80%;
}

/* The circles on the timeline */
.main-banner .container::after {
  content: '';
  position: absolute;
}

/* Place the container to the left */
.main-banner .left {
  left: 0;
}

/* Place the container to the right */
.main-banner .right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.main-banner .left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.main-banner .right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.main-banner .right::after {
  left: -16px;
}

/* The actual content */
.main-banner .content {
  max-width: 50%;
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
/* Place the timelime to the left */
.main-banner .timeline::after {
  left: 31px;
}

/* Full-width containers */
.main-banner .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
}

/* Make sure that all arrows are pointing leftwards */
.main-banner .container::before {
  display: none;
  left: 60px;
  border: medium solid #238DC7;
  border-width: 10px 10px 10px 0;
  border-color: transparent #238DC7 transparent transparent;
}

/* Make sure all circles are at the same spot */
.main-banner .left::after, .main-banner .right::after {
  left: 15px;
}

/* Make all right containers behave like the left ones */
.main-banner .right {
  left: 0%;
}

@media screen and (max-width: 800px) {
  .main-banner .content {
    max-width: 100%;
  }
}
</style>
