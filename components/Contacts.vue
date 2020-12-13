<template>
  <div class="ContactsBlock" id="contact">
    <div class="Contacts">
      <div class="content">

        <div class="col">
          <div class="p-3">
            <p>НАВИГАЦИЯ</p>
            <ul>
              <li>О нас</li>
              <li>Услуги</li>
              <li>Проекты</li>
              <li>© 2020 Все права защищены</li>
            </ul>

          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p>РАЗДЕЛЫ</p>
            <ul>
              <li>Консультация</li>
              <li>Преимущества</li>
              <li>Партнеры</li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p>ИНФОРМАЦИЯ</p>
            <ul>
              <li>Контакты</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p>ОБРАТНЫЙ ЗВОНОК</p>
            <div style="display: flex;">
              <input class="table_cont_inp" type="text" placeholder="Ваш телефон">
              <input class="table_cont_sub align-top pt-2" type="submit" value="">
            </div>
            <p class="table_cont_smaller font-weight-lighter mt-4 pt-2">Инжиниринговая компания PROJECT ORION</p>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
export default {}
</script>


<style>
.ContactsBlock{
  width: 100%;
  background: #f9f9f9;
}

.Contacts .content {
  display: flex;
  padding: 5% 0;
}

.Contacts .content .col {
  width: 25%;
}

.Contacts .content .col p{
  line-height: 40px;
}

.Contacts .content .col ul{
  font-size: .8em;
  line-height: 30px;
  list-style: none;
}

.Contacts .content .col ul{
}


.Contacts {
  width: 90%;
  margin-left: 10%;
}


.table_cont_smaller {
  font-size: 0.7em;
}

.table_cont_inp {
  margin: 0;
  width: 140px;
  border: 0px;
  padding: 10px 15px;
}

.table_cont_inp::placeholder {
}

.table_cont_sub {
  background: url("~assets/img/sent.png") no-repeat rgb(229, 39, 41);
  width: 50px;
  height: 40px;
  background-size: 50%;
  background-position: center;
  border: 0px;
}

@media only screen and (max-width: 440px) {
  .Contacts {
    width: 90%;
    margin-left: 00%;
  }

  .table_cont {
    width: 100%;
  }

  .table_cont_small {
    width: 100%;
  }

  .table_cont_inp {
    width: 100%;
  }

  .table_cont_sub {
    width: 100%;
    background-size: 10%;
    background-position: 5%;
  }

}
</style>
