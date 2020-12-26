<template>
  <div class="ContactsBlock contentBlock" id="contact">
    <div class="Contacts">
      <div class="content">

        <div class="col">
          <div class="p-3">
            <p><Bundle :target="'NAVIGATION'"/></p>
            <ul>
              <li><Bundle :target="'MENU_ABOUT'"/></li>
              <li><Bundle :target="'MENU_SERVICES'"/></li>
              <li><Bundle :target="'MENU_PROJECTS'"/></li>
              <li>© 2021 <Bundle :target="'RIGHTS'"/></li>
            </ul>

          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p>РАЗДЕЛЫ</p>
            <ul>
              <li><Bundle :target="'CONSULTATION'"/></li>
              <li><Bundle :target="'ADVANTAGES'"/></li>
              <li><Bundle :target="'MENU_PARTNERS'"/></li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p><Bundle :target="'INFORMATION'"/></p>
            <ul>
              <li><Bundle :target="'CONTACTS'"/></li>
              <li><Bundle :target="'POLICY'"/></li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="p-3">
            <p><Bundle :target="'CALLBACK'"/></p>
            <div style="display: flex;">
              <input class="table_cont_inp" type="text" placeholder="Ваш телефон">
              <input class="table_cont_sub align-top pt-2" type="submit" value="">
            </div>
            <p class="table_cont_smaller font-weight-lighter mt-4 pt-2"><Bundle :target="'TITLE_2'"/></p>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>


<script>

export default {
  components: { }
}
</script>


<style>
.ContactsBlock {
  width: 100%;
  background: #f9f9f9;
}

.Contacts .content {
  display: flex;
  padding: 5% 0;
}

.Contacts .content .col {
  width: 25%;
}

.Contacts .content .col p {
  line-height: 40px;
}

.Contacts .content .col ul {
  font-size: .8em;
  line-height: 30px;
  list-style: none;
}

.Contacts .content .col ul {
}


.Contacts {
  width: 90%;
  margin-left: 10%;
}


.table_cont_smaller {
  font-size: 0.7em;
}

.table_cont_inp {
  margin: 0;
  width: 140px;
  border: 0px;
  padding: 10px 15px;
}

.table_cont_inp::placeholder {
}

.table_cont_sub {
  background: url("/img/sent.png") no-repeat rgb(229, 39, 41) center center;
  width: 50px;
  height: 40px;
  background-size: 50%;
  border: 0px;
}

@media (max-width: 768px) {

  .Contacts .content {
    display: block;
    padding: 5% 0;
  }

  .Contacts .content .col {
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
