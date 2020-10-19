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
                <h3>비밀번호 찾기</h3><br><br>
                <div>
                  <label class="label">가입한 이메일</label>
                  <div class="input-group">
                    <input type="text" v-model="email" class="form-control" placeholder="email"/>
                    <b-button @click="emailDuplicate">중복체크</b-button>
                  </div>
                </div>
                <br><br><br><br>
                <div>
                  <b-button class="btn-block" variant="dark" @click="submit">SUBMIT</b-button>
                </div>
                <br>
                <a class="text-small forgot-password text-black" @click="$router.push('/mainpage/')">처음 화면으로 돌아가기</a>
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
      checkEmailExist: false
    }
  },
  methods: {
    emailDuplicate () {
      axios.get(`http://localhost:8000/member/check/${this.email}`)
        .then(res => {
          console.log(res)
          if (res.status === 200 && res.data === 'This mail is not exist') {
            alert('fail')
            this.checkEmailExist = false
          } else {
            alert('ok')
            this.checkEmailExist = true
          }
        }).catch(err => {
          console.log(err)
          alert('요청이 실패하였습니다')
        })
    },
    submit () {
      if (this.checkEmailExist === true) {
        alert('링크가 발송되었습니다')
      } else {
        alert('이메일을 다시 확인하세요')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.register {

}
</style>
