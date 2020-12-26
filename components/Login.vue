<template>
  <span @mousedown="startCount()" @mouseup="releaseCount()">{{ text() }}</span>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {},
  props: { target: undefined },
  computed: mapGetters({
    get: 'translate/get'
  }),
  data() {
    return {
      lang: 'ru_RU'
    }
  },
  mounted() {
    this.$store.dispatch('translate/fetch')
  },
  methods: {
    startCount() {
      window.console.log('start')
      this.timer = window.setTimeout(this.displayPopup, 2000)
    },
    releaseCount() {
      window.console.log('release')
      window.clearTimeout(this.timer)
      this.timer = undefined
    },
    displayPopup() {
      window.console.log('popup')
    },
    text(){
      let res = undefined
      if(this.$store.state.translate.list){
        this.$store.state.translate.list.forEach(row => {
          if(row.code === this.$props.target){
            res = row[this.lang]
          }
        })
      }
      return res;
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
