<template>
  <div style="width: 100%; overflow: hidden">
    <BundleManage />
    <Header />
    <Main content="true"/>
    <About />
    <div class="divider contentBlock">&nbsp;</div>
    <Key />
    <div class="divider contentBlock">&nbsp;</div>
    <AboutPart />
    <div class="divider contentBlock">&nbsp;</div>
    <ServiceBegin />
    <Services />
    <Consultation />
    <Projects />
    <Advantage />
    <Partners />
    <Partners2 />
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
    await this.$store.dispatch('translate/fetch').then(() => {
      this.$nuxt.$emit('resized')
    })
  },
  methods: {
    ...mapActions({
      edit: 'translate/fetch'
    })
  }
}
</script>
