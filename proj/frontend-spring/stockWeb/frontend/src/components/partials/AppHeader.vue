<template lang="html">
  <b-navbar flat id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="md">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        blacktensor
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        B
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" @click="collapedSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
      <b-navbar-nav class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
      </b-navbar-nav>
      <b-navbar-nav class="navbar-nav-right ml-auto">
        <form class="mr-auto search-form d-none d-md-block" action="#">
          <div class="form-group">
            <input type="search" class="form-control" placeholder="Search Here">
          </div>
        </form>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="nav-link count-indicator">
              <i class="mdi mdi-bell-outline"></i>
              <span class="count">7</span>
            </div>
          </template>
          <b-dropdown-item class="preview-item py-2 px-0 border-bottom">
            <p class="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
            <span class="badge badge-pill badge-primary float-right">View all</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <div class="ml-3">
          <b-button variant="outline-dark" @click="$router.push('/login/')">로그인</b-button>
        </div>
      </b-navbar-nav>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="collapedMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script lang="js">
// eslint-disable-next-line
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'app-header',
  methods: {
    collapedSidebar: function () {
      $('body').toggleClass('sidebar-icon-only')
    },
    collapedMobileSidebar: function () {
      $('#sidebar').toggleClass('active')
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
