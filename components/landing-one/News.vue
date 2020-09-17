<template>
  <client-only>
    <!-- Start News Area -->
    <section class="news-area">
      <div class="container" style="min-height: 100vh;">
        <br />
        <h3 class="text-center">Среди наших заказчики на сегодня</h3>
        <b-row>
          <b-col cols="3">&nbsp;</b-col>
          <b-col>
            Мы не размещаем отзывов заказчиков на своём сайте. Вы можете их получить, напрямую обратившись к нашим
            клиентам. Их контактные данные (кроме МО РФ) есть в открытом доступе.
          </b-col>
          <b-col cols="3">&nbsp;</b-col>
        </b-row>
        <br />
        <br />

        <div class="news-slides owl-carousel owl-theme">
          <div
            v-for="(row, index) in posts"
            :key="index">
            <b-container class="bv-example-row">
              <b-row v-if="index%2 === 0">
                <b-col :class="'bgBlock bgBlock'+index">&nbsp;</b-col>
                <b-col class="productBlockTest">
                  <h2 style="font-weight: bold;">{{ row.title }} <b style="color: #F87E7E;">{{row.author}}</b></h2>
                  <p style="font-size: medium">{{ row.post }}</p>
                </b-col>
              </b-row>
              <b-row v-if="index%2 === 1">
                <b-col class="productBlockTest">
                  <h2 style="font-weight: bold;">{{ row.title }} <b style="color: #F87E7E;">{{row.author}}</b></h2>
                  <p style="font-size: medium">{{ row.post }}</p>
                </b-col>
                <b-col :class="'bgBlock bgBlock'+index">&nbsp;</b-col>
              </b-row>
            </b-container>
          </div>

          <br />
          <br />
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
          title: 'ООО «Армада» - поставка оборудования',
          link: '#',
          author: '30 млн. руб.',
          post: 'Работы по монтажу и пуско-наладке систем внешнего энергоснабжения 10/0,4 кВ (г.Каспийск).',
          image: require('../../assets/img/360x300/18.jpg')
        },
        {
          id: 2,
          title: 'ООО «Титан Полимер» - поставка оборудования',
          link: '#',
          author: '100 млн. руб.',
          post: 'Работы по монтажу систем 10/0,4 кВ, монтаж кабельных систем и лоточных трасс, монтаж освещения, монтаж слаботочных систем (г.Псков).',
          image: require('../../assets/img/360x300/18.jpg')
        },
        {
          id: 3,
          title: 'МО РФ – монтаж',
          link: '#',
          author: '90 млн. руб.',
          post: 'Монтаж систем внешнего энергоснабжения 10/0,4 кВ.',
          image: require('../../assets/img/360x300/18.jpg')
        },
        {
          id: 4,
          title: 'ГК Росстройинвест (РСТИ) – монтаж',
          link: '#',
          author: '25 млн. руб.',
          post: 'Монтаж систем внутреннего электроснабжения.',
          image: require('../../assets/img/360x300/18.jpg')
        }
      ]
    }
  }
}
</script>
<style>
.productBlockTest {
  padding-top: 20px;
}
.productBlockTest h2{
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

.bgBlock {
  background: #FFDDB1 no-repeat center center/contain;
  min-height: 300px;
}

.bgBlock0 {
  background-image: url('/assets/img/new2-15.png');
}

.bgBlock1 {
  background-image: url('/assets/img/new2-15.png');
}

.bgBlock2 {
  background-image: url('/assets/img/new2-15.png');
}

.bgBlock3 {
  background-image: url('/assets/img/new2-15.png');
}
</style>
