import axios from 'axios'

export default {
  login ({ commit }, payload) {
    console.log('actions login')
    return axios.post(`http://localhost:7777/member/login`, {
      email: payload.email,
      password: payload.password
    })
  },
  signup ({ commit }, payload) {
    console.log('actions signup')
    return axios.post(`http://localhost:7777/member/signup`, {
      email: payload.email, apiId: payload.apiId, password: payload.password
    })
  }
}
