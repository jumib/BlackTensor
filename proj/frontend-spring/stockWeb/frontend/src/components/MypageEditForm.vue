<template lang="html">
  <div class="col-md-6 grid-margin card">
    <div class="card-body">
      <h3>My Page</h3><br>
      <v-divider></v-divider><br>
      <form>
        <div class="form-group">
          <label>키움아이디</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="변경 할 키움 아이디를 작성하세요" v-model="apiId">
        </div>
        <button class="btn btn-secondary mr-2" @click="apiIdDuplicate">중복검사</button>
        <button class="btn btn-success mr-2" @click="changeApiId">변경완료</button><br><br>
        <v-divider></v-divider><br>
        <div class="form-group">
          <label for="exampleInputName1">이름</label>
          <input type="text" v-model="name" class="form-control" id="exampleInputName1" placeholder="name">
        </div>
        <div class="form-group">
          <b-form-group label="성별">
            <b-form-radio v-model="gender" name="some-radios" value="M">Male</b-form-radio>
            <b-form-radio v-model="gender" name="some-radios" value="F">Female</b-form-radio>
          </b-form-group>
        </div><br>
        <div class="form-group">
          <label>생년월일</label>
        </div>
        <div class="form-group">
          <label for="exampleInputName1">연락처</label>
          <input type="text" class="form-control" id="phone number" placeholder="예) 000-0000-0000" v-model="phone">
        </div>
        <div class="form-group">
          <label for="exampleTextarea1">메모</label>
          <textarea class="form-control" id="exampleTextarea1" rows="2" v-model="memo"></textarea>
        </div>
        <button class="btn btn-success mr-2" type="submit">완료</button>
        <button class="btn mr-2" @click="$router.push('/mypage/')">돌아가기</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      gender: '',
      name: '',
      apiId: '',
      birth: '',
      phone: '',
      memo: '',
      year: ''
    }
  },
  methods: {
    onSubmit () {
      const { gender, name, birth, phone, memo } = this
      this.$emit('submit', { gender, name, birth, phone, memo })
    },
    changeApiId () {
      console.log('change apiId payload: ')
      axios.put(`http://localhost:8000/member/change/apiid`, {
      })
    },
    apiIdDuplicate () {
      axios.get(`http://localhost:8000/member/check/apiid/${this.apiId}`)
        .then(res => {
          console.log(res)
          if (res.status === 200 && res.data === 'find Api Id Fail') {
            alert('사용할 수 있는 아이디입니다')
          } else {
            alert('사용할 수 없는 아이디입니다')
          }
        })
    }
  },
  computed: {
    ...mapState(['mypageinfo'])
  },
  props: {
    mypageinfo: {
      type: Array
    }
  }
}

</script>
