<template>
  <div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
      <div class="comero-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <nuxt-link class="navbar-brand" to="/">
              <img src="../assets/img/orion_logo.png" alt="logo" id="MenuBarLogo">
            </nuxt-link>

            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
              <ul class="navbar-nav">

                <li class="nav-item">
                  <nuxt-link to="/#" class="nav-link">О компании</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/#" class="nav-link">Клиенты</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/#" class="nav-link">Галлерея</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/#" class="nav-link">Партнеры</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/#" class="nav-link">Контакты</nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </nav>
        </div>
      </div>
    </div>


    <SidebarPanel></SidebarPanel>
  </div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel'
import { mutations } from '../utils/sidebar-util'

export default {
  components: {
    SidebarPanel
  },
  data() {
    return {
      isSticky: false
    }
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY
      if (scrollPos >= 100) {
        that.isSticky = true
      } else {
        that.isSticky = false
      }
    })
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
}
</script>
<style>
.navbar-area.is-sticky .comero-nav {
  position: relative;
  color: #fff;
  font-weight: normal;
}

.navbar-area .comero-nav {
  background-color: transparent;
}

.navbar-area .comero-nav a {
  color: #fff;
}

.navbar-area.is-sticky .comero-nav a {
  color: #333;
}
</style>
