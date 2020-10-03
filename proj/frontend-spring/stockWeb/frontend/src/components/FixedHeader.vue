<template>
  <div>
    <v-app-bar
      color="white"
      flat
    >
      <v-toolbar-title>
        <v-btn depressed text @click="main" >
          <v-img :src="require('/Users/jumibaek/Downloads/mainlogo.png')" height="26px" width="130px"></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn  class="ma-4" depressed small text color="#F4511E" dark @click="start">trading start</v-btn>
      <v-btn  depressed small color="#F4511E" dark @click="login">login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    main () {
      this.$router.push('/')
    },
    login () {
      this.$router.push('LoginPage')
    },
    start () {
      alert('start')
    }
  }
}
</script>
