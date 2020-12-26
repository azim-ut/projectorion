<template>
  <div id="BundleManageForm" class="modalContainer" @click="closeEditForm($event)">
    <div class="modal" @click="$event.stopPropagation()">
      <button class="redButton" style="width: 100%;" @click="submitEditForm">Сохранить</button>
      <textarea v-if="target" v-model="target.text"></textarea>
      <div style="text-align: center; display: block">
        <button class="greyButton" style="width: 100%" @click="closeEditForm">Отмена</button>&nbsp;
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    get: 'translate/list',
    user: 'auth/user'
  }),
  data() {
    return {
      target: undefined
    }
  },
  mounted() {
    this.$nuxt.$on('showBundleManage', this.openEditForm)
  },
  methods: {
    checkAccess() {
      if (!this.access) {
        this.$nuxt.$emit('showLoginForm')
      }
      return true
    },
    submitEditForm() {
      if (this.checkAccess()) {
        this.$store.commit('translate/edit', this.target)
        this.closeEditForm()
      }
    },
    openEditForm(target) {
      if (this.checkAccess()) {
        this.target = target
        let modal = window.document.getElementById('BundleManageForm')
        modal.classList.add('active')
      }
    },
    closeEditForm(event) {
      this.target = undefined
      let modal = window.document.getElementById('BundleManageForm')
      modal.classList.remove('active')
      if (event) {
        event.stopPropagation()
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
