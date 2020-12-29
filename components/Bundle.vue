<template>
  <span class="bundleContent" :id="id" style="background: transparent" @click="toggleEditMode()">{{ getText() }}<div
    @click="displayPopup()" class="modify" v-if="showModifyButton">Edit</div></span>
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
      showModifyButton: false,
      id: this.$props.target,
      lang: 'def',
      text: undefined,
      clickTime: 0,
      cnt: 0
    }
  },
  mounted() {
    let target = window.document.querySelectorAll('#' + this.id)

    // this.$store.dispatch('translate/fetch')
  },
  beforeMount() {
    let exists = window.document.querySelectorAll('#' + this.id).length
    if (exists > 0) {
      this.id += '_' + (exists)
    }
    // this.$store.dispatch('translate/fetch')
  },
  methods: {
    toggleEditMode() {
      if (this.user) {
        this.showModifyButton = !this.showModifyButton
      } else if (this.$props.auth) {
        this.countToPopup()
      }
    },
    countToPopup() {
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
.bundleContent {
  position: relative;
}

.bundleContent .modify {
  background: #ccc;
  padding: 5px 8px;
  border-radius: 15px 15px 15px 0;
  font-size: xx-small;
  position: absolute;
  top: -20px;
  color: #000;
  left: 5px;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
}

.bundleContent .modify:hover {
  background: #333;
  color: #fff;
}
</style>
