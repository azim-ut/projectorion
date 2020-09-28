<template>
  <div>
    <b-button class="menuToggler" variant="light" v-b-toggle.sidebar-backdrop>
      <font-awesome-icon :icon="['fas', 'bars']" size="2x"></font-awesome-icon>
    </b-button>
    <!-- Start Navbar Area -->

    <b-sidebar
      id="sidebar-backdrop"
      title="Project Orion"
      backdrop
    >
      <div class="px-3 py-2">
        <b-form-group label-for="backdrop-variant">

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
        </b-form-group>
      </div>
    </b-sidebar>
    <!-- End Navbar Area -->

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
.menuToggler{display: none; border: none !important; color: #ff2d2d !important;}
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

@media screen and (max-width: 800px) {
  .navbar-area{display: none;}
  .menuToggler{
    display: block;
    background: #f0f0f0 !important;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    z-index: 1000;
  }
}
</style>

