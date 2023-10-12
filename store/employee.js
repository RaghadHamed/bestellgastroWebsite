export const state = () => ({
  successMessage: '',
  errorMessage: '',
  error: {
    statusCode: null,
    message: '',
  },
})

export const mutations = {
  SET_SUCCESS_MESSAGE(state, successMessage) {
    state.successMessage = successMessage
  },

  SET_ERROR_MESSAGE(state, errorMessage) {
    state.errorMessage = errorMessage
  },

  SET_ERROR(state, error) {
    state.error.statusCode = error.status
    state.error.message = error.message
  },

  REMOVE_SUCCESS_MESSAGE(state) {
    state.successMessage = ''
  },

  REMOVE_ERROR_MESSAGE(state) {
    state.errorMessage = ''
  },
}

export const actions = {
  async applyToCareer({ commit }, data) {
    try {
      const res = await this.$repositories.employee.create(data)
      const { status } = res
      if (res && status.code === 2000) {
        commit('SET_SUCCESS_MESSAGE', this.app.i18n.t('success'))
      }
    } catch (error) {
      const errorResponse = this.$errorHandler.setAndParse(error)

      commit('SET_ERROR_MESSAGE', this.app.i18n.t('fileError'))

      commit('SET_ERROR', errorResponse)
    }
  },
}
