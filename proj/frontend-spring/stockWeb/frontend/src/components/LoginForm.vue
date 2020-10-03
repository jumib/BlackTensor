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
      <br>
        <v-btn depressed color="#F4511E" width="360px" dark>Sign in</v-btn><br><br>
        <v-card-text height="40px" width="320px" align="center">
          <v-btn depressed small color="white">
            <v-img
              :src="require('/Users/jumibaek/Downloads/google.png')"
              width="30px"
            ></v-img>
          </v-btn>
        </v-card-text>
        <br><br>
        <v-btn text depressed small color="#F4511E" @click="test">Forgot Password?</v-btn><br><br>
        <div>Don't have an account ?<v-btn text depressed small color="#F4511E" @click="test">Sign Up</v-btn></div>
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
