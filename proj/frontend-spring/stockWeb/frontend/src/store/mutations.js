// import FETCH_TOTAL_TABLE from './mutation-types'
import { GET_MYPAGE } from './mutation-types'

export default {
// [FETCH_TOTAL_TABLE] (state, totalhistorys) {
//   state.totalhistorys = totalhistorys
// },
    [GET_MYPAGE] (state, memberinfo) {
        state.memberinfo = memberinfo
    }

}
