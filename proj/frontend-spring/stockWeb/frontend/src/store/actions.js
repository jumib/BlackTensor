import axios from 'axios'
import {FETCH_TOTAL_TABLE, GET_APIID, GET_MYPAGE} from './mutation-types'

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
  },
  getMypage ({ commit }, payload) {
    console.log('get my page actions: ', payload)
    return axios.get(`http://localhost:8000/member/mypage/${payload.id}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('i am mypage info: ', res.data)
          commit(GET_MYPAGE, res.data)
        } else {
          console.log('fail get mypage info')
        }
      })
  },
  getApiId ({ commit }, payload) {
    console.log('get my api id', payload.apiId)
    return axios.get(`http://localhost:8000/member/getInfo/${payload.id}`)
        .then(res => {
          if (res.status === 200 && res.data != null) {
            console.log('success apiId', res.data.apiId)
            commit(GET_APIID, res.data.apiId)
          } else {
            console.log('fail get my api id')
          }
        })
  }
}
