export const state = () => ({
  careers: [],
  career: {},
  error: {
    statusCode: null,
    message: '',
  },
})

export const mutations = {
  SET_CAREERS(state, careers) {
    state.careers = careers
  },

  SET_CAREER(state, career) {
    state.career = career
  },

  SET_ERROR(state, error) {
    state.error.statusCode = error.status
    state.error.message = error.message
  },
}

export const actions = {
  async getCareers({ commit }) {
    try {
      const res = await this.$repositories.careers.all()
      const { status, response } = res

      if (status.code === 2000 && response) {
        commit('SET_CAREERS', response)
      }
    } catch (error) {
      const errorResponse = this.$errorHandler.setAndParse(error)

      commit('SET_ERROR', errorResponse)
    }
  },

  async getCareer({ commit }, career) {
    try {
      const res = await this.$repositories.careers.show(career)
      const { status, response } = res
      if (status.code === 2000 && response) {
        commit('SET_CAREER', response)
      }
    } catch (error) {
      const errorResponse = this.$errorHandler.setAndParse(error)
      commit('SET_ERROR', errorResponse)
    }
  },
}

export const getters = {
  getCareers: (state) => {
    return state.careers
  },
  getCareer: (state) => {
    return state.career
  },
}
