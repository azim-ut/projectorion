<template>
  <div class="AboutPartBlock contentBlock">
    <div class="verticalLeft"></div>
    <div class="verticalCenter">
      <div class="content">
        <p class="head"><Bundle :target="'ABOUT_PART_HEAD'" /></p>
        <p><Bundle :target="'ABOUT_PART_TEXT'" /></p>
      </div>
    </div>
    <div class="img"></div>
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
  width: 40%;
  min-height: 300px;
  background: transparent url("/img/dd1.jpg") no-repeat center center/cover;
  margin-left: 10px;
}

.AboutPartBlock .verticalCenter {
  width: 40%;
}

.AboutPartBlock .content {
  width: auto;
  padding: 0 5% 0 0;
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
