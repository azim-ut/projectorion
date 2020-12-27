<template>
  <div>
    <BundleManage />
    <Header />
    <Main :content="false"/>
    <div class="divider contentBlock">&nbsp;</div>
    <Nuxt />
    <div class="divider contentBlock">&nbsp;</div>
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
