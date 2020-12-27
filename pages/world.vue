<template>
  <div>
    <div class="ServiceBeginBlock contentBlock">
      <div class="img"></div>
      <div class="verticalLeft"></div>
      <div class="verticalCenter">
        <div class="content">
          <div class="dotTitle">
            <img src="/img/point.png" /> <Bundle :target="'MENU_SERVICES'" />
          </div>
          <br/>
          <Bundle :target="'WORLD_CONTENT'"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  layout: 'page'
}
</script>


