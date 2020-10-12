<template>
  <div style="min-height: 100vh;">
    <!-- Start All Products Area -->
    <section class="all-products-area pb-60">

      <b-container class="bv-example-row services" style=" padding-bottom: 50px;">
        <h2 align="center" style="padding-bottom: 20px; ">Продукция</h2>

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

.services .bgBlock {
  background: #FFDDB1 no-repeat center center/cover;
  min-height: 300px;
  border-radius: 20px;
}

.services .title {
  font-size: 120%;
  line-height: 20px;
  border-left: #000 5px solid;
  padding: 2px 0 2px 10px;
  color: #000;
  margin-bottom: 10px;
  position: relative;
  left: -20px;
}

.services .title.left {
  border: none;
  text-align: right;
  padding: 2px 10px 2px 0px;
  border-right: #000 5px solid;
  position: relative;
  left: 20px;
  width: 100%;
  z-index: 10;
}
.services .title.wt {
  border-color: #fff;
}

.bgBlock0 {
  background-image: url('~@/assets/img/new2-15.png');
}

.bgBlock1 {
  background-image: url('~@/assets/img/new2-15.png');
}

.bgBlock2 {
  background-image: url('~@/assets/img/new2-15.png');
}

.bgBlock3 {
  background-image: url('/assets/img/new2-15.png');
}
</style>
