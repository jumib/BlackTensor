<template>
  <v-app>
    <div id="header">
      <FixedHeader/>
    </div>
    <div id="content" >
      <router-view/>
    </div>
    <!-- <div id="footer">
      <FixedFooter/>
    </div> -->
  </v-app>
</template>

<script>
import FixedHeader from '@/components/FixedHeader'
// import FixedFooter from '@/components/FixedFooter'

export default {
  name: 'App',
  components: {
    FixedHeader
    // FixedFooter
  }
}
</script>

<style scoped>
#content {
   /*background-color: #22293d;
   height: 100%;*/
}
</style>
