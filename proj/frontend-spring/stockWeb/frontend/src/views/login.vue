<template>
  <loginform @submit="onSubmit"/>
</template>

<script>
import loginform from '@/components/loginform.vue'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    loginform
  },
  methods: {
    onSubmit (payload) {
      console.log('login onSubmit()')
      this.login(payload).then(res => {
        if (res.status === 200) {
        } if (res.data === 'Login OK') {
          alert('success')
        } else {
          alert('아이디와 비밀번호가 올바르지 않습니다')
        }
        this.$router.push('/mainpage')
      })
      // .catch(err => {
      // alert('아이디와 비밀번호를 확인하세요')
      // })
    },
    ...mapActions(['login'])
  }
}
</script>
