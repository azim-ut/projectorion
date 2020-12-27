<template>
  <div class="contentBlock">
    <div id="proj" class="projectBlock">

      <div class="verticalLeft">&nbsp;</div>

      <div class="verticalCenter Project">
        <div class="dotTitle">
          <img src="/img/point.png" /> <Bundle :target="'MENU_PROJECTS'" />
        </div>
        <div class="content">
          <h2><Bundle :target="'PROJECTS_TITLE'" /></h2>
          <p><Bundle :target="'PROJECTS_TEXT'" /></p>
        </div>
      </div>


    </div>
    <div class="SliderBlock">
      <div class="verticalLeft">&nbsp;</div>
      <div class="slider">

        <vue-horizontal-list :items="items" :options="options">

          <template v-slot:nav-prev>
            <div>
              <img class="img_turn" src="/img/left.png">
            </div>
          </template>

          <template v-slot:nav-next>
            <div>
              <img class="img_turn" src="/img/next.png">
            </div>
          </template>

          <template v-slot:default="{ item }">
            <div class="box">
              <div class="text">
                <img :src="item.image" />
                <h3><Bundle :target="item.title" /></h3>
                <p><Bundle :target="item.content" /></p>
              </div>
            </div>
          </template>
        </vue-horizontal-list>

      </div>
      <div class="verticalLeft">&nbsp;</div>
    </div>
  </div>

</template>

<script>
import VueHorizontalList from 'vue-horizontal-list'

export default {
  name: 'image-three',
  components: {
    VueHorizontalList
  },
  data() {
    return {
      items: [
        {
          title: 'PROJECTS_TITLE_1',
          content: 'PROJECTS_TEXT_1',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'PROJECTS_TITLE_2',
          content: 'PROJECTS_TEXT_2',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'PROJECTS_TITLE_3',
          content: 'PROJECTS_TEXT_3',
          image: '/img/monopoly_sm.jpg'
        },
        {
          title: 'PROJECTS_TITLE_4',
          content: 'PROJECTS_TEXT_4',
          image: '/img/monopoly_sm.jpg'
        }
      ],
      options: {
        responsive: [
          { end: 600, size: 1 },
          { size: 2 }
        ],
        navigation: {
          backgroundColor: 'red',
          color: 'white'
        }
      }
    }
  }
}
</script>

<style scoped>
.projectBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
}

.Project {
}

.projectBlock .content {
  width: 100%;
  display: inline-flex;
}

.projectBlock .content h2 {
  margin: 5% 10% 5% 0;
  width: 40%;
  font-weight: 400;
  font-size: 200%;
}

.projectBlock .content p {
  margin: 5% 0;
  width: 50%;
}

.SliderBlock {
  display: flex;
  width: 100%;
  background: #fafafa;
}

.slider {
  position: relative;
  width: 80%;
  padding: 0 24px;
  z-index: 1;
  background: #fafafa;
}

.slider .vhl-container div:nth-child(1) {
  background: #fff;
  padding: 5%;
}

.slider p {
  width: 100%;
  margin-top: 4px;
}

.slider .text {
  text-align: center;
  align-items: center;
  position: relative;
  height: 300px;
}

.image_container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
}

.img_turn {
  width: 100%;
  height: 100%;
  padding: 15%;
  background-color: red;
  border-radius: 50px;
}

@media (max-width: 768px) {

  .projectBlock {
    padding: 8%;
    width: auto;
  }

  .projectBlock .content {
    display: block;
  }

  .projectBlock .content h2,
  .projectBlock .content p {
    width: 100%;
  }
}
</style>
