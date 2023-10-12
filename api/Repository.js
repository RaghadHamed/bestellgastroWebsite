export default ($axios) => (resource) => ({
  all() {
    return $axios.$get(`${resource}`)
  },

  allWithParams(params) {
    return $axios.$get(`${resource}`, params)
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload)
  },

  createDescription(id, payload) {
    return $axios.$post(`${resource}/${id}/description`, payload)
  },

  createDetail(id, payload) {
    return $axios.$post(`${resource}/${id}/detail`, payload)
  },

  createBenefit(id, payload) {
    return $axios.$post(`${resource}/${id}/benefit`, payload)
  },

  createHow(id, payload) {
    return $axios.$post(`${resource}/${id}/how-it-work`, payload)
  },

  createAttachment(id, payload) {
    return $axios.$post(`${resource}/${id}/attachment`, payload)
  },

  createResponsibility(id, payload) {
    return $axios.$post(`${resource}/${id}/responsibility`, payload)
  },

  resetPassword(url, payload) {
    return $axios.$post(`${resource}/${url}`, payload)
  },

  show(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  update(payload, id) {
    return $axios.$patch(`${resource}/${id}`, payload)
  },

  updateImage(payload) {
    return $axios.$patch(`${resource}`, payload)
  },

  updateConstant(payload) {
    return $axios.$patch(`${resource}`, payload)
  },

  updateRole(payload, id) {
    return $axios.$patch(`${resource}/${id}/role`, { roles: payload })
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
