<template>
  <div id="ModalLoginForm" class="modalContainer" @click="closeLoginForm($event)">
    <div class="modal" @click="$event.stopPropagation()">
      <input type="text" v-model="form.email" placeholder="Email">
      <input type="password" v-model="form.pwd" placeholder="Пароль">
      <div style="text-align: center; display: inline-table">
        <button class="greyButton" @click="closeLoginForm">Отмена</button>&nbsp;
        <button class="redButton" @click="submitLoginForm">Вход</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    user: 'auth/user'
  }),
  async fetch() {
    await this.$store.dispatch('auth/fetch')
  },
  data() {
    return {
      form: {
        email: undefined,
        pwd: undefined
      }
    }
  },
  mounted() {
    this.$nuxt.$on('showLoginForm', this.showLoginForm)
  },
  methods: {
    checkAccess() {
      window.console.log(this.access)
    },
    submitLoginForm() {
        this.login(this.form)
        this.closeLoginForm()
    },
    showLoginForm() {
      if (!this.user) {
        let modal = window.document.getElementById('ModalLoginForm')
        modal.classList.add('active')
      }
    },
    closeLoginForm(event) {
      this.form = {}
      let modal = window.document.getElementById('ModalLoginForm')
      modal.classList.remove('active')
      if (event) {
        event.stopPropagation()
      }
    },
    ...mapActions({
      login: 'auth/login',
      fetch: 'auth/fetch',
      logout: 'auth/logout',
    })
  }
}
</script>

<style>
#ModalLoginForm input {
  width: 100%;
  padding: 10px 5px;
  display: grid;
  margin-bottom: 10px;
}
</style>
