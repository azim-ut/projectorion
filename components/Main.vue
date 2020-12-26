<template>
  <div class="mainBanner">
    <div :class="showVideo?'showVideo':'hideVideo'"
         @click="onVideoFinished"
         style="width: 100%; position: absolute; top: 0; right: 0; left: 0; bottom: 0; z-index: 10;">
      <small class="clickZone"><Bundle :target="'CLICK_TO_SKIP'"/></small>
      <video width="100%" height="100%" autoplay playsinline muted id="myVideo" @ended="onVideoFinished">
        <source src="/video/logo.webm" type="video/webm">
        <source src="/video/logo.mov" type="video/mov">
        <source src="/video/logo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="verticalLeft">
      <div class="txt"><Bundle :target="'ENG_COMPANY'"/></div>
    </div>
    <div class="verticalCenter mainBannerContent">
      <div class="content" v-if="showContent">

        <p class="h3"><Bundle :target="'ENG_COMPANY'"/></p>
        <p class="h1 redText semibold"><Bundle :target="'COMPANY_NAME_EN'" :auth="true"/></p>
        <p class="h3 semibold"><Bundle :target="'QUALITY_MEANS'"/></p>
        <br />
        <p class="h4"><Bundle :target="'MAIN_P1'"/></p>
        <p class="h4"><Bundle :target="'MAIN_P2'"/></p>
      </div>
    </div>
    <div class="verticalRight">
      &nbsp;
      <img class="many_points" src="/img/points.svg" alt="Many points image" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    let viewedVideo = localStorage.getItem('viewedVideo')
    if (!viewedVideo) {
      this.showVideo = false
      this.onVideoFinished()
    }
    if (this.showVideo) {
      const videoElement = document.getElementById('myVideo')
      const body = document.getElementsByTagName('body')[0]
      if (videoElement) {
        body.classList.add('video')
        if (videoElement.playing) {
          // video is already playing so do nothing
        } else {
          videoElement.play()
        }
      }
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
      const body = document.getElementsByTagName('body')[0]
      this.showVideo = false
      this.showContent = true
      body.classList.remove('video')
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

.showVideo .clickZone {
  font-size: small;
  position: absolute;
  right: calc(50% - 80px);
  bottom: 20px;
  color: #7c7c7c;
  text-decoration: underline;
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
