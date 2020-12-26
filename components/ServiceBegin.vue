<template>
  <div class="ServiceBeginBlock contentBlock">
    <div class="img"></div>
    <div class="verticalLeft"></div>
    <div class="verticalCenter">
      <div class="content">
        <div class="dotTitle">
          <img src="/img/point.png" /> <Bundle :target="'MENU_SERVICES'" />
        </div>
        <p class="head"><Bundle :target="'SERVICES_TITLE'" /></p>
        <p class="service_text1 h5 font-sm-weight-light font-weight-lighter align-baseline p-3"><Bundle :target="'SERVICES_TEXT'" /></p>
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
  background: transparent url("/img/g10.svg") no-repeat 0 0/cover;
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
