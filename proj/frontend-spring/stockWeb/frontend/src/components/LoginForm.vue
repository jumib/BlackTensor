<template>
  <div>
    <v-container>
      <v-col cols="5">
        <v-text-field
          v-model="id"
          label="e-mail"
          clearable
        ></v-text-field>
        <v-text-field
          input type="password"
          v-model="pw"
          label="password"
          clearable
        ></v-text-field>
      </v-col>
      <br>
        <v-col cols="4">
          <v-btn depressed small type="test" color="#F4511E" dark>Sign in</v-btn><br><br>
          <div>구글계정 추가</div><br>
          <v-btn text depressed small color="#F4511E" @click="test">Forgot Password?</v-btn><br><br>
          <div>don't have an account ?<v-btn text depressed small color="#F4511E" @click="test">Sign Up</v-btn></div>
        </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    test () {
    }
  }
}
</script>
