<template>
  <div class="ServiceBlock">
    <div class="verticalLeft"></div>
    <div class="content">
      <div class="box">
        <div class="iconBlock">
          <div class="icon"><img src="~/assets/img/calc.svg" /></div>
        </div>
        <div class="text">
          <h3>Проектирование</h3>
          <p>
            Определяется архитектура, компоненты и другие аспекты. Создаются
            сложные
            системы, опираясь на которые будет проводиться соответствующая деятельность. В зависимости от отрасли,
            выделяют проектирование: инженерных систем, архитектурно-строительное, ландшафтное, интерьера,
            градостроительное и т. п.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="iconBlock">
          <div class="icon"><img src="~/assets/img/person.svg" /></div>
        </div>
        <div class="text">
          <h3>Производство оборудования</h3>
          <p>
            Создается высокоточное техническое оснащение, полностью
            соответствующее
            современным требованиям. Возможно проектирование и изготовление техники с интегрированными
            дополнительными расширениями, что обсуждается в процессе формирования заказа.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="iconBlock">
          <div class="icon"><img src="~/assets/img/star.svg" /></div>
        </div>
        <div class="text">
          <h3>Организация процесса получения технических условий и
            дополнительных
            мощностей</h3>
          <p>
            Внедряется в работу по желанию клиента, представляет собой целый
            спектр
            услуг, для реализации которых подключаются сторонние специалисты компании или эксперты из других
            организаций.
          </p>
        </div>
      </div>
      <div class="box">
        <div class="iconBlock">
          <div class="icon"><img src="~/assets/img/todolist.svg" /></div>
        </div>
        <div class="text">
          <h3>Согласование с надзорными оргнами</h3>
          <p>
            Подготавливаем бумаги на утверждение строений, архитектурных
            сооружений
            любого типа и т.п. Оформляем всё строго по требованиям госорганов, позволяя исключить задержки или
            появление других трудностей в ходе работы.
          </p>
        </div>
      </div>
      <div class="box wild">
        <div class="iconBlock">
          <div class="icon"><img src="~/assets/img/tools.svg" /></div>
        </div>
        <div class="text">
          <h3>Строительно-монтажные (СМР) и пусконаладочные работы (ПНР)</h3>
          <p>
            Возводим здания и сооружения, монтируем технологические
            системы и оборудование, проводим подготовительные работы перед сдачей объекта в эксплуатацию. Следуем
            регламентам СНиП РФ, регулирующим процесс строительства и осуществления сторонних работ.
          </p>
        </div>
      </div>
    </div>
    <div class="verticalLeft"></div>
  </div>
</template>


export default {}


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
  display: flex;
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
}

.ServiceBlock .content .box .icon {
  box-shadow: 0 0 0 0 #23e629;
  background: #23e629;
}

.ServiceBlock .content .box:hover .icon {
  box-shadow: 0 0 0 600px #23e629;
  background: #23e629;
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
  float: left;
  height: 400px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.ServiceBlock .content .box.wild{
  width: 98%; display: flex;
  padding: 2.5%;
}

.ServiceBlock .content .box.wild{
  height: 200px;
}

.ServiceBlock .content .box.wild:hover .icon,
.ServiceBlock .content .box.wild .icon{
  box-shadow: none;
  background: transparent;
}
.ServiceBlock .content .box.wild .icon{
  width: 150px; height: 150px;
}
.ServiceBlock .content .box.wild .icon img{
  width: 100px;
  height: 100px;
}

.ServiceBlock .content .box .text{
  position: relative;
  z-index: 1;
  transition: 0.5s;
}

.ServiceBlock .content h3 {
  margin: 2.5% 0;
}

@media (max-width: 768px) {
  .ServiceBlock .content .box {
    overflow: hidden;
    width: 95%;
    margin: 3% 2.5% 0 2.5%;
    padding: 5%;
    background: #fff;
    float: left;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .ServiceBlock .content .box.wild{
    height: auto;
  }
}
</style>
