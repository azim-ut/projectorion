<template>
  <div class="mainBanner">
    <div class="verticalLeft">
      <div class="txt">Инжиниринговая компания</div>
    </div>
    <div class="verticalCenter mainBannerContent">
      <div class="content">
        <p class="h3">Инжиниринговая компания</p>
        <p class="h1 redText semibold">PROJECT ORION</p>
        <p class="h3 bold">Качество имеет значение!</p>
        <p class="h4">Реализуем инжиниринговые проекты любой
          сложности и объемов
          - от планирования места под размещение объектов до проектирования и сдачи в эксплуатацию.
        </p>
        <p class="h4">
          Открытое, прозрачное сотрудничество, комплексный подход к решению поставленных задач.
        </p>
      </div>
    </div>
    <div class="verticalRight">
      &nbsp;
      <img class="many_points" src="~assets/img/points.svg" alt="Many points image" />
    </div>
  </div>
</template>

export default {

}


<style>
.mainBanner {
  width: 100%;
  display: flex;
}

.mainBannerContent {
  background: url("~assets/img/background.jpg") no-repeat fixed;
  min-height: 80vh;
}

.many_points {
  position: absolute;
  right: 0px;
  bottom: -140px;
  width: 200px;
}

.mainBannerContent .content {
  margin: 100px;
  overflow: hidden;
}

.mainBannerContent p {
  width: 60%;
  color: #fff;
  margin: 10px 0;
}

.mainBannerContent .h2 {
  font-size: 2em;
}

.mainBannerContent .h1 {
  font-size: 3.5em;
  padding-top: 20px;
  padding-bottom: 20px;
}

.mainBannerContent .h3 {
  font-size: 1.5em;
}

.mainBannerContent .h4 {
  font-size: 1em;
}

.verticalLeft .txt {
  position: absolute;
  right: calc(-50%);
  bottom: calc(+30%);
  white-space: nowrap;
  transform: rotate(270deg);
  letter-spacing: 2px;
  font-size: .8em;
}

@media (max-width: 768px) {
  .mainBanner .verticalRight,
  .mainBanner .verticalLeft {
    display: none;
  }

  .mainBannerContent .content {
    margin: 50px 20px;
  }

  .mainBannerContent p {
    width: 80%;
    margin: auto;
  }
}
</style>
