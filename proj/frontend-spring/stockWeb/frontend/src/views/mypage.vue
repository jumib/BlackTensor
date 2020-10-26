<template>
  <mypage-read-form :memberinfo="memberinfo" :myApiId="myApiId"/>
</template>

<script>
import MypageReadForm from '../components/MypageReadForm'
import { mapState } from 'vuex'

export default {
  components: {
    MypageReadForm
  },
  computed: {
    ...mapState(['memberinfo', 'myApiId'])
  }
}
</script>
