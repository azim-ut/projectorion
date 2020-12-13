<template>
  <div class="ServiceBeginBlock">
    <div class="img"></div>
    <div class="verticalLeft"></div>
    <div class="verticalCenter">
      <div class="content">
        <div class="dotTitle">
          <img src="~/assets/img/point.png" /> УСЛУГИ
        </div>
        <p class="head">Компания предоставляет полный спектр услуг,
          связанных с инжинирингом</p>
        <p class="service_text1 h5 font-sm-weight-light font-weight-lighter align-baseline p-3">
          Позволяет заказчику получить все и сразу в одном месте! Мы работаем в отраслях промышленного, гражданского,
          инфраструктурного, транспортного и ряда других видов строительства; принимаем участие в градостроительстве и
          эксплуатации сооружений различного назначения.</p>
        <p class="service_text2 h5 font-sm-weight-light font-weight-lighter p-3"><span class="semibold">Наши услуги
          распространяются на государственные и коммерческие предприятия,</span> что позволяет проводить работы
          различного характера, а именно: оказывать профессиональную помощь в комплексном управлении проектов,
          организовывать и управлять генподрядом/стройкой, осуществлять исследования, проводить управленческое
          консультирование и многое другое.</p>
      </div>
    </div>
  </div>
</template>


export default {

}

<style>
.ServiceBeginBlock {
  display: flex;
  width: 100%;
  padding-top: 5%;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}

.ServiceBeginBlock .img {
  position: absolute;
  width: 50%;
  height: 30%;
  right: -20%;
  top: 5%;
  background: transparent url("~assets/img/g10.svg") no-repeat 0 0/cover;
}

.ServiceBeginBlock .content {
  width: 60%;
}

.ServiceBeginBlock .content p {
  margin: 5% 0;
}

.ServiceBeginBlock .content ul {
  margin-left: 5%;
}

.ServiceBeginBlock .content .title {
  font-size: 80%;
}

.ServiceBeginBlock .content .head {
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

@media only screen and (max-width: 440px) {
  .ServiceBeginBlock .content{
    width: 90%;
    margin: 8%;
  }
  .ServiceBeginBlock .img{
    top: 0%;
  }
}
</style>
