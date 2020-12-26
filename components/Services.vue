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
        title: 'Проектирование',
        text: 'Определяется архитектура, компоненты и другие аспекты. Создаются сложные системы, опираясь на которые будет проводиться соответствующая деятельность. В зависимости от отрасли, выделяют проектирование: инженерных систем, архитектурно-строительное, ландшафтное, интерьера, градостроительное и т. п.',
        wild: false
      },
      {
        icon: '/img/person.svg',
        title: 'Производство оборудования',
        text: 'Создается высокоточное техническое оснащение, полностью соответствующее современным требованиям. Возможно проектирование и изготовление техники с интегрированными дополнительными расширениями, что обсуждается в процессе формирования заказа.',
        wild: false
      },
      {
        icon: '/img/star.svg',
        title: 'Организация процесса получения технических условий и дополнительных мощностей',
        text: 'Внедряется в работу по желанию клиента, представляет собой целый спектр услуг, для реализации которых подключаются сторонние специалисты компании или эксперты из других организаций.',
        wild: false
      },
      {
        icon: '/img/todolist.svg',
        title: 'Согласование с надзорными органами',
        text: 'Подготавливаем бумаги на утверждение строений, архитектурных сооружений любого типа и т.п. Оформляем всё строго по требованиям госорганов, позволяя исключить задержки или появление других трудностей в ходе работы.',
        wild: false
      },
      {
        icon: '/img/tools.svg',
        title: 'Строительно-монтажные (СМР) и пусконаладочные работы (ПНР)',
        text: 'Возводим здания и сооружения, монтируем технологические системы и оборудование, проводим подготовительные работы перед сдачей объекта в эксплуатацию. Следуем регламентам СНиП РФ, регулирующим процесс строительства и осуществления сторонних работ.',
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
