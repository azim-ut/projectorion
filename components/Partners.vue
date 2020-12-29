<template>
  <div id="partner" class="PartnerBlock contentBlock">
    <div class="verticalLeft">&nbsp;</div>
    <div class="verticalCenter">
      <div class="content">
        <h1 align="center"><Bundle :target="'OUR_PARTNERS'" /></h1>
        <br/>
        <div :class="item.text?'row long':'row'" v-for="(item,index) in items"
             data-aos="fade-up" :data-aos-delay="50*(index)"
             :key="item.logo">
          <a v-if="item.link" :href="item.link" target="_blank">
            <img :src="item.logo"/>
          </a>
          <img v-if="!item.link" :src="item.logo" />

          <p v-if="item.text">
            <Bundle :target="item.text" />
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
          text: 'AC_STROY',
          link: 'http://www.as-energo.ru',
          logo: '/img/ac_logo_100.jpg'
        },
        {
          logo: '/img/siem.png'
        },
        {
          logo: '/img/eae.png'
        },
        {
          logo: '/img/dkc.png'
        },
        {
          logo: '/img/abb.png'
        },
        {
          logo: '/img/legrand.png'
        },
        {
          logo: '/img/sch.png'
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
