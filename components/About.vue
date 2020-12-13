<template>
  <div class="aboutBlock" style="display: flex; width: 100%; z-index: 100;">
    <div class="verticalLeft">&nbsp;</div>
    <div class="verticalCenter About">
      <div class="content">
        <div class="dotTitle">
          <img src="~/assets/img/point.png" /> О НАС
        </div>

        <p class="head">
          ООО «ПРОЕКТ ОРИОН» – вертикально развивающаяся
          компания, которая специализируется на инжиниринговых услугах полного цикла
        </p>
        <p>Реализации различной сложности проектов, имеющих принадлежность к частым или
          государственным объектам. Уверенно войдя на рынок и заняв одну из лидирующих позиции в Москве и
          Санкт-Петербурге, наша организация уже смогла завоевать доверие заказчиков, а также сформировать большую
          клиентскую базу.
        </p>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>

</template>

export default {

}


<style>
.aboutBlock {
  display: inline-flex;
  margin-top: -50px;
}

.aboutBlock .verticalLeft {
  background: #fafafa;
}

.About .content {
  background: #fafafa;
  width: 70%;
  padding: 8% 10% 8% 0;
}

.About .content p{
  margin: 5% 0;
}

.About .content .title{
  font-size: 80%;
}

.About .content .head{
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .aboutBlock{
    margin: 0;
  }
  .About .content {
    width: auto;
    padding: 8%;
  }
}
</style>
