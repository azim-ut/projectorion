<template>
  <div style="min-height: 100vh;">
    <!-- Start All Products Area -->
    <section class="all-products-area pb-60">

      <b-container class="bv-example-row services" style=" padding-bottom: 50px;">
        <h2 align="center" style="padding-bottom: 20px; ">Услуги</h2>
        <div>
          <div class="news-slides owl-carousel owl-theme">
            <div
              v-for="(row, index) in products"
              :key="index">
              <b-container class="bv-example-row">
                <b-row v-if="index%2 === 0">
                  <b-col class="bgBlock" :style="'background-image: url('+row.image+')'" cols="12" md="6">&nbsp;
                  </b-col>
                  <b-col class="productBlockTest" cols="0" md="6">
                    <div class="title">{{ row.name }}</div>
                    <p style="font-size: small;">{{ row.description }}</p>
                  </b-col>
                </b-row>
                <b-row v-if="index%2 === 1">
                  <b-col class="productBlockTest" cols="12" md="6">
                    <div class="title left">{{ row.name }}</div>
                    <p style="font-size: small">{{ row.description }}</p>
                  </b-col>
                  <b-col class="bgBlock" :style="'background-image: url('+row.image+')'" cols="0" md="6">
                    &nbsp;
                  </b-col>
                </b-row>
              </b-container>
            </div>

            <br />
            <br />
          </div>
        </div>
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

.jobsItem {
  padding: 10px;
}

.all-products-area .card-header {
  font-size: large;
  min-height: 105px;
  vertical-align: middle;
  align-content: center;
  position: relative;
  justify-content: center;
  justify-items: center;
  background: #FFDDB1;
  border-radius: 15px;
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
