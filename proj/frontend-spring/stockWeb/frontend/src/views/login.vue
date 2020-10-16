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
        alert('success')
        this.$router.push({ name: '/mainpage/' })
      }).catch(err => {
        // alert(err.response.data.message)
        alert('err: ', err)
      })
    },
    ...mapActions(['login'])
  }
}
</script>
