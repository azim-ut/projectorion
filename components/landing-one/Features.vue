<template>
  <!-- Start Facility Area -->
  <section class="all-products-area pb-60">
    <div class="container">
      <h2 class="text-center">Сферы услуг</h2>
      <br/>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="/web/assets/img/360x300/11.jpg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="">
              <b>Проектирование, производство оборудования, строительно-монтажные (СМР), пусконаладочные работы (ПНР):</b>
              <br/>
              <br/>
              <b-list-group flush>
                <b-list-group-item>
                  устройства внешнего энергоснабжения в классе напряжения 0.4 -35 кВ (КТП, БКТП, РТП,
                  БРТП, контейнерные подстанции и др.);
                </b-list-group-item>
                <b-list-group-item>
                  система линейного энергоснабжения объекта в классе напряжения 0.4 -35 кВ (ЛЭП, кабельные
                  линии, лоточные системы и др.);
                </b-list-group-item>
                <b-list-group-item>
                  система вентиляции и кондиционирования;
                </b-list-group-item>
                <b-list-group-item>
                  слаботочные системы (видеонаблюдение, видеосвязь, СПС, АСКУД и др.);
                </b-list-group-item>
                <b-list-group-item>
                  система водоснабжения и водоотведения.
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br/>
      <br/>
      <br/>

      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body
              title="">
              <b-card-text>
                Организация процесса получения технических условий (ТУ) и дополнительных
                мощностей, согласование с надзорными органами.
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <b-card-img src="/web/assets/img/360x300/18.jpg" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </section>
  <!-- End Facility Area -->
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
      let $owlFeatures = $(".owl-features"),
        $featureLinks = $(".feature-link");

      console.log($featureLinks);

      function highLightFeature($singleFeatureLink) {
        $featureLinks.removeClass("active");
        $singleFeatureLink.addClass("active");
      }

      $featureLinks.on("click", function() {
        let $item = $(this).data("owl-item");
        $owlFeatures.trigger("to.owl.carousel", $item);
        highLightFeature($(this));
      });

      //Highlight the current link when owl changes
      $owlFeatures.on("changed.owl.carousel", function(event) {
        //Fix the current link
        var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var allItems = event.item.count;
        if (current > allItems || current === 0) {
          current = allItems - (current % allItems);
        }
        current--;
        var $featureLink = $(".feature-link:nth(" + current + ")");
        highLightFeature($featureLink);
      });

      //Highlight the current link when feature clicked
      $featureLinks.on("click", function() {
        var $item = $(this).data("owl-item");
        $owlFeatures.trigger("to.owl.carousel", $item);
        highLightFeature($(this));
      });

      return this.$store.state.products.all.filter(product => product.bestSellers === true);
    }
  }
};
</script>
