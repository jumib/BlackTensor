<template lang="html">
  <section class="register">
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="content-wrapper auth p-0 theme-two">
      <div class="row d-flex align-items-stretch">
        <div class="col-md-4 banner-section d-none d-md-flex align-items-stretch justify-content-center">
          <div class="slide-content bg-2"> </div>
        </div>
        <div class="col-12 col-md-8 h-100 bg-white">
          <div class="auto-form-wrapper d-flex align-items-center justify-content-center flex-column">
            <form @submit.prevent="submit">
              <h3>회원가입</h3><br><br>
              <div>
                <label class="label">이메일</label>
                <div class="input-group">
                  <input type="text" v-model="email" class="form-control" placeholder="email" @blur="checkValidate"/>
                  <b-button @click="emailDuplicate">중복체크</b-button>
                </div>
              </div>
              <div><br>
                <label class="label">키움증권 아이디</label>
                <div class="input-group">
                  <input type="text" v-model="apiId" class="form-control" placeholder="실제 키움증권 아이디와 동일하게 작성하세요"/>
                  <b-button @click="apiIdDuplicate">중복체크</b-button>
                </div>
              </div><br>
              <div>
                <label class="label">비밀번호</label>
                <div class="input-group">
                  <input type="password" v-model="password" class="form-control" placeholder="password"/>
                </div><br>
              </div>
              <br>
              <div>
                <b-button class="btn-block" variant="dark" @click="submit">가입 완료</b-button>
              </div>
              <br>
              <div>
                <a class="text-small forgot-password text-black" @click="$router.push('/mainpage/')">처음 화면으로 돌아가기</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script lang="js">
import axios from 'axios'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      apiId: '',
      password: '',
      checkEmailForm: false
    }
  },
  methods: {
    submit () {
      if (this.checkEmailForm === true) {
        console.log('this: ' + this.email + ', ' + this.apiId + ', ' + this.password)
        const { email, apiId, password } = this
        this.$emit('submit', { email, apiId, password })
      } else {
        alert('이메일 형식을 확인하세요.')
      }
    },
    checkValidate (e) {
      e.preventDefault()
      if (!this.validEmail(this.email)) {
        alert('이메일 형식이 올바르지 않습니다.')
        this.checkEmailForm = false
      } else {
        this.checkEmailForm = true
      }
    },
    validEmail (email) {
      var re = /.+@.+\..+/
      return re.test(email)
    },
    emailDuplicate () {
      console.log(this.email)
      axios.get(`http://localhost:8000/member/check/${this.email}`)
        .then(res => {
          if (res.status === 200 && res.data === 'This mail is not exist') {
            alert('시용할 수 있는 계정입니다')
          } else {
            alert('사용할 수 없는 계정입니다')
          }
        }).catch(err => {
          console.log(err)
          alert('요청이 실패하였습니다')
        })
    },
    apiIdDuplicate () {
      axios.get(`http://localhost:8000/member/find/${this.apiId}`)
        .then(res => {
          console.log(res)
          if (res.status === 200 && res.data === 'find Api Id Fail') {
            alert('사용할 수 있는 아이디입니다')
          } else {
            alert('사용할 수 없는 아이디입니다')
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
.register {

}
</style>
