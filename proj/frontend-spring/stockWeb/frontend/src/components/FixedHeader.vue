<template>
  <div>
    <v-app-bar
      color="white"
    >
      <v-toolbar-title>
        <v-btn depressed small text @click="main">로고이미지</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

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
    }
  }
}
</script>
