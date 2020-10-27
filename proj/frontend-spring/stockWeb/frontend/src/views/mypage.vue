<template>
  <mypage-read-form :mypageinfo="mypageinfo" :loginfo="loginfo"/>
</template>

<script>
import MypageReadForm from '../components/MypageReadForm'
import { mapState } from 'vuex'

export default {
  components: {
    MypageReadForm
  },
  computed: {
    ...mapState(['mypageinfo', 'loginfo'])
  }
}
</script>
