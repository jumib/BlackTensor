<template>
  <loginform @submit="onSubmit"/>
</template>enfpdl
<script>
import loginform from '@/components/loginform.vue'
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

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
          this.getMypage(payload)
          this.getApiId(payload)
        } else {
          alert('아이디와 비밀번호가 올바르지 않습니다')
        }
        this.$router.push('/mainpage')
      })
      // .catch(err => {
      // alert('아이디와 비밀번호를 확인하세요')
      // })
    },
    ...mapActions(['login', 'getMypage', 'getApiId'])
  }
}
</script>
