<template>

  <div id="HeadMenu" class="contentBlock">
    <div class="verticalLeft">
      &nbsp;
    </div>
    <div class="verticalCenter">
      <div class="toggle" @click="toggleMenu">
        <img src="/img/menu.svg" style="height: 2em;" />
      </div>
      <div class="logoAndMenuPair">
        <a href="/" class="fullLogoLink">
          <div class="fullLogo">
            PROJECT ORION
            <br />
            <div class="sub">
              <Bundle :target="'QUALITY_MEANS'" />
            </div>
          </div>
        </a>
        <nav v-if="displayMenu == null || displayMenu === true">
          <div id="marker"></div>
          <ul>
            <li><a href="#about" @click="indicator($event)">
              <Bundle :target="'MENU_ABOUT'" />
            </a></li>
            <li><a href="/world" @click="indicator($event)">
              <Bundle :target="'MENU_SERVICES'" />
            </a></li>
            <li><a href="#proj" @click="indicator($event)">
              <Bundle :target="'MENU_PROJECTS'" />
            </a></li>
            <li><a href="#partner" @click="indicator($event)">
              <Bundle :target="'MENU_PARTNERS'" />
            </a></li>
            <li><a href="#contact" @click="indicator($event)">
              <Bundle :target="'MENU_CONTACTS'" />
            </a></li>
            <li>
              <a href="#cons" style="margin: 0;">
                <button class="redButton">
                  <Bundle :target="'CONTACT_TO_US'" />
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="verticalRight">
      &nbsp;
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  mounted: function() {
    window.addEventListener('scroll', this.getWindowWidth)
    this.marker = document.querySelector('#marker')
    this.item = document.querySelector('nav a')
    if (window.innerWidth < 768) {
      this.displayMenu = false
    }
  },
  data: () => ({
    displayMenu: null,
    marker: undefined,
    item: undefined,
    timer: undefined
  }),
  methods: {
    toggleMenu() {
      if (this.displayMenu) {
        this.displayMenu = false
      } else {
        this.displayMenu = true
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
  background: transparent;
  position: absolute;
  z-index: 10;
}

#HeadMenu nav {
  position: relative;
  width: auto;
  padding: 40px 0;
  transition: .5s;
  margin: 0 0 0 auto;
}

#HeadMenu nav ul {
  float: right;
  padding: 0;
  margin: 0 0 0 auto;
  transition: 0.5s;
  color: #fff;
  text-align: right !important;
}

#HeadMenu nav ul li {
  list-style: none;
  display: inline-block;
  transition: .5s;
  color: #fff;
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
  display: none;
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

#HeadMenu .toggle {
  width: 100%;
  padding: 10px 20px;
  background: #fff;
  text-align: right;
  box-sizing: border-box;
  color: #ff0000;
  display: none;
}

#HeadMenu .toggle img {
  height: 50px;
  color: #ff0000;
}

#HeadMenu nav .redButton,
#HeadMenu nav a {
  color: #fff;
}

#HeadMenu .fullLogoLink {
  color: #fff !important;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

#HeadMenu .fullLogo {
  background: url("/img/logo_watermark.png") no-repeat center 20px/contain;
  position: relative;
  text-align: center;
  width: 100%;
  font-size: 190%;
  padding-top: 90px;
  color: #fff !important;
  text-decoration: none;
  margin-bottom: 40px;
}

#HeadMenu .fullLogo .sub {
  font-size: 50%;
  text-align: right;
  font-style: italic;
  margin: 2px 7px;
}
.logoAndMenuPair{
  display: flex;
}
@media (max-width: 768px) {
  .logoAndMenuPair{
    display: block;
  }
  #HeadMenu {
    background: transparent;
    position: absolute;
    z-index: 10;
  }

  #HeadMenu .fullLogo{
    width: 300px;
  }

  #HeadMenu nav {
    padding: 0;
    background: rgba(0, 0, 0, 1);
    min-height: 70vh;
  }

  #HeadMenu .toggle {
    display: block;
    background: transparent;
  }

  #HeadMenu nav ul {
    width: 100%;
    color: #fff
  }

  #HeadMenu nav ul li {
    display: block;
    text-align: center;
    padding: 20px;
  }
}
</style>
