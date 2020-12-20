<template>
  <div class="mainBanner">
    <div class="verticalLeft">
      <div class="txt">Инжиниринговая компания</div>
    </div>
    <div class="verticalCenter mainBannerContent">
      <video width="100%" height="100%" autoplay muted id="myVideo">
        <source src="~/assets/video/logo.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <div class="content">

        <p class="h3">Инжиниринговая компания</p>
        <p class="h1 redText semibold">PROJECT ORION</p>
        <p class="h3 semibold">Качество имеет значение!</p>
        <br />
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

#myVideo {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
  background: #000;
}

.mainBannerContent {
  background: url("~assets/img/background.jpg") no-repeat fixed;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
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
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  padding: 40px;
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
  font-size: 3em;
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

  .mainBannerContent {
    background: url("~assets/img/background.jpg") no-repeat center center;
    min-height: auto;
  }

  .mainBannerContent .content {
    margin: 50px 20px;
  }

  .mainBannerContent p {
    width: auto;
    margin: auto;
  }

  .mainBannerContent .h1 {
    font-size: 2.5em;
  }

  .mainBannerContent .h3 {
    font-size: 1.2em;
  }
}
</style>
