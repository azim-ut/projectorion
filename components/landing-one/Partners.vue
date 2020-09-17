<template>
  <!-- Start Category Products Area -->
  <section class="category-products-area pb-60">
    <div class="container" style="min-height: 50vh;">
      <div class="row">

        <div class="col-6">
          <div class="newsletter-content">
            <h3>Наши партнеры</h3>
            <p>
              Компания «ПРОЕКТ ОРИОН» имеет прочные партнерские отношения с региональными
              представителями и руководством ведущих мировых производителей SIEMENS, ABB, Schneider
              Eleсtric, Legrand, ЕАЕ, DKC позволяющие оптимизировать цену конечного продукта в пользу
              Заказчика.
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-lg-3 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_schneider.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>

            <div class="col-lg-4 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_eae.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>

            <div class="col-lg-4 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_dkc.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>

            <div class="col-lg-4 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_abb.svg.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>

            <div class="col-lg-4 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_legrand.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>

            <div class="col-lg-4 col-sm-4">
              <div class="single-category-box">
                <img src="../../assets/img/logo/logo_siemens.png" alt="image">

                <div class="category-content">
                </div>

                <a href="#" class="link-btn"></a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
  <!-- End Category Products Area -->
</template>

<script>
export default {
  components: {},
  methods: {
    toggle() {
    }
  },
  computed: {
    products() {
      return this.$store.state.products.all.filter(product => product.bestSellers === true);
    }
  }
};
</script>
