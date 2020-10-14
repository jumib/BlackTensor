<template>
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
                  <b-form-textarea type="text" v-model="email" class="form-control"/>
                </div><br>
              </div>
              <div>
                <label class="label">키움증권 아이디</label>
                <div class="input-group">
                  <b-form-textarea type="text" v-model="apiId" class="form-control"/>
                </div><br>
              </div>
              <div>
                <label class="label">비밀번호</label>
                <div class="input-group">
                  <b-form-textarea type="password" v-model="password" class="form-control"/>
                </div><br>
              </div>
              <br>
              <b-button class="btn-block" variant="dark" @click="submit">가입 완료</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: 'register',
  data () {
    return {
      email: '',
      apiId: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log('this: ' + this.email + ', ' + this.apiId + ', ' + this.password)
      const { email, apiId, password } = this
      this.$emit('submit', { email, apiId, password })
    }
  }
}
</script>

<style scoped lang="scss">
.register {

}
</style>
