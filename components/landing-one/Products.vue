<template>
  <div style="min-height: 100vh;">
    <!-- Start All Products Area -->
    <section class="all-products-area pb-60">
      <b-container class="bv-example-row" style=" padding-bottom: 50px;">
        <h2 align="center" style="padding-bottom: 20px; border-bottom: #cbcfd6 1px solid;">Услуги</h2>
        <div>
          <b-card
            img-src="/assets/img/new2-15.png"
          >
            <b-card-text>
              <b-row>
                <b-col
                  class="jobsItem"
                  cols="3" sm="6"
                  v-for="(product, index) in products"
                  :key="index"
                  fluid="md">
                  <b-row>
                    <b-col cols="3" align="center">
                      <i class="far fa-check-circle" style="color: #7e6a53; font-size: xx-large;"></i>
                    </b-col>
                    <b-col style="font-size: large;">{{ product.name }}</b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </div>

        <b-card-group deck>

          <b-card no-body header="Проектирование, производство оборудования, строительно-монтажные (СМР), пусконаладочные работы (ПНР)">
            <b-list-group flush>
              <b-list-group-item href="#">Устройства внешнего энергоснабжения в классе напряжения 0.4 -35 кВ (КТП, БКТП, РТП, БРТП, контейнерные подстанции и др.);</b-list-group-item>
              <b-list-group-item href="#">Система линейного энергоснабжения объекта в классе напряжения 0.4 -35 кВ (ЛЭП, кабельные линии, лоточные системы и др.);</b-list-group-item>
              <b-list-group-item href="#">Система вентиляции и кондиционирования;</b-list-group-item>
              <b-list-group-item href="#">Слаботочные системы (видеонаблюдение, видеосвязь, СПС, АСКУД и др.);</b-list-group-item>
              <b-list-group-item href="#">Система водоснабжения и водоотведения.</b-list-group-item>
            </b-list-group>
          </b-card>

          <b-card no-body header="Дополнительные услуги">
            <b-list-group flush>
              <b-list-group-item href="#">Организация процесса получения технических условий (ТУ) и дополнительных мощностей, согласование с надзорными органами.</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-card-group>

      </b-container>

    </section>
    <!-- End all Products Area -->
  </div>
</template>

<script>

export default {
  components: {},
  methods: {
    toggle() {
      mutations.toggleQuickView()
    }
  },
  computed: {
    products() {
      return this.$store.state.products.all.filter(product => product.latest === true)
    }
  }
}
</script>
<style>
.card {
  border: none;
}
.jobsItem{
  padding: 10px;
}

.all-products-area .card-header{
  font-size: large; min-height: 105px; vertical-align: middle;
  align-content: center;position: relative;justify-content: center;justify-items: center;
  background: #FFDDB1; border-radius: 15px;
}

.productBlockTest {
  padding-top: 20px;
}

.bgBlock {
  background: #FFDDB1 no-repeat center center/contain;
  min-height: 200px;
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
