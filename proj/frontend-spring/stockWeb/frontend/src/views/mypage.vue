<template>
  <mypage-read-form :memberinfo="memberinfo"/>
</template>

<script>
import MypageReadForm from '../components/MypageReadForm'
import { mapState } from 'vuex'

export default {
  components: {
    MypageReadForm
  },
  computed: {
    ...mapState(['memberinfo'])
  }
}
</script>
