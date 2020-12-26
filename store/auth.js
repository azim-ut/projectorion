import axios from 'axios'

export const state = () => ({
  user: null
})

export const getters = {
  user(state) {
    return state.user
  }
}

export const actions = {
  fetch(context) {
    if (!this.getters['translate/user']) {
      let res = undefined
      axios.get('/core/rest/user/check').then((res) => {
        context.commit('define', res.data.data)
      })
      return res
    }
  },
  login(context, obj) {
    let res = undefined
    axios.post('/core/rest/user/obj/login', obj).then((res) => {
      context.commit('define', res.data.data)
      res = res.data.data
    })
    return res
  },
  logout(context) {
    axios.get('/core/rest/user/logout').then((res) => {
      context.commit('define', null)
    })
  }
}

export const mutations = {
  define(state, user) {
    state.user = user
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
