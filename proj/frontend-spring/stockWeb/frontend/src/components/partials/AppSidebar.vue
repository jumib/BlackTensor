<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-category">Functions</li>
         <li class="nav-item">
          <span class="nav-link" v-b-toggle="'charts-dropdown'">
            <i class="menu-icon typcn typcn-th-large-outline"></i>
            <span class="menu-title">Total View</span>
            <i class="menu-arrow"></i>
          </span>
          <b-collapse id="charts-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/totalpage/">전체보기</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'tables'">
            <i class="menu-icon mdi mdi-table"></i>
            <span class="menu-title">Detail View</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="tables">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/detailpage/">종목 별 상세</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'dashboard-dropdown'">
            <i class="menu-icon typcn typcn-document-text"></i>
            <span class="menu-title">Wish List</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="dashboard-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/wishsearch/">위시리스트</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-b-toggle="'auth'">
            <i class="menu-icon typcn typcn-document-add"></i>
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
          </a>
          <b-collapse id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/register/">Register</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
import JQuery from 'jquery'
// eslint-disable-next-line
let $ = JQuery
export default {
  name: 'app-sidebar',
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
}
</style>
