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
      &nbsp;
    </div>
    <div class="verticalCenter mainBannerContent" style="width: 100%;">
      <div :class="$props.content?'content':'content short'" v-if="showContent">
        <div class="mainContent" v-if="$props.content">
          <p class="h3"><Bundle :auth="true" :target="'ENG_COMPANY'"/></p>
          <br/>
          <p class="h4"><Bundle :target="'MAIN_P1'"/></p>
          <p class="h4"><Bundle :target="'MAIN_P2'"/></p>
        </div>
      </div>
      &nbsp;
      <img class="many_points" src="/img/points.svg" alt="Many points image" />
    </div>
    <div class="verticalRight">
      &nbsp;
    </div>
  </div>
</template>
<script>
export default {
  props: { content: true },
  components: {},
  mounted() {
    let viewedVideo = localStorage.getItem('viewedVideo')
    if (!viewedVideo) {
      // this.showVideo = false
      // this.onVideoFinished()
    }
    this.showVideo = true
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
      this.$nuxt.$emit('resized')
    }
  }
}
</script>

<style>
.mainBanner {
  width: 100%;
  display: flex;
  background: url("/img/background.jpg") no-repeat center center;
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
  margin: 0 40px 40px;
  overflow: hidden;
  bottom: 20px;
  color: #f1f1f1;
  padding-bottom: 40px;
  height: 450px;
  position: relative;
}

.mainBannerContent .content.short {
  height: 100px !important;
}

.mainBannerContent p {
  color: #fff;
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


.mainContent{
  margin: auto;
  position: absolute;
  bottom: 0px;
  width: auto;
  right: 10px;
}
@media (max-width: 768px) {
  .mainBanner{
    background: url("/img/background.jpg") no-repeat center center;
  }
  .mainBanner .verticalRight,
  .mainBanner .verticalLeft {
    display: none;
  }

  .mainBannerContent {
    min-height: 100vh;
  }

  .mainBannerContent .content {
    margin: auto 20px 50px;
    padding: 0;
    position: absolute;
    background: transparent;
    bottom: 10px;
    right: 10px;
    width: 100%;
  }

  .mainBannerContent p {
    width: auto;
    margin: auto;
  }

  .mainBannerContent .h1 {
    font-size: 160%;
  }

  .mainBannerContent .h3 {
    font-size: 1.2em;
  }
}
</style>
