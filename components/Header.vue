<template>
    <div id="app" ref="app">
    <b-container fluid class="cont">
        <b-row>
            <b-col class="col-8 col-sm-2  col-md-2"><b-img class="my-4 ml-0" src="~/assets/img/logo.svg" height="60%" alt='logo'></b-img></b-col>
            <b-col class="col-4 col-sm-1 col-md-1">
                <div ref="but" id="but"  @click="dropIt()" class="menu-icon my-5 ml-4 pl-3">
                    <span ref="line1" id="line1" class="line line1"></span>
                    <span ref="line2" id="line2" class="line line2"></span>
                    <span ref="line3" id="line3" class="line line3"></span>
                </div>
            </b-col>
            <b-col id="drop_list" class="col-12 col-md-9 col-sm-10">
                <b-nav class="mob_header py-5 m-0  p-sm-0 p-md-2 bd-highlight" ref="myDiv" id="myDiv">
                    <b-nav-item href="#about" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 pt-sm-4 pb-sm-0 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">О нас</p></b-nav-item>
                    <b-nav-item href="#opt" @click="dropForm()" class="hoverAble p-0 m-0  px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Услуги</p></b-nav-item>
                    <b-nav-item href="#proj" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Проекты</p></b-nav-item>
                    <b-nav-item href="#partner" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Партнеры</p></b-nav-item>
                    <b-nav-item href="#contact" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Контакты</p></b-nav-item>
                    <b-nav-item class="px-2 py-2 mt-2 flex-fill"><b-button squared class="hoverBut px-4 py-2 font-weight-normal">Связаться с нами</b-button></b-nav-item>
                </b-nav>
   
            </b-col>
           
        </b-row>
    </b-container>

    <b-container fluid class="cont_2" :class="{'cont_fixed': screenSize > 100}">
        <b-row>
            <b-col class="col-9 col-sm-2  col-md-2"><b-img class="my-4 ml-0" src="~/assets/img/logo.svg" height="60%" alt='logo'></b-img></b-col>
            <b-col class="col-2 col-sm-1 col-md-1">
                <div class="menu-icon my-5 ml-4 pl-3">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
            </b-col>
            <b-col id="drop_list" class="col-12 col-md-9 col-sm-10">
                <b-nav class="mob_header py-5 m-0  p-sm-0 p-md-2 bd-highlight">
                    <b-nav-item href="#about" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 pt-sm-4 pb-sm-0 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">О нас</p></b-nav-item>
                    <b-nav-item href="#opt" @click="dropForm()" class="hoverAble p-0 m-0  px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Услуги</p></b-nav-item>
                    <b-nav-item href="#proj" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Проекты</p></b-nav-item>
                    <b-nav-item href="#partner" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Партнеры</p></b-nav-item>
                    <b-nav-item href="#contact" @click="dropForm()" class="hoverAble p-0 m-0 px-sm-1 py-sm-4 mt-sm-1 px-md-2 flex-fill"><p class="text-dark font-weight-thin">Контакты</p></b-nav-item>
                    <b-nav-item class="px-2 py-2 mt-2 flex-fill"><b-button squared class="hoverBut px-4 py-2 font-weight-normal">Связаться с нами</b-button></b-nav-item>
                </b-nav>
   
            </b-col>
           
        </b-row>
    </b-container>


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
  }),
  methods: {
    dropIt() {
        if ( this.$refs.myDiv.style.display == 'block') {
            this.$refs.myDiv.style.display = 'none'
            this.$refs.line1.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)'
            this.$refs.line2.style.transform = 'scaleY(1)'
            this.$refs.line3.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)'
        }
        else{
            this.$refs.myDiv.style.display = 'block'
            this.$refs.line1.style.transform = ' translateY(7px) translateX(0px) rotate(45deg)'
            this.$refs.line2.style.transform = 'scaleY(0)'
            this.$refs.line3.style.transform = 'translateY(-8px) translateX(0px) rotate(-45deg)'
          
        }
    },
    dropForm(){
        if (screen.width < 440){
            this.$refs.myDiv.style.display = 'none'
            this.$refs.line1.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)'
            this.$refs.line2.style.transform = 'scaleY(1)'
            this.$refs.line3.style.transform = 'translateY(0px) translateX(0px) rotate(0deg)'
        }
    },
    getWindowWidth() {
      this.screenSize= window.pageYOffset;
    }
  }
}
</script>




<style>
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
html {
  scroll-behavior: smooth;
}

    .hoverAble { color: #666 !important;display:inline-block; margin:0; padding: 0; font-size: 0.9em}
    .hoverAble:after {
        display:block;
        content: '';
        border-bottom: solid 2px red;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    .hoverAble:hover:after{  transform-origin:  0% 100%; transform: scaleX(0.8); }
    .hoverBut{border: 2px solid red; color: black; background-color: white;transition: 0.3s all ease; }
    .hoverBut:hover{background-color: red; color: white; border: 2px solid red;}
    .cont, .cont_2{
        font-family: 'Gilroy',Arial,sans-serif;
        height: 150px;
        margin-left: 10%;
        position: static;
        top: 0px;
        width: 88%;
        margin-right: 2%;
        z-index: 5;
        background-color: white;
        -webkit-transition: all 0.6s ease-out;
        -moz-transition: all 0.6s ease-out;
        -o-transition: all 0.6s ease-out;
        -ms-transition: all 0.6s ease-out;
        transition: all 0.6s ease-out;
    }
    .cont_2{
        display: none;
        z-index: 5;
        position: absolute;
        opacity: 0;
        transition: all 0.5s ease;
    }
    .cont_fixed{
        margin-left: 0;
        padding-left: 10%;
        box-shadow: 0 2px 5px lightgrey;
        width: 100%;
        display: block;
        position: fixed;
        opacity: 1;
        animation: mymove 0.9s;
    }
    @keyframes mymove {
        from {top: -70px;}
        to {top: 0px;}    
    }
    .mob_button{
        display: none;
    }
    
    .menu-icon{
        display: none;
    }
    .menu-icon > .line {
        width: 27px;
        background-color: #292929;
        transition: 0.3s all ease;
        height: 3px;
        display: block;
    }
    .menu-icon > .line + .line {
        margin-top: 4px;
    }


    @keyframes drop-down {
        from {
            transform: translate(0,-500px);
        }
        to {
            transform: translate(0,0px)
        }
    }


    
    @media only screen and (max-width: 440px){
        .cont{
            position: fixed;
            height: 120px;
        }
        .mob_header{
            display: none;
            width: 100%;
            position: absolute;
            left:0;
            margin:0;
            padding:0;
            z-index: 1;
            background-color: white;
            text-align:center;
            animation: drop-down 0.2s;
   
        }
        .menu-icon{
            display: block;
        }
        .cont{
            margin-left: 0%;
            width: 100%;
            margin-right: 0%;
        }
        .hoverAble{
            width: 100%;
            line-height: 10px;
        }
        .hoverBut{
            display: none;
        }
        .cont_fixed{
            display: none;
        }
        .hoverAble:after {
            border-bottom: solid 0px red;  
        }

    }
</style>
