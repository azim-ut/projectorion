<template>
  <client-only>
    <!-- Start News Area -->
    <section class="news-area">
      <div class="container" style="min-height: 100vh;">
        <br/>
        <h3 class="text-center">Среди наших заказчики на сегодня</h3>
        <br/>
        <br/>
        <div class="news-slides owl-carousel owl-theme">
          <carousel
            :autoplay=true
            :autoplayTimeout=1000
            :perPageCustom="[[0, 1], [768, 2], [1024, 3], [1200, 3]]"
          >
            <slide v-for="post in posts" :key="post.id">
              <div class="single-news-post">
                <div class="news-image" style="margin: 10px 5px 0; border: #eaeaea 1px solid;">
                  <nuxt-link :to="post.link">
                    <img :src="post.image" :alt="post.title">
                  </nuxt-link>
                </div>

                <div class="news-content" style=" background: transparent; border: #ccc 1px solid; margin: 0 5px; border-top: #eaeaea 1px solid;">
                  <h3>
                    <nuxt-link :to="post.link">{{ post.author }}</nuxt-link>
                  </h3>
                  <span class="author" v-if="false"><a href="#">{{ post.author }}</a></span>
                  <p style="height: 150px;">{{ post.post }}</p>
                </div>
              </div>
            </slide>
          </carousel>
          <br/>
          <br/>
          <b-card title="">
            <b-card-text>
              Мы не размещаем отзывов заказчиков на своём сайте. Вы можете их получить, напрямую обратившись к нашим клиентам. Их контактные данные (кроме МО РФ) есть в открытом доступе.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </section>
    <!-- End News Area -->
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "",
          link: "#",
          author: "30 млн. руб.",
          post: "ООО «Армада» - поставка оборудования, работы по монтажу и пуско-наладке систем внешнего энергоснабжения 10/0,4 кВ (г.Каспийск).",
          image: require("../../assets/img/360x300/8.jpg")
        },
        {
          id: 2,
          title: "",
          link: "#",
          author: "100 млн. руб.",
          post: "ООО «Титан Полимер» - поставка оборудования, работы по монтажу систем 10/0,4 кВ, монтаж кабельных систем и лоточных трасс, монтаж освещения, монтаж слаботочных систем (г.Псков).",
          image: require("../../assets/img/360x300/9.jpg")
        },
        {
          id: 3,
          title: "",
          link: "#",
          author: "90 млн. руб.",
          post: "МО РФ –монтаж систем внешнего энергоснабжения 10/0,4 кВ.",
          image: require('../../assets/img/360x300/10.jpg')
        },
        {
          id: 4,
          title: "",
          link: "#",
          author: "25 млн. руб.",
          post: "ГК Росстройинвест (РСТИ) – монтаж систем внутреннего электроснабжения.",
          image: require('../../assets/img/360x300/11.jpg')
        }
      ]
    };
  }
};
</script>
