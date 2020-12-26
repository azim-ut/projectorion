import axios from 'axios'

export const state = () => ({
  list: null,
  loading: false
})

export const getters = {
  list(state) {
    return state.list
  }
}

export const actions = {
  fetch(context) {
    if (!this.getters['translate/list']) {
      let res = undefined
      axios.get('/core/rest/translate/all').then((res) => {
        context.commit('define', res.data.data)
        res = res.data.data
      })
      return res
    }
  }
}

export const mutations = {
  define(state, list) {
    state.list = list
  },
  add(state, item) {
    state.list.push({
      item
    })
  },
  edit(state, item) {
    let obj = {
      code: item.code,
      value: item.text
    }
    axios.post('/core/rest/translate/code/default', obj).then((res) => {
      state.list = res.data.data
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
