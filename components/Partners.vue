<template>
  <div id="partner" class="PartnerBlock">
    <div class="verticalLeft">&nbsp;</div>
    <div class="verticalCenter">
      <div class="content">
        <h1 align="center">Наши партнеры:</h1>
        <br/>
        <div :class="item.text?'row long':'row'" v-for="item in items" :key="item.logo">
          <a v-if="item.link" :href="item.link" target="_blank">
            <img :src="item.logo" alt="Наши партнеры" />
          </a>
          <img v-if="!item.link" :src="item.logo" alt="Наши партнеры" />

          <p v-if="item.text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>
</template>


<script>
export default {

  data() {
    return {
      items: [
        {
          text: 'ООО «АС-Строй» (г.Краснодар) - крупнейший производитель силового оборудования на юге РФ. Наша компания имеет инвестиционно-партнерское соглашение с компанией АС-Строй на эксклюзивное представление и взаимодействие на территории северо-западного региона России.',
          link: 'http://www.as-energo.ru',
          logo: require('~/assets/img/ac_logo_2_100.JPG')
        },
        {
          logo: require('~/assets/img/siem.png')
        },
        {
          logo: require('~/assets/img/eae.png')
        },
        {
          logo: require('~/assets/img/dkc.png')
        },
        {
          logo: require('~/assets/img/abb.png')
        },
        {
          logo: require('~/assets/img/legrand.png')
        },
        {
          logo: require('~/assets/img/sch.png')
        }
      ]
    }
  }
}
</script>


<style>
.PartnerBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
  padding: 5% 0 0;
}

.PartnerBlock .content {
  align-items: center;
}

.PartnerBlock .content .row {
  width: 41%;
  margin: 0 2.5% 2.5%;
  float: left;
  height: 60px;
  background: #fff;
  padding: 2%;
  text-align: center;
}

.PartnerBlock .content .row img {
  width: 40%;
}

.PartnerBlock .content .row.long {
  width: auto;
  display: flex;
  height: auto;
}

.PartnerBlock .content .row.long a,
.PartnerBlock .content .row.long img {
  width: auto;
}

.PartnerBlock .content .row p {
  padding-left: 5%;
  text-align: left;
}

@media (max-width: 768px) {
  .PartnerBlock .content .row.long {
    width: auto;
    display: block;
    height: auto;
  }
  .PartnerBlock .content .row{
    width: auto; height: auto;
  }

  .PartnerBlock .content .row p{
    margin: 5% 0;
  }
}
</style>
