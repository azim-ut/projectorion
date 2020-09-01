<template>
  <client-only>
    <!-- Start Partner Area -->
    <div class="partner-area">
      <div class="container">
        <div class="partner-slides owl-carousel owl-theme">
          <carousel
            :loop=true
            :autoplay=true
            :autoplayTimeout=1000
            :paginationEnabled=false
            :perPageCustom="[[0, 2], [768, 4], [1200, 6]]"
            :speed=5000
          >
            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_abb.svg.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_dkc.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_eae.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_legrand.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_schneider.png" alt="image"></a>
              </div>
            </slide>

            <slide>
              <div class="partner-item">
                <a href="#" target="_blank"><img src="../../assets/img/logo/logo_siemens.png" alt="image"></a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <!-- End Partner Area -->
  </client-only>
</template>
