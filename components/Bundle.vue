<template>
  <span class="bundleContent" @mousedown="startCount()" @mouseup="releaseCount()">{{ getText() }}</span>
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
      text: undefined
    }
  },
  mounted() {
    // this.$store.dispatch('translate/fetch')
  },
  methods: {
    startCount() {
      window.console.log('start')
      this.timer = window.setTimeout(this.displayPopup, 1000)
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
