(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{297:function(t,e,n){t.exports=n.p+"img/18.fe397d3.jpg"},298:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6624536f",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("544c5b80",content,!0,{sourceMap:!1})},300:function(t,e,n){t.exports=n.p+"img/new2-15.cbead6d.png"},301:function(t,e,n){var content=n(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("61e0c500",content,!0,{sourceMap:!1})},302:function(t,e,n){var content=n(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b08a65c0",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{subscriptions:{email:"",createdAt:new Date}}},methods:{subscribe:function(){},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"subscribe-area ptb-60"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("form",{staticClass:"newsletter-form",on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriptions.email,expression:"subscriptions.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email или телефон",id:"email",autocomplete:"off"},domProps:{value:t.subscriptions.email},on:{input:function(e){e.target.composing||t.$set(t.subscriptions,"email",e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"submit"},on:{click:t.subscribe}},[t._v("Оставить заявку!")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"newsletter-content"},[e("h3",[this._v("Заказать обратный звонок/письмо")]),this._v(" "),e("p",[this._v("Пожалуйста, укажите номер телефона или email чтобысвязаться с вами.")])])])}],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"category-products-area pb-60"},[o("div",{staticClass:"container",staticStyle:{"min-height":"50vh"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("div",{staticClass:"newsletter-content"},[o("h3",[t._v("Наши партнеры")]),t._v(" "),o("p",[t._v("\n            Компания «ПРОЕКТ ОРИОН» имеет прочные партнерские отношения с региональными\n            представителями и руководством ведущих мировых производителей SIEMENS, ABB, Schneider\n            Eleсtric, Legrand, ЕАЕ, DKC позволяющие оптимизировать цену конечного продукта в пользу\n            Заказчика.\n          ")])])]),t._v(" "),o("div",{staticClass:"col-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-3 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(325),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(326),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(327),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(328),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(329),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-sm-4"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(330),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"}),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])])])])])])])}],r={components:{},methods:{toggle:function(){}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.bestSellers}))}}},l=n(10),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var o={components:{},methods:{toggle:function(){mutations.toggleQuickView()}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.latest}))}}},r=(n(313),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"min-height":"100vh"}},[o("section",{staticClass:"all-products-area pb-60"},[o("b-container",{staticClass:"bv-example-row",staticStyle:{"padding-bottom":"50px"}},[o("h2",{staticStyle:{"padding-bottom":"20px","border-bottom":"#cbcfd6 1px solid"},attrs:{align:"center"}},[t._v("Услуги")]),t._v(" "),o("div",[o("b-card",{attrs:{"img-src":n(300)}},[o("b-card-text",[o("b-row",t._l(t.products,(function(e,n){return o("b-col",{key:n,staticClass:"jobsItem",attrs:{cols:"3",sm:"6",fluid:"md"}},[o("b-row",[o("b-col",{attrs:{cols:"3",align:"center"}},[o("i",{staticClass:"far fa-check-circle",staticStyle:{color:"#7e6a53","font-size":"xx-large"}})]),t._v(" "),o("b-col",{staticStyle:{"font-size":"large"}},[t._v(t._s(e.name))])],1)],1)})),1)],1)],1)],1),t._v(" "),o("b-card-group",{attrs:{deck:""}},[o("b-card",{attrs:{"no-body":"",header:"Проектирование, производство оборудования, строительно-монтажные (СМР), пусконаладочные работы (ПНР)"}},[o("b-list-group",{attrs:{flush:""}},[o("b-list-group-item",{attrs:{href:"#"}},[t._v("Устройства внешнего энергоснабжения в классе напряжения 0.4 -35 кВ (КТП, БКТП, РТП, БРТП, контейнерные подстанции и др.);")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#"}},[t._v("Система линейного энергоснабжения объекта в классе напряжения 0.4 -35 кВ (ЛЭП, кабельные линии, лоточные системы и др.);")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#"}},[t._v("Система вентиляции и кондиционирования;")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#"}},[t._v("Слаботочные системы (видеонаблюдение, видеосвязь, СПС, АСКУД и др.);")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#"}},[t._v("Система водоснабжения и водоотведения.")])],1)],1),t._v(" "),o("b-card",{attrs:{"no-body":"",header:"Дополнительные услуги"}},[o("b-list-group",{attrs:{flush:""}},[o("b-list-group-item",{attrs:{href:"#"}},[t._v("Организация процесса получения технических условий (ТУ) и дополнительных мощностей, согласование с надзорными органами.")])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"category-products-area pb-60"},[o("div",{staticStyle:{"min-height":"100vh"}},[o("br"),t._v(" "),o("h3",{staticClass:"text-center white-color",staticStyle:{color:"#fff"}},[t._v("Галлерея")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"container gallery-content"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(315),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(316),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(317),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(318),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(319),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(320),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(321),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-3 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:n(322),alt:"image"}})])])])])])])}],r=n(10),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";var o=n(298);n.n(o).a},308:function(t,e,n){(e=n(22)(!1)).push([t.i,".VideoBg{position:relative;background-size:cover;background-position:50%;overflow:hidden}.VideoBg video{position:absolute;top:50%;left:50%;visibility:hidden;transform:translate(-50%,-50%)}.VideoBg__content{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},309:function(t,e,n){t.exports=n.p+"videos/output_HD720.0042094.mp4"},310:function(t,e,n){"use strict";var o=n(299);n.n(o).a},311:function(t,e,n){var o=n(22),r=n(108),l=n(312);e=o(!1);var c=r(l);e.push([t.i,".main-banner.item-about{background-image:url("+c+');background-position:50%;background-size:cover;background-repeat:repeat-x}.main-banner .timeline{position:relative;max-width:1200px;margin:0 auto}.main-banner .timeline:after{content:"";position:absolute;width:0;background-color:#fff;top:0;bottom:0;left:0;margin-left:-3px}.main-banner .container{padding:10px 40px;position:relative;background-color:inherit;width:80%}.main-banner .container:after{content:"";position:absolute}.main-banner .left{left:0}.main-banner .right{left:50%}.main-banner .left:before{right:30px;border:solid transparent;border-left:solid #fff;border-width:10px 0 10px 10px}.main-banner .left:before,.main-banner .right:before{content:" ";height:0;position:absolute;top:22px;width:0;z-index:1}.main-banner .right:before{left:30px;border:solid transparent;border-right:solid #fff;border-width:10px 10px 10px 0}.main-banner .right:after{left:-16px}.main-banner .content{max-width:50%;padding:20px 30px;background-color:#fff;position:relative;border-radius:6px}.main-banner .timeline:after{left:31px}.main-banner .container{width:100%;padding-left:70px;padding-right:25px}.main-banner .container:before{display:none;left:60px;border:solid transparent;border-right:solid #238dc7;border-width:10px 10px 10px 0}.main-banner .left:after,.main-banner .right:after{left:15px}.main-banner .right{left:0}@media screen and (max-width:800px){.main-banner .content{max-width:100%}}',""]),t.exports=e},312:function(t,e,n){t.exports=n.p+"img/cloud-industry-showcase-3-motion-graphic.411cf55.jpg"},313:function(t,e,n){"use strict";var o=n(301);n.n(o).a},314:function(t,e,n){var o=n(22),r=n(108),l=n(300);e=o(!1);var c=r(l);e.push([t.i,".card{border:none}.jobsItem{padding:10px}.all-products-area .card-header{font-size:large;min-height:105px;vertical-align:middle;align-content:center;position:relative;justify-content:center;justify-items:center;background:#ffddb1;border-radius:15px}.productBlockTest{padding-top:20px}.bgBlock{background:#ffddb1 no-repeat 50%/contain;min-height:200px}.bgBlock0,.bgBlock1,.bgBlock2{background-image:url("+c+")}.bgBlock3{background-image:url(/assets/img/new2-15.png)}",""]),t.exports=e},315:function(t,e,n){t.exports=n.p+"img/2.ec047e0.jpg"},316:function(t,e,n){t.exports=n.p+"img/3.45a26b4.jpg"},317:function(t,e,n){t.exports=n.p+"img/4.9f3c8ea.jpg"},318:function(t,e,n){t.exports=n.p+"img/5.ac7a655.jpg"},319:function(t,e,n){t.exports=n.p+"img/6.baa2219.jpg"},320:function(t,e,n){t.exports=n.p+"img/7.c4a1ca5.jpg"},321:function(t,e,n){t.exports=n.p+"img/8.1eff0e2.jpg"},322:function(t,e,n){t.exports=n.p+"img/9.42aa889.jpg"},323:function(t,e,n){"use strict";var o=n(302);n.n(o).a},324:function(t,e,n){var o=n(22),r=n(108),l=n(300);e=o(!1);var c=r(l);e.push([t.i,'.productBlockTest{padding-top:20px}.productBlockTest h2{font-family:"Source Sans Pro","Helvetica Neue",Arial,sans-serif}.bgBlock{background:#ffddb1 no-repeat 50%/contain;min-height:300px}.bgBlock0,.bgBlock1,.bgBlock2,.bgBlock3{background-image:url('+c+")}",""]),t.exports=e},325:function(t,e,n){t.exports=n.p+"img/logo_schneider.7b3c296.png"},326:function(t,e,n){t.exports=n.p+"img/logo_eae.81d2c22.png"},327:function(t,e,n){t.exports=n.p+"img/logo_dkc.6b046f2.png"},328:function(t,e,n){t.exports=n.p+"img/logo_abb.svg.a5ba0ac.png"},329:function(t,e,n){t.exports=n.p+"img/logo_legrand.b4a2ba0.png"},330:function(t,e,n){t.exports=n.p+"img/logo_siemens.3fbc55b.png"},331:function(t,e,n){t.exports=n.p+"img/blog2.d1e9eb0.jpg"},332:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"news-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"section-title"},[o("h2",[o("span",{staticClass:"dot"}),t._v(" Bolster News")])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"single-blog-post"},[o("div",{staticClass:"blog-image"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n(161),alt:"image"}})]),t._v(" "),o("div",{staticClass:"post-tag"},[o("a",{attrs:{href:"#"}},[t._v("Shop")])])]),t._v(" "),o("div",{staticClass:"blog-post-content"},[o("span",{staticClass:"date"},[t._v("25 Feb, 2019")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("The Most Popular New top Business Apps")])]),t._v(" "),o("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),o("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),o("i",{staticClass:"icofont-double-right"})])])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"single-blog-post"},[o("div",{staticClass:"blog-image"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n(331),alt:"image"}})]),t._v(" "),o("div",{staticClass:"post-tag"},[o("a",{attrs:{href:"#"}},[t._v("Inspiration")])])]),t._v(" "),o("div",{staticClass:"blog-post-content"},[o("span",{staticClass:"date"},[t._v("27 Feb, 2019")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("The Best Marketing top use Management Tools")])]),t._v(" "),o("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),o("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),o("i",{staticClass:"icofont-double-right"})])])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"single-blog-post"},[o("div",{staticClass:"blog-image"},[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n(162),alt:"image"}})]),t._v(" "),o("div",{staticClass:"post-tag"},[o("a",{attrs:{href:"#"}},[t._v("Sell")])])]),t._v(" "),o("div",{staticClass:"blog-post-content"},[o("span",{staticClass:"date"},[t._v("28 Feb, 2019")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("3 WooCommerce Plugins to Boost Sales")])]),t._v(" "),o("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),o("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),o("i",{staticClass:"icofont-double-right"})])])])])])])])}],r={name:"News"},l=n(10),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),o,!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var o=n(10),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"home-slides-two"},[n("carousel",{attrs:{autoplay:!0,autoplayTimeout:3e3,navigationEnabled:!1,paginationEnabled:!1,perPageCustom:[[0,1],[768,1],[1024,1],[1200,1]]}},[n("slide",[n("div",{staticClass:"banner-section item-bg5"},[n("div",{staticClass:"d-table"},[n("div",{staticClass:"d-table-cell"},[n("div",{staticClass:"container"},[n("div",{staticClass:"banner-content"},[n("span",{staticClass:"sub-title"},[t._v("Limited Time Offer!")]),t._v(" "),n("h1",[t._v("Clothing Made for You!")]),t._v(" "),n("p",[t._v("Take 20% Off ‘Sale Must-Haves'")]),t._v(" "),n("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Shop women's")])])])])])])]),t._v(" "),n("slide",[n("div",{staticClass:"banner-section item-bg6"},[n("div",{staticClass:"d-table"},[n("div",{staticClass:"d-table-cell"},[n("div",{staticClass:"container"},[n("div",{staticClass:"banner-content"},[n("span",{staticClass:"sub-title"},[t._v("Limited Time Offer!")]),t._v(" "),n("h1",[t._v("Clothing Made for You!")]),t._v(" "),n("p",[t._v("Take 20% Off ‘Sale Must-Haves'")]),t._v(" "),n("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Shop Men's")])])])])])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);n(13);var o={props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},mounted:function(){var t=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){t.$refs.video&&(t.videoRatio=t.$refs.video.videoWidth/t.$refs.video.videoHeight,t.setVideoSize(),t.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url(".concat(this.img,")"))},setContainerHeight:function(){this.$el.style.height="".concat(window.innerHeight,"px")},setVideoSize:function(){var t,e;this.$el.offsetWidth/this.$el.offsetHeight>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$refs.video.style.width=t?"".concat(t,"px"):"auto",this.$refs.video.style.height=e?"".concat(e,"px"):"auto"},getMediaType:function(t){return"video/"+t.split(".").pop()}}},r=(n(307),n(10)),l={components:{VideoBg:Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"VideoBg"},[n("video",{ref:"video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},t._l(t.sources,(function(source){return n("source",{attrs:{src:source,type:t.getMediaType(source)}})})),0),t._v(" "),n("div",{staticClass:"VideoBg__content"},[t._t("default")],2)])}),[],!1,null,null,null).exports},data:function(){return{logoVideo:n(309)}},name:"Banner",methods:{toggleMenuTopic:function(t){this.tab=t}}},c=(n(310),Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"main-banner item-bg1",staticStyle:{padding:"0","min-height":"100vh"}},[e("video-bg",{attrs:{loop:!1,sources:[this.logoVideo],img:"~/assets/img/electricity-transmission-pylon-on-lake-6V2FKFF.jpg"}})],1),this._v(" "),this._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-banner item-about",staticStyle:{padding:"40px 10px 10px"}},[n("div",{staticClass:"overlay gradient-color"}),t._v(" "),n("div",{staticClass:"timeline"},[n("div",{staticClass:"container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("О компании")]),t._v(" "),n("p",[t._v("\n            Динамично развивающаяся компания «ПРОЕКТ ОРИОН» специализируется на комплексном\n            инжиниринге промышленных, гражданских объектов и объектов специального назначения МО РФ по\n            направлениям энергетики, автоматизации процессов, слаботочным системам, системам вентиляции и\n            кондиционирования\n          ")])])]),t._v(" "),n("div",{staticClass:"container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("Сотрудники")]),t._v(" "),n("p",[t._v("Квалифицированный кадровый потенциал инженеров ИТР, руководителей и исполнителей работ\n            позволяют грамотно организовать рабочий процесс, сдачу объекта в срок и с наилучшим качеством.\n          ")])])]),t._v(" "),n("div",{staticClass:"container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("Преимущества")]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-arrow-right"}),t._v("   Комплексный подход")]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-arrow-right"}),t._v("   Проектирование")]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-arrow-right"}),t._v("   Производство оборудования")]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-arrow-right"}),t._v("   Работа с надзорными органами")])])])]),t._v(" "),n("br"),t._v(" "),n("br")])}],!1,null,null,null).exports),d=n(305),v=n(306),f={data:function(){return{posts:[{id:1,title:"ООО «Армада» - поставка оборудования",link:"#",author:"30 млн. руб.",post:"Работы по монтажу и пуско-наладке систем внешнего энергоснабжения 10/0,4 кВ (г.Каспийск).",image:n(297)},{id:2,title:"ООО «Титан Полимер» - поставка оборудования",link:"#",author:"100 млн. руб.",post:"Работы по монтажу систем 10/0,4 кВ, монтаж кабельных систем и лоточных трасс, монтаж освещения, монтаж слаботочных систем (г.Псков).",image:n(297)},{id:3,title:"МО РФ – монтаж",link:"#",author:"90 млн. руб.",post:"Монтаж систем внешнего энергоснабжения 10/0,4 кВ.",image:n(297)},{id:4,title:"ГК Росстройинвест (РСТИ) – монтаж",link:"#",author:"25 млн. руб.",post:"Монтаж систем внутреннего электроснабжения.",image:n(297)}]}}},m=(n(323),Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("section",{staticClass:"news-area"},[n("div",{staticClass:"container",staticStyle:{"min-height":"100vh"}},[n("br"),t._v(" "),n("h3",{staticClass:"text-center"},[t._v("Среди наших заказчики на сегодня")]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"3"}},[t._v(" ")]),t._v(" "),n("b-col",[t._v("\n          Мы не размещаем отзывов заказчиков на своём сайте. Вы можете их получить, напрямую обратившись к нашим\n          клиентам. Их контактные данные (кроме МО РФ) есть в открытом доступе.\n        ")]),t._v(" "),n("b-col",{attrs:{cols:"3"}},[t._v(" ")])],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"news-slides owl-carousel owl-theme"},[t._l(t.posts,(function(e,o){return n("div",{key:o},[n("b-container",{staticClass:"bv-example-row"},[o%2==0?n("b-row",[n("b-col",{class:"bgBlock bgBlock"+o},[t._v(" ")]),t._v(" "),n("b-col",{staticClass:"productBlockTest"},[n("h2",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title)+" "),n("b",{staticStyle:{color:"#F87E7E"}},[t._v(t._s(e.author))])]),t._v(" "),n("p",{staticStyle:{"font-size":"medium"}},[t._v(t._s(e.post))])])],1):t._e(),t._v(" "),o%2==1?n("b-row",[n("b-col",{staticClass:"productBlockTest"},[n("h2",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title)+" "),n("b",{staticStyle:{color:"#F87E7E"}},[t._v(t._s(e.author))])]),t._v(" "),n("p",{staticStyle:{"font-size":"medium"}},[t._v(t._s(e.post))])]),t._v(" "),n("b-col",{class:"bgBlock bgBlock"+o},[t._v(" ")])],1):t._e()],1)],1)})),t._v(" "),n("br"),t._v(" "),n("br")],2)],1)])])}),[],!1,null,null,null).exports),_=n(303),h=n(304),C={components:{Banner:c,Products:d.default,Gallery:v.default,News:m,Subscribe:_.default,Partners:h.default}},x=Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Banner"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("Products"),t._v(" "),n("hr"),t._v(" "),n("News"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{background:"#373737"}},[n("Gallery")],1),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("Subscribe"),t._v(" "),n("br"),t._v(" "),n("hr"),t._v(" "),n("br"),t._v(" "),n("Partners")],1)}),[],!1,null,null,null);e.default=x.exports;installComponents(x,{Banner:n(333).default,Products:n(305).default,News:n(332).default,Gallery:n(306).default,Subscribe:n(303).default,Partners:n(304).default})}}]);