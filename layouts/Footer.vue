<template>
  <div>
    <footer class="footer-area">
      <div style="position:relative;overflow:hidden;"><a
        href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a><a
        href="https://yandex.ru/maps/2/saint-petersburg/house/ploshchad_konstitutsii_7/Z0kYdQdoS0AOQFtjfXR0cXVrbA==/?from=tabbar&ll=30.308259%2C59.850988&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=16"
        style="color:#eee;font-size:12px;position:absolute;top:14px;">Площадь Конституции, 7 на карте Санкт-Петербурга,
        ближайшее метро Московская — Яндекс.Карты</a>
        <iframe src="https://yandex.ru/map-widget/v1/-/CCQtzURjcD" width="100%" height="400" frameborder="0"
                allowfullscreen="true" style="position:relative;"></iframe>
      </div>

      <div class="single-footer-widget"
           style="position: absolute; border: #fff 4px solid; right: 5%; top: 20px; background: #eaeaea; padding: 30px 30px; border-radius: 20px;">
        <h3>Контакты</h3>

        <ul class="footer-contact-info">
          <li><i class="fas fa-map-marker-alt"></i>196191, Санкт-Петербург, пл. Конституции, д.7, лит. А</li>
          <li><i class="fas fa-phone"></i>
            <a href="tel:8 (800) 550-31-93">8 (800) 550-31-93</a></li>
          <li><i class="far fa-envelope"></i> <a href="mailto:info.p.orion@gmail.com">info.p.orion@gmail.com</a></li>
        </ul>
      </div>

      <div class="container pt-60">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h3>Project Orion</h3>

              <ul class="quick-links">
                <li>
                  <nuxt-link to="/#">О компании</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/#">Объекты</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/#">Контакты</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="single-footer-widget">

            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            &nbsp;
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <p>Copyright &copy; 2020</p>
            </div>

            <div class="col-lg-6 col-md-6">
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
