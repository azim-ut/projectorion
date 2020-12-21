<template>
  <div class="keyBlock">
    <div class="verticalLeft">
      <div class="txt">Работаем "под ключ"</div>
    </div>
    <div class="img"></div>
    <div class="verticalCenter">
      <div class="content">
        <p class="head">Мы осуществляем все работы «под ключ»</p>
        <ul>
          <li>Помощь в составлении технического задания</li>
          <li>Составление проекта</li>
          <li>По необходимости - согласование с надзорными органами</li>
          <li>Реализация проекта</li>
          <li>Составление программы пуско-наладочных работ и их осуществление</li>
          <li>Сдача проекта надзорным органам (если необъодимо)</li>
        </ul>
        <p>
          Благодаря уникальным предложениям и принципиальному использованию
          проверенных технологий, наша команда выполняет даже самые неординарные и трудоемкие задачи, проявляя
          индивидуальный подход к каждому проекту.
        </p>
        <div class="buttonFrame">
          <button squared class="redButton">Получить консультацию</button>
        </div>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>
</template>

export default {

}

<style>
.keyBlock {
  display: flex;
  width: 100%;
}

.keyBlock .verticalCenter {
  width: 60%;
}


.keyBlock .img {
  width: 40%;
  min-height: 300px;
  background: transparent url("/img/worker.jpg") no-repeat center center/cover;
  margin-left: 10px;
}

.keyBlock .content {
  width: 90%;
  padding: 0 10% 0 0;
  margin-left: 10%;
}

.keyBlock .content p {
  margin: 5% 0;
}

.keyBlock .content ul {
  margin-left: 5%;
}

.keyBlock .content .title {
  font-size: 80%;
}

.keyBlock .content .head {
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}
.keyBlock .content .buttonFrame{
  padding-top: 20px;
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .keyBlock {
    display: block;
  }

  .keyBlock .img,
  .keyBlock .verticalCenter,
  .keyBlock .content .head,
  .keyBlock .content {
    width: auto;
    margin-left: auto;
  }

  .keyBlock .content {
    padding: 8%;
  }

  .keyBlock .content .redButton {
    width: 100%;
  }

  .keyBlock .content .buttonFrame{
    text-align: center;
  }

}
</style>

