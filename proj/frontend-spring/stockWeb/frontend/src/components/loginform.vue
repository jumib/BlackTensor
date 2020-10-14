<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper">
    <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="auto-form-wrapper">
            <b-card>
            <form @submit.prevent="submit">
              <h3>로그인</h3><br><br>
                <div class="form-group">
                  <label class="label">이메일</label>
                  <div class="input-group">
                    <b-form-textarea type="text" v-model="email" class="form-control"/>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">비밀번호</label>
                  <div class="input-group">
                    <b-form-textarea type="password" v-model="password" class="form-control"/>
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <b-button
                      class="btn-block" variant="dark" @click="submit">로그인</b-button>
                </div>
                <div class="text-block text-center my-3">
                  <a href="#" class="text-small forgot-password text-black">비밀번호 찾기</a>
                </div>
                <div class="form-group">
                  <button class="btn btn-block">with Google</button>
                </div>
                <div class="text-block text-center my-3">
                  <span class="text-small font-weight-semibold">아직 회원이 아니신가요?</span>
                  <b-button type="text" variant="outline-dark" class="ml-2" @click="$router.push('/register/')">회원가입</b-button>
                </div>
            </form>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'loginform',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log('LoginForm submit()')
      const { email, password } = this
      this.$emit('submit', { email, password })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
}
</style>
