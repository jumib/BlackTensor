<template>
  <mypage-edit-form @submit="onSubmit"/>
</template>

<script>
import MypageEditForm from '../components/MypageEditForm'
import axios from 'axios'

export default {
  components: {
    MypageEditForm
  },
  methods: {
    onSubmit (payload) {
      const { gender, name, birth, phone, memo } = payload
      axios.put(`http://localhost:8000/member/mypage/`)
    }
  }
}
</script>
