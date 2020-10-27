<template>
  <mypage-edit-form @submit="onSubmit"/>
</template>

<script>
import MypageEditForm from '../components/MypageEditForm'

export default {
  components: {
    MypageEditForm
  },
  methods: {
    onSubmit (payload) {
    }
  }
}
</script>
