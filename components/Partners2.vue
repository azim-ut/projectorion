<template>
  <div class="Partners2Block contentBlock">
    <div class="verticalLeft">
      <div class="txt"><Bundle :target="'ENG_COMPANY'" /></div>
    </div>
    <div class="verticalCenter Partners2">
      <div class="content">
        <h2 class="semibold"><Bundle :target="'ENG_COMPANY'" /></h2>
        <h1 class="semibold redText"><Bundle :target="'COMPANY_NAME_EN'" /></h1>
        <p><Bundle :target="'PARTNER2_TEXT_1'" /></p>
        <p><Bundle :target="'PARTNER2_TEXT_2'" /></p>
        <div>
          <p><Bundle :target="'YOU_MAY_CONTACT_BY'" />
            <a href="#cons" style="color: red !important;"><Bundle :target="'BY_EMAIL'" /></a> <Bundle :target="'OR_BY_PHONE'" />:</p>
          <a class="d-sm-inline-block" href="tel:88005503193" style="color: red !important; font-size: 2.2em;"><Bundle :target="'PHONE'" /></a>
        </div>
      </div>
    </div>
    <div class="verticalRight">&nbsp;</div>
  </div>
</template>


<script>
export default {}
</script>


<style>
.Partners2Block {
  background: #fafafa;
  display: flex;
  width: 100%;
}

.Partners2 {
  padding: 5%;
  width: 100%;
  background: url("/img/backgroundlast.jpg") no-repeat;
  color: #fff;
}

.Partners2 h1 {
  font-size: 3.5em;
  margin: 20px 0;
}

.Partners2 p {
  margin: 10px 0;
}

.partners_inner img {
  position: relative;
  top: -5%;
  left: 90%;
  width: 10%;
}

.partners_content h1 {
  font-size: 4em;
}

.partners_content_inner p {
  width: 33%;
}

.partners_content_inner a {
  color: red !important;
  font-size: 2.2em;
  text-decoration: none;;
}


@media (max-width: 768px) {
  .Partners2 {
    height: auto;
  }

  .Partners2 p {
    margin: 10px 0;
  }
}

</style>
