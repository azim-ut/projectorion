<template>
  <div class="keyBlock contentBlock">
    <div class="verticalLeft">
      <div class="txt">
        <Bundle :target="'KEY_TITLE'" />
      </div>
    </div>
    <div class="verticalCenter">
      <div class="img"></div>
      <div class="content">
        <p class="head">
          <Bundle :target="'KEY_HEAD'" />
        </p>
        <p>
          <Bundle :target="'KEY_TEXT'" />
        </p>
        <div class="buttonFrame">
          <button squared class="redButton"><Bundle :target="'GET_CONSULTATION'"/></button>
        </div>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>
</template>

<script>

export default {
  components: {}
}
</script>

<style>
.keyBlock {
  display: flex;
  width: 100%;
}

.keyBlock .verticalCenter{
  display: inline-flex;
}

.keyBlock .img {
  width: 45%;
  min-height: 300px;
  background: transparent url("/img/worker.jpg") no-repeat center center/cover;
}

.keyBlock .content {
  width: 45%;
  padding: 0 0% 0 0;
  margin-left: 10%;
}

.keyBlock .content p {
  margin: 5% 0;
}

.keyBlock .content ul {
  margin-left: 5%;
}

.keyBlock .content .title {
  font-size: 80%;
}

.keyBlock .content .head {
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

.keyBlock .content .buttonFrame {
  padding-top: 20px;
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .keyBlock {
    display: block;
  }

  .keyBlock .img,
  .keyBlock .verticalCenter,
  .keyBlock .content .head,
  .keyBlock .content {
    width: auto;
    margin-left: auto;
  }

  .keyBlock .verticalCenter{
    display: block;
  }

  .keyBlock .content {
    padding: 8%;
  }

  .keyBlock .content .redButton {
    width: 100%;
  }

  .keyBlock .content .buttonFrame {
    text-align: center;
  }

}
</style>

