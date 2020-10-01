<template>
  <v-container>
    <v-content>
      <div class="ma-16" align="center">
        <h1>Ready to get free access to the world of investing?</h1>
        <br><br><br>
        <LoginForm/>
      </div>
    </v-content>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}
</script>
