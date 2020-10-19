<template>
  <registerform @submit="onSubmit"/>
</template>

<script>
import registerform from '@/components/registerform.vue'
import {mapActions} from 'vuex'

export default {
  name: 'signup',
  components: {
    registerform
  },
  methods: {
    onSubmit (payload) {
      console.log('signup onSubmit()')
      this.signup(payload).then(res => {
        alert('success')
        this.$router.push('/mainpage')
      }).catch(err => {
        alert(err)
      })
    },
    ...mapActions(['signup'])
  }
}
</script>
