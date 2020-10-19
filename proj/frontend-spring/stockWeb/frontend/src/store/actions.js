import axios from 'axios'
import {FETCH_TOTAL_TABLE} from './mutation-types'

export default {
  login ({ commit }, payload) {
    console.log('actions login')
    return axios.post(`http://localhost:8000/member/login`, {
      id: payload.id,
      password: payload.password
    })
  },
  loginByToken () {
  },
  logout ({ commit }) {
    commit()
  },
  signup ({ commit }, payload) {
    console.log('actions signup')
    return axios.post(`http://localhost:8000/member/signup`, {
      email: payload.email, apiId: payload.apiId, password: payload.password
    })
  },
  fetchTotalTable ({ commit }) {
    return axios.get(`http://localhost:8000/history/total/test`)
      .then(res => {
        commit(FETCH_TOTAL_TABLE, res.data)
      })
  }
}
