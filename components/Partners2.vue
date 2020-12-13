<template>
  <div class="Partners2Block">
    <div class="verticalLeft">
      <div class="txt">ИНЖИНИРИНГОВАЯ КОМПАНИЯ</div>
    </div>
    <div class="verticalCenter Partners2">
      <div class="content">
        <h2 class="semibold">ИНЖИНИРИНГОВАЯ КОМПАНИЯ</h2>
        <h1 class="semibold" style="color: red;">PROJECT ORION</h1>
        <p>
          Осуществляет инжиниринг: проектирование,
          строительство, монтаж и ряд других регламентированных услуг, характерных для предприятия полного цикла. В
          штате работают исключительно высококвалифицированные специалисты, имеющие большой стаж и высшую
          квалификацию.
        </p>
        <p>
          ПРОЕКТ ОРИОН стремится расширять географию
          сотрудничества. Наш опыт позволяет эффективно реализовывать проекты в регионах и федеральных центрах.
        </p>
        <div>
          <p>Вы можете связаться с нами по
            <a href="#cons" style="color: red !important;">электронной почте</a> или телефону:</p>
          <a class="d-sm-inline-block" href="tel:88005503193" style="color: red !important; font-size: 2.2em;">8 (800)
            550-31-93</a>
        </div>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>
</template>


<script>
export default {}
</script>


<style>
.Partners2Block {
  background: #fafafa;
  display: flex;
  width: 100%;
}

.Partners2 {
  padding: 5%;
  height: 450px;
  width: 100%;
  background: url("~assets/img/backgroundlast.jpg") no-repeat;
  color: #fff;
}

.Partners2 h1 {
  font-size: 3.5em;
  margin: 20px 0;
}

.Partners2 p {
  margin: 10px 0;
}

.partners_inner img {
  position: relative;
  top: -5%;
  left: 90%;
  width: 10%;
}

.partners_content h1 {
  font-size: 4em;
}

.partners_content_inner p {
  width: 33%;
}

.partners_content_inner a {
  color: red !important;
  font-size: 2.2em;
  text-decoration: none;;
}


@media (max-width: 768px) {
  .Partners2 {
    height: auto;
  }

  .Partners2 p {
    margin: 10px 0;
  }
}

</style>
