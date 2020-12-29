<template>
  <div style="width: 100%; overflow: hidden">
    <BundleManage />
    <Header />
    <Main :content="false"/>
    <Nuxt />
    <Consultation />
    <Contacts />

    <AuthManage />
    <!--    <fixed />-->
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  props: { target: undefined },
  async fetch() {
    await this.$store.dispatch('translate/fetch')
  },
  methods: {
    ...mapActions({
      edit: 'translate/fetch'
    })
  }
}
</script>
