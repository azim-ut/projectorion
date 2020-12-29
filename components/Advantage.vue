<template>
  <div class="AdvantageBlock contentBlock" id="adv">
    <div class="verticalRight">&nbsp;</div>

    <div class="verticalCenter">
      <div class="content">
        <div class="pre" data-aos="fade-top">
          <h1>
            <Bundle :target="'ADVANTAGE_HEAD'" />
          </h1>
          <p>
            <Bundle :target="'ADVANTAGE_TEXT'" />
          </p>
        </div>
        <div class="why_we">
          <div class="whyRow" v-for="(item,index) in items" :key="item.title" data-aos="fade-up" :data-aos-delay="50*(index)">
            <img :src="item.image" />
            <div class="text">
              <h3><Bundle :target="item.title" /></h3>
              <p><Bundle :target="item.content" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="verticalLeft">&nbsp;</div>

  </div>

</template>


<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          title: 'ADV_TITLE_1',
          content: 'ADV_TEXT_1',
          image: '/img/button.svg'
        },
        {
          title: 'ADV_TITLE_2',
          content: 'ADV_TEXT_2',
          image: '/img/graduate.svg'
        },
        {
          title: 'ADV_TITLE_3',
          content: 'ADV_TEXT_3',
          image: '/img/arm.svg'
        },
        {
          title: 'ADV_TITLE_4',
          content: 'ADV_TEXT_4',
          image: '/img/clock.svg'
        },
        {
          title: 'ADV_TITLE_5',
          content: 'ADV_TEXT_5',
          image: '/img/star.svg'
        },
        {
          title: 'ADV_TITLE_6',
          content: 'ADV_TEXT_6',
          image: '/img/eye.svg'
        }
      ]
    }
  }
}
</script>


<style>
.AdvantageBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
  padding: 5% 0 0;
}

.AdvantageBlock .content {
  align-items: center;
}

.AdvantageBlock .content .pre {
  width: 60%;
  margin: 0 auto;
}

.why_we {
  width: 100%;
  margin-top: 50px;
  padding-top: 50px;
  background-color: #fff;
  height: auto;
  overflow: hidden;
}

.why_we .whyRow {
  width: 45%;
  float: left;
  background: #fff;
  padding: 2%;
  height: 250px;
  display: flex;
  position: relative;
}

.why_we .whyRow h3 {
  margin-bottom: 20px;
}

.why_we .whyRow .text {
  width: 75%;
  margin-left: 25%;
}

.why_we .whyRow img {
  padding-right: 20px;
  width: 20%;
  max-width: 60px;
  position: absolute;
}

.table_adv2 img {
  padding-top: 20px;
  float: left;
  width: 14%;
}

@media (max-width: 768px) {
  .why_we {
    width: auto;
    margin: 20px;
  }

  .why_we .whyRow p{
    text-align: left;
  }

  .why_we .whyRow {
    width: auto;
    display: block;
    height: auto;
    text-align: center;
    margin-bottom: 50px;

  }

  .why_we .whyRow img {
    position: relative;
  }

  .why_we .whyRow img,
  .why_we .whyRow .text {
    width: auto;
    height: auto;
    margin: 0%;
  }
}

</style>

