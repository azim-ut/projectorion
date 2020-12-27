<template>
  <div class="ServiceBlock contentBlock">
    <div class="verticalLeft"></div>
    <div class="content">
      <div v-for="item in items" :key="item.icon" :class="(item.wild?'wild':'serviceBlockBox') + ' box'">
        <div class="iconBlock">
          <div class="icon"><img :src="item.icon" /></div>
        </div>
        <div class="text">
          <h3 class="semibold serviceBlockBoxHead"><Bundle :target="item.title"/></h3>
          <p class="serviceBlockBoxText"><Bundle :target="item.text"/></p>
        </div>
      </div>
    </div>
    <div class="verticalLeft"></div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    window.setTimeout(this.resizeBlocksHeight, 1000)
    window.addEventListener('resize', () => {
      window.setTimeout(this.resizeBlocksHeight, 1000)
    })
  },
  data: () => ({
    items: [
      {
        icon: '/img/calc.svg',
        title: 'SRV_1_TITLE',
        text: 'SRV_1_TEXT',
        wild: false
      },
      {
        icon: '/img/person.svg',
        title: 'SRV_2_TITLE',
        text: 'SRV_2_TEXT',
        wild: false
      },
      {
        icon: '/img/star.svg',
        title: 'SRV_3_TITLE',
        text: 'SRV_3_TEXT',
        wild: false
      },
      {
        icon: '/img/todolist.svg',
        title: 'SRV_4_TITLE',
        text: 'SRV_4_TEXT',
        wild: false
      },
      {
        icon: '/img/tools.svg',
        title: 'SRV_5_TITLE',
        text: 'SRV_5_TEXT',
        wild: true
      }
    ]
  }),
  methods: {
    resizeBlocksHeight() {
      let blocks = window.document.querySelectorAll('.serviceBlockBox')
      let heads = window.document.querySelectorAll('.serviceBlockBoxHead')
      let texts = window.document.querySelectorAll('.serviceBlockBoxText')
      let maxHeight = 0
      blocks.forEach((block, i) => {
        let height = heads.item(i).clientHeight + texts.item(i).clientHeight
        if (maxHeight < height) {
          maxHeight = height
        }
      })
      blocks.forEach(block => {
        block.style.height = maxHeight + 120 + 'px'
      })
    }
  }
}
</script>


<style>
.ServiceBlock {
  display: flex;
  width: 100%;
  padding-top: 2%;
  background: #fafafa;
}

.ServiceBlock .content {

}

.ServiceBlock .content .box .iconBlock {
  width: 30%;
  justify-content: center;
  align-items: center;
}

.ServiceBlock .content .box .icon {
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: .3s;
  border: red 2px solid;
}

.ServiceBlock .content .box .icon {
  box-shadow: 0 0 0 0 #fff;
  background: #fff;
}

.ServiceBlock .content .box .icon img {
  width: 50px;
  height: 50px;
}

.ServiceBlock .content .box {
  overflow: hidden;
  width: 48%;
  margin: 1%;
  padding: 5%;
  background: #fff;
  display: flex;
  float: left;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.ServiceBlock .content .box.wild {
  width: 98%;
  display: flex;
  padding: 2.5%;
}

.ServiceBlock .content .box.wild .icon {
  border: none;
}

.ServiceBlock .content .box.wild:hover .icon,
.ServiceBlock .content .box.wild .icon {
  box-shadow: none;
  background: transparent;
}

.ServiceBlock .content .box.wild .icon {
  width: 150px;
  height: 150px;
}

.ServiceBlock .content .box.wild .icon img {
  width: 100px;
  height: 100px;
}

.ServiceBlock .content .box .text {
  position: relative;
  z-index: 1;
  transition: 0.5s;
  width: 70%;
}

.ServiceBlock .content h3 {
  margin: 0 0 30px;
}

@media (max-width: 768px) {
  .ServiceBlock .content .box {
    overflow: hidden;
    width: 95%;
    margin: 3% 2.5% 0 2.5%;
    padding: 5%;
    display: block;
    background: #fff;
    height: auto !important;
    text-align: center;
    float: left;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .ServiceBlock .content .box .icon {
    margin: 0 auto;
  }

  .ServiceBlock .content .box .iconBlock,
  .ServiceBlock .content .box .text {
    height: auto;
    width: auto;
    display: block;
    padding: 5%;
  }

  .ServiceBlock .content .box.wild {
    height: auto;
    width: auto;
    display: block;
    padding: 5%;
  }
}
</style>
