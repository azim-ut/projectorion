<template>

  <div id="HeadMenu">
    <div class="verticalLeft">
      &nbsp;
    </div>
    <div style="width: 100%;">
      <div class="toggle">
        <img src="~/assets/img/menu.svg" style="height: 2em;"/>
      </div>
      <nav>
        <div id="marker"></div>
        <img src="~/assets/img/logo.svg" class='logo' />
        <ul>
          <li><a href="#about" @click="indicator($event)">О нас</a></li>
          <li><a href="#opt" @click="indicator($event)">Услуги</a></li>
          <li><a href="#proj" @click="indicator($event)">Проекты</a></li>
          <li><a href="#partner" @click="indicator($event)">Партнеры</a></li>
          <li><a href="#contact" @click="indicator($event)">Контакты</a></li>
          <li>
            <button class="redButton">Связаться с нами</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>


export default {
  mounted: function() {
    window.addEventListener('scroll', this.getWindowWidth)
    this.marker = document.querySelector('#marker')
    this.item = document.querySelector('nav a')
  },
  data: () => ({
    marker: undefined,
    item: undefined
  }),
  methods: {
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
}

#HeadMenu nav {
  position: relative;
  display: flex;
  width: 100%;
  padding: 40px 20px;
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
  #HeadMenu nav .logo {
    display: none;
  }

  #HeadMenu .toggle{
    display: block;
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
