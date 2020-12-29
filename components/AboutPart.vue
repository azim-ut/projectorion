<template>
  <div class="AboutPartBlock contentBlock">
    <div class="verticalLeft"></div>
    <div class="verticalCenter">
      <div class="content" data-aos="fade-right">
        <p class="head"><Bundle :target="'ABOUT_PART_HEAD'" /></p>
        <p><Bundle :target="'ABOUT_PART_TEXT'" /></p>
      </div>
      <div class="img" data-aos="fade-left"></div>
    </div>
  </div>
</template>


<script>
export default {
  components: {}
}
</script>

<style>
.AboutPartBlock {
  display: flex;
  width: 100%;
}

.AboutPartBlock .img {
  width: 45%;
  min-height: 300px;
  background: transparent url("/img/dd1.jpg") no-repeat center center/cover;
  margin-left: 10px;
}

.AboutPartBlock .verticalCenter {
  display: inline-flex;
}
.AboutPartBlock .content {
  width: 45%;
  padding: 0 10% 0 0;
}

.AboutPartBlock .content p {
  margin: 5% 0;
}

.AboutPartBlock .content ul {
  margin-left: 5%;
}

.AboutPartBlock .content .title {
  font-size: 80%;
}

.AboutPartBlock .content .head {
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .AboutPartBlock {
    display: block;
  }
  .AboutPartBlock .verticalCenter {
    display: block;
  }

  .AboutPartBlock .img,
  .AboutPartBlock .verticalCenter,
  .AboutPartBlock .content .head,
  .AboutPartBlock .content {
    width: auto;
    margin-left: auto;
  }

  .AboutPartBlock .content {
    padding: 8%;
  }

  .AboutPartBlock .content .redButton {
    width: 100%;
  }
}
</style>
