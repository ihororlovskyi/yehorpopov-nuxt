import firebase, { DB } from '@/services/fireinit.js'

export default {

  state: {
    loadedTeam: []
  },

  mutations: {
    setLoadedTeam (state, payload) {
      state.loadedTeam = payload
    }
  },

  actions: {
    loadTeam ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('team').once('value')
        .then((data) => {
          const content = data.val()
          commit('setLoadedTeam', content)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    }
  },

  getters: {
    loadedTeam (state) {
      return state.loadedTeam
    }
  }

}
