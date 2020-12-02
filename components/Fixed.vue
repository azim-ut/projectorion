<template>
    <div>
        <div class="arrow" :class="{'arrow_fixed': screenSize > 800}">
            <a href="#app"><b-img src="~assets/img/up-arrow.png"></b-img></a>
        </div>    

        <div @click="openForm()" :class="{'but_call_fix': isActive}" class="call">
            <b-img src="~assets/img/call.png"></b-img>
        </div>

         <div @click="openForm()" :class="{'but_call_x': isActive}" class="call call_x">
            <p class="font-weight-lighter">&#215;</p>
        </div>

        <div ref = "call_form" :class="{'call_fix': isActive}" class="call_form">
            <div class="call_form_inner">
                <p class="h3-sm h4-xs d-block font-weight-normal">Обратный звонок</p>
                <input class="d-block mt-4 mb-2" type="text" placeholder="+7(000)000 0000">
                <button class="d-block">Перезвонить</button>
                <p class="d-block font-weight-light mt-4 mb-0">Либо позвоните нам по номеру:</p>
                <p class="d-block font-weight-bold m-0">+7 (921) 943-91-72</p>
            </div>
        </div>



        <div class="nav_points">
            <a href="#app"><div ref="app_tool_tip" v-b-tooltip.hover.right="'Главная'"></div></a>
            <a href="#about"><div ref="about_tool_tip" v-b-tooltip.hover.right="'О нас'"></div></a>
            <a href="#opt"><div ref="service_tool_tip" v-b-tooltip.hover.right="'Услуги'"></div></a>
            <a href="#cons"><div ref="cons_tool_tip" v-b-tooltip.hover.right="'Консультация'"></div></a>
            <a href="#proj"><div ref="project_tool_tip" v-b-tooltip.hover.right="'Проекты'"></div></a>
            <a href="#adv"><div ref="adv_tool_tip" v-b-tooltip.hover.right="'Преимущества'"></div></a>
            <a href="#partner"><div ref="partner_tool_tip" v-b-tooltip.hover.right="'Партнеры'"></div></a>
            <a href="#contact"><div ref="contact_tool_tip" v-b-tooltip.hover.right="'Контакты'"></div></a>
        </div>
    </div>
</template>


<script>
export default{
    mounted: function() {
        window.addEventListener('scroll', this.getWindowWidth);
  },
  data: () => ({
    isDropped: false,
    screenSize: 0,
    isActive: false
  }),
  methods: {
    getWindowWidth() {
      this.screenSize= window.pageYOffset;
      
      if(window.pageYOffset < '720'){
            this.$refs.app_tool_tip.style.backgroundColor = 'red';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '720' && window.pageYOffset < '2570'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'red';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '2570' && window.pageYOffset < '4270'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'red';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '4270' && window.pageYOffset < '4920'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'red';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '4920' && window.pageYOffset < '5970'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'red';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '5970' && window.pageYOffset < '7220'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'red';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '7220' && window.pageYOffset < '7870'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'red';
            this.$refs.contact_tool_tip.style.backgroundColor = 'transparent';
      }
      else if(window.pageYOffset > '7870'){
            this.$refs.app_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.about_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.service_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.cons_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.project_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.adv_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.partner_tool_tip.style.backgroundColor = 'transparent';
            this.$refs.contact_tool_tip.style.backgroundColor = 'red';
      }

      
    }, 
    openForm(){
        this.isActive = !this.isActive
    }
  }
}
</script>


<style>
    .arrow{
        font-family: 'Gilroy',Arial,sans-serif;
        position:fixed;
        bottom: 4%;
        z-index: 999 ;
        left: 3%;
        display: none;
    }
    .arrow img{
        width: 12%;
    }
    .arrow_fixed{
        display: block;
    }
    .call{
        position:fixed;
        display: block;
        bottom: 5%;
        z-index: 999;
        left: 88%;
        background-color: rgb(229,39,41);
        padding: 13px;
        border-radius: 50px;
        height: 60px;
        width: 60px;
        transition: 0.5s all ease;
    }
    .call_x{
        opacity: 0;
        background-color: rgb(249,249,249);
        box-shadow: 0px 0px 30px 10px lightgrey;
        text-align: center;
        padding-top: 0px;
    }
    .call_x p{
        font-size: 2.5em;
    }
    .call img{
        width: 100%;
    }
    .call_form{
        opacity: 0;
        position: fixed;
        left: 64%;
        bottom: 14%;
        width: 360px;
        height: 320px;
        text-align: center;
        align-content: center;
        background-color: rgb(249,249,249);
        transition: 0.3s all ease; 
        border-radius: 5px;  
        box-shadow: 0px 0px 30px 10px lightgrey;
    }
    .call_form button{
        width: 100%;
        color: white;
        background-color: rgb(229,39,41);
        border: 0px;
        font-weight: 300;
        padding: 13px 30px;
    }
    .call_form input{
        width: 100%;
        color: black;
        border: 0px;
        font-weight: 300;
        padding: 13px 30px;
        outline: none;
    }
    .call_form input::placeholder{
        color:lightgrey;
    }
    .call_fix{
        opacity: 1;
    }
    .call_form_inner{
        padding: 30px 30px;
    }
    .but_call_fix{
        display: none;
    }
    .but_call_x{
        opacity: 1;
    }
    .nav_points{
        position: fixed;
        left: 97%;
        top: 35%;
    }
    .nav_points div{
        width: 7px;
        height: 7px;
        border: 1px solid red;
        border-radius: 10px;
        margin: 27px 0;
        transition: all 0.5s ease;
    }
    @media only screen and (max-width: 440px){
        .call{
            bottom: 5%;
            left: 80%;
        }
        .call_form{
            left: 25%;
            bottom: 15%;
            width: 260px;
            height: 300px;   
        }
        .nav_points{
            display: none;
        }
    }
</style>