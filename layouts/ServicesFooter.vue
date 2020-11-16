<template>
  <div id="rec249415411" class="r t-rec t-rec_pt_45 t-rec_pb_105 t-rec_pb-res-480_60"
       style="padding-top:45px;padding-bottom:105px;background-color:#fafafa; " data-animationappear="off"
       data-record-type="859" data-bg-color="#fafafa"><!-- t859 -->
    <div class="t859">
      <div class="t-container">
        <div class="t859__row">
          <div class="t859__col t-col t-col_12 t859__col_first">
            <div class="t859__inner-col"
                 style="background-color:#ffffff; border-radius:5px; box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.0);">
              <div class="t859__wrap">
                <div class="t859__wrap_left">
                  <div class="t859__imgwrapper"><img
                    src="images/tild3061-6635-4262-b563-613366653938__Group_1.svg"
                    class="t859__img t859__img_circle t-img" imgfield="li_img__1533113804891"/>
                  </div>
                </div>
                <div class="t859__wrap_right">
                  <div class="t-name t-name_lg t859__bottommargin"
                       style="color:#040606;font-size:22px;font-weight:500;"
                       field="li_title__1533113804891">Строительно-монтажные (СМР) и&nbsp;пусконаладочные
                    работы (ПНР)<br/></div>
                  <div class="t-descr t-descr_sm" style="color:#1a1a1a;font-weight:400;"
                       field="li_descr__1533113804891">Возводим здания и сооружения, монтируем
                    технологические системы и оборудование, проводим подготовительные работы перед
                    сдачей объекта в эксплуатацию. Следуем регламентам СНиП РФ, регулирующим процесс
                    строительства и осуществления сторонних работ.<br/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style> #rec249415411 .t859__inner-col:hover {
      background-color: !important;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10) !important;
    }</style>
    <script type="text/javascript"> $(document).ready(function () {
      t859_init('249415411');
    });</script>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      isSticky: false
    }
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY
      if (scrollPos >= 100) {
        that.isSticky = true
      } else {
        that.isSticky = false
      }
    })
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
}
</script>
<style>

</style>
