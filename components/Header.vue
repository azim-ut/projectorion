<template>

  <div id="HeadMenu">
    <div class="verticalLeft">
      &nbsp;
    </div>
    <div class="verticalCenter">
      <div class="toggle" @click="toggleMenu">
        <img src="~/assets/img/menu.svg" style="height: 2em;"/>
      </div>
      <nav v-if="displayMenu == null || displayMenu === true">
        <div id="marker"></div>
        <img src="~/assets/img/logo.svg" class='logo' />
        <ul>
          <li><a href="#about" @click="indicator($event)">О нас</a></li>
          <li><a href="#opt" @click="indicator($event)">Услуги</a></li>
          <li><a href="#proj" @click="indicator($event)">Проекты</a></li>
          <li><a href="#partner" @click="indicator($event)">Партнеры</a></li>
          <li><a href="#contact" @click="indicator($event)">Контакты</a></li>
          <li>
            <a href="#cons" style="margin: 0;">
            <button class="redButton">Связаться с нами</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="verticalRight">
      &nbsp;
    </div>
  </div>
</template>

<script>


export default {
  mounted: function() {
    window.addEventListener('scroll', this.getWindowWidth)
    this.marker = document.querySelector('#marker')
    this.item = document.querySelector('nav a')
    if(window.innerWidth < 768){
      this.displayMenu = false
    }
  },
  data: () => ({
    displayMenu:null,
    marker: undefined,
    item: undefined
  }),
  methods: {
    toggleMenu(){
      if(this.displayMenu){
        this.displayMenu = false;
      }else {
        this.displayMenu = true;
      }
    },
    indicator(e) {
      this.marker.style.top = (e.target.offsetTop + e.target.offsetHeight) + 30 + 'px'
      this.marker.style.left = e.target.offsetLeft + 'px'
      this.marker.style.width = e.target.offsetWidth + 'px'
    }
  }
}
</script>


<style>

#HeadMenu {
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: flex-end;
  overflow: hidden;
  transition: .5s;
}

#HeadMenu nav {
  position: relative;
  display: flex;
  width: 100%;
  padding: 40px 0;
  transition: .5s;
}

#HeadMenu nav ul{
  float: right; padding: 0; margin: 0 0 0 auto;
  transition: .5s;
}

#HeadMenu nav ul li{
  list-style: none; display: inline-block;
  transition: .5s;
}

#HeadMenu nav a {
  position: relative;
  margin: 0 20px;
  font-size: .8em;
  color: #000;
  text-decoration: none;
}

#HeadMenu nav .logo {
  height: 60px;
}

#HeadMenu nav #marker {
  position: absolute;
  left: 0;
  height: 4px;
  width: 0%;
  background: #ff0000;
  bottom: -8px;
  transition: .5s;
  border-radius: 4px;
  margin-top: -20px;
}

#HeadMenu .toggle{
  width: 100%;
  padding: 10px 20px;
  background: #fff ;
  text-align: right;
  box-sizing: border-box;
  color: #ff0000;
  display: none;
}
#HeadMenu .toggle img{
  height: 50px;
  color: #ff0000;
}

@media (max-width: 768px) {
  #HeadMenu nav{
    padding: 0;
  }

  #HeadMenu nav .logo {
    display: none;
  }

  #HeadMenu .toggle{
    display: block;
    background: #fff url("~assets/img/logo_only.jpeg") no-repeat left center/contain;
  }

  #HeadMenu nav ul{
    width: 100%; background: #fff;
  }

  #HeadMenu nav ul li{
    display: block; text-align: center;
    padding: 20px;
  }
}
</style>
