<template>
  <span class="bundleContent" style="background: transparent" @click="clickCount()">{{ getText() }}</span>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {},
  name: 'Bundle',
  props: { target: undefined, auth: false },
  computed: mapGetters({
    get: 'translate/get',
    user: 'auth/user'
  }),
  data() {
    return {
      lang: 'def',
      text: undefined,
      clickTime: 0,
      cnt: 0
    }
  },
  mounted() {
    window.getSelection()
    // this.$store.dispatch('translate/fetch')
  },
  methods: {
    clickCount() {
      let newDate = new Date().getTime()
      if (this.clickTime === 0) {
        this.clickTime = newDate
      } else {
        if (newDate - this.clickTime < 1000) {
          this.clickTime = newDate
          this.cnt++
        } else {
          this.cnt = 0
        }
      }
      window.console.log(this.cnt)
      if (this.cnt > 2) {
        this.displayPopup()
        this.clickTime = 0
        this.cnt = 0
      }
    },
    releaseCount() {
      window.console.log('release')
      window.clearTimeout(this.timer)
      this.timer = undefined
    },
    displayPopup() {
      if (this.user) {
        this.$nuxt.$emit('showBundleManage', {
          code: this.$props.target,
          lang: this.lang,
          text: this.text
        })
      } else if (this.$props.auth) {
        this.$nuxt.$emit('showLoginForm')
      }
    },
    getText() {
      let searched = false
      if (this.$store.state.translate.list) {
        this.$store.state.translate.list.forEach(row => {
          searched = true
          if (row.code === this.$props.target) {
            this.text = row[this.lang]
          }
        })
      }
      if (searched) {
        return this.text ? this.text : this.target
      } else {
        return this.text
      }
    },
    ...mapActions({
      edit: 'translate/fetch'
    }),
    ...mapMutations({
      edit: 'translate/edit'
    })
  }
}
</script>

<style>

</style>
