<template>
  <div class="aboutBlock contentBlock" style="display: flex; width: 100%; z-index: 100;">
    <div class="verticalLeft">&nbsp;</div>
    <div class="verticalCenter About">
      <div class="content">
        <div class="dotTitle">
          <img src="/img/point.png" /> <Bundle :target="'MENU_ABOUT'"/>
        </div>
        <p class="head"><Bundle :target="'ABOUT_HEAD'"/></p>
        <p><Article :target="'ABOUT_TEXT'"/></p>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>

</template>

export default {

}


<style>
.aboutBlock {
  display: inline-flex;
  margin-top: -50px;
}

.aboutBlock .verticalLeft {
  background: #fafafa;
}

.About .content {
  background: #fafafa;
  max-width: 500px;
  padding: 4% 10% 4% 0;
}

.About .content p{
  margin: 5% 0;
}

.About .content .title{
  font-size: 80%;
}

.About .content .head{
  font-size: 150%;
  color: #040606;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .aboutBlock{
    margin: 0;
  }
  .About .content {
    width: auto;
    padding: 8%;
  }
}
</style>
