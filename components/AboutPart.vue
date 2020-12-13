<template>
  <div class="AboutPartBlock">
    <div class="verticalLeft"></div>
    <div class="content">
      <p class="head">
        Предприятие «Проект Орион» предоставляет полный цикл инжиниринговых
        услуг
      </p>
      <p>
        Высококвалифицированные специалисты ИТР осуществляют профессиональную деятельность, благодаря которой
        компания
        производит работы в установленные сроки и бюджет.</p>
    </div>
    <div class="img"></div>
  </div>
</template>


export default {

}

<style>
.AboutPartBlock {
  display: flex;
  width: 100%;
}

.AboutPartBlock .img {
  width: 30%;
  min-height: 300px;
  background: transparent url("~assets/img/dd1.jpg") no-repeat center center/cover;
  margin-left: 10px;
}

.AboutPartBlock .content {
  width: 45%;
  padding: 0 10% 0 0;
}

.AboutPartBlock .content p {
  margin: 5% 0;
}

.AboutPartBlock .content ul {
  margin-left: 5%;
}

.AboutPartBlock .content .title {
  font-size: 80%;
}

.AboutPartBlock .content .head {
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .AboutPartBlock {
    display: block;
  }

  .AboutPartBlock .img,
  .AboutPartBlock .verticalCenter,
  .AboutPartBlock .content .head,
  .AboutPartBlock .content {
    width: 100%;
    padding: 2%;
    margin-left: auto;
  }

  .AboutPartBlock .content .redButton {
    width: 100%;
  }
}
</style>
