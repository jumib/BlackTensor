import axios from 'axios'

export default {
  login ({ commit }, payload) {
    console.log('actions login')
    return axios.post(`http://localhost:8000/member/login`, {
      email: payload.email,
      password: payload.password
    })
  },
  signup ({ commit }, payload) {
    console.log('actions signup')
    return axios.post(`http://localhost:8000/member/signup`, {
      email: payload.email, apiId: payload.apiId, password: payload.password
    })
  }
}
