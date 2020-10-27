import axios from 'axios'
import {FETCH_TOTAL_TABLE, GET_MYPAGE, GET_LOGINFO, GET_STOCKDATA, GET_INFODATA, GET_ALLDATA} from './mutation-types'

export default {
  login ({ commit }, payload) {
    console.log('actions login')
    return axios.post(`http://localhost:8000/member/login`, {
      email: payload.email,
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
    console.log('actions mypage info: ', payload)
    return axios.get(`http://localhost:8000/member/mypage/${payload.email}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('success Mypage info')
          commit(GET_MYPAGE, res.data)
        } else {
          console.log('fail Mypage info')
        }
      })
  },
  getLoginfo ({ commit }, payload) {
    console.log('actions Loginfo ')
    return axios.get(`http://localhost:8000/member/getInfo/${payload.email}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('success Loginfo', res.data)
          commit(GET_LOGINFO, res.data)
        } else {
          console.log('fail Loginfo')
        }
      })
  },
  getStockData ({ commit }, stockName) {
    console.log('actions stockData')
    return axios.get(`http://localhost:8000/stock/find/data/${stockName}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('success Stock Data List')
          commit(GET_STOCKDATA, res.data)
        } else {
          console.log('fail Stock Data List')
        }
      })
  },
  getInfoData ({ commit }, stockName) {
    console.log('actions infoData')
    return axios.get(`http://localhost:8000/stock/find/info/${stockName}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('success Info Data List')
          commit(GET_INFODATA, res.data)
        } else {
          console.log('fail Info Data List')
        }
      })
  },
  getAllData ({ commit }, stockName) {
    console.log('actions allData')
    return axios.get(`http://localhost:8000/stock/find/info/${stockName}`)
      .then(res => {
        if (res.status === 200 && res.data != null) {
          console.log('success All Data List')
          commit(GET_ALLDATA, res.data)
        } else {
          console.log('fail Info Data List')
        }
      })
  }
}
