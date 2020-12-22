<template>
  <div class="AdvantageBlock contentBlock" id="adv">
    <div class="verticalRight">&nbsp;</div>

    <div class="verticalCenter">
      <div class="content">
        <div class="pre">
          <h1>Почему мы?</h1>
          <p>
            Мы гордимся и заботимся о своей
            репутации, потому непрерывно совершенствуем все процессы, проходящие в компании и за ее пределами. Это
            позволяет
            создать максимально благоприятную среду для сотрудничества!
          </p>
        </div>
        <div class="why_we">
          <div class="whyRow" v-for="item in items" :key="item.title">
            <img :src="item.image" :alt="item.title" />
            <div class="text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
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

  data() {
    return {
      items: [
        {
          title: 'Высокоточные технологии',
          content: 'Интегрируем в работу современные системы, позволяющие добиться лучшего качества работы. Предоставляем возможность ознакомления с предварительным результатом до начала работ, а также возможность доработки проекта до нужного вида.',
          image: '/img/button.svg'
        },
        {
          title: 'Профессиональное образование',
          content: 'Специалисты имеют профильное образование и опыт работы от 3-х лет. Все сотрудники проходят курсы повышения квалификации, техники безопасности и утверждаются только после тестирования и прохождения нескольких собеседований.',
          image: '/img/graduate.svg'
        },
        {
          title: 'Прозрачные условия',
          content: 'Проработанное техническое задание, проектная и сопроводительноая документация - основа ясности и прозрачности условий для наших заказчиков.',
          image: '/img/arm.svg'
        },
        {
          title: 'Строгое соблюдение сроков',
          content: 'Соблюдение сроков сдачи проекта - признак профессионализма. Чаше всего, временные отрезки выбираются с небольшим запасом – чтобы проект был полностью готов к сдаче и специалисты успели завершить работы даже в случае форс-мажорной ситуации.',
          image: '/img/clock.svg'
        },
        {
          title: 'Опыт',
          content: 'Компания "ПРОЕКТ ОРИОН" создана специалистами с опытом процессиональной деятельности более 20 лет.',
          image: '/img/star.svg'
        },
        {
          title: 'Гарантия качества',
          content: 'Наша компания, в зависимости от договоренностей, предоставляет гарантию на свои услуги до 10 лет включительно.',
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
  .why_we .whyRow .text{
    width: auto;
    height: auto;
    margin: 0%;
  }
}

</style>

