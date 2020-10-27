// import FETCH_TOTAL_TABLE from './mutation-types'
import { GET_MYPAGE, GET_LOGINFO, GET_STOCKDATA, GET_INFODATA, GET_ALLDATA } from './mutation-types'

export default {
// [FETCH_TOTAL_TABLE] (state, totalhistorys) {
//   state.totalhistorys = totalhistorys
// },
  [GET_MYPAGE] (state, mypageinfo) {
    state.mypageinfo = mypageinfo
  },
  [GET_LOGINFO] (state, loginfo) {
    state.loginfo = loginfo
  },
  [GET_STOCKDATA] (state, stockData) {
    state.stockData = stockData
  },
  [GET_INFODATA] (state, infoData) {
    state.infoData = infoData
  },
  [GET_ALLDATA] (state, allData) {
    state.allData = allData
  }

}
