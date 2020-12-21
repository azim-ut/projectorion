<template>
  <div class="mainBanner">
    <div :class="showVideo?'':'hideVideo'"
         style="width: 100%; position: absolute; top: 0; right: 0; left: 0; bottom: 0; z-index: 10;">
      <video width="100%" height="100%" autoplay muted id="myVideo" @ended="onVideoFinished">
        <source src="/video/logo.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="verticalLeft">
      <div class="txt">Инжиниринговая компания</div>
    </div>
    <div class="verticalCenter mainBannerContent">
      <div class="content" v-if="showContent">

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
      <img class="many_points" src="/img/points.svg" alt="Many points image" />
    </div>
  </div>
</template>
<script>


function myHandler(e) {
  // What you want to do after the event
}

export default {
  mounted() {
    if (this.showVideo) {

    }
  },
  data() {
    return {
      showVideo: true,
      showContent: false
    }
  },
  methods: {
    onVideoFinished() {
      this.showVideo = false
      this.showContent = true
    }
  }
}
</script>

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
  opacity: 1;
}

.hideVideo {
  opacity: 0;
  transition: .5s;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: relative;
  z-index: -10 !important;
}

.hideVideo video {
  height: 0;
  min-height: 0;
}

.mainBannerContent {
  background: url("/img/background.jpg") no-repeat fixed;
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
  bottom: 100px;
  background: rgba(0, 0, 0, .5);
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
  font-size: 2.6em;
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
    background: url("/img/background.jpg") no-repeat center center;
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
