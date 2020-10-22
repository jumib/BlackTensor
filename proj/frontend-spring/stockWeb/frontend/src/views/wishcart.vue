<template>
      <div class='card'>
        <div class='card-body'>
          <b-tabs content-class="mt-3">
            <b-tab title="검색" @click="$router.push('/wishsearch/')">
              <b-input-group size="sm" class="mb-2">
                <b-form-input type="search" placeholder="종목 이름 또는 코드를 검색하세요"></b-form-input>
              </b-input-group><br>
            </b-tab>
            <b-tab title="찜 목록" active></b-tab>
            <b-card-group>
              <div class="grid-margin stretch-card">
                <div>
                  <b-card style="max-width: 23rem;">
                    <b-card-title>삼성전자</b-card-title>
                    <b-table :items="items"></b-table>
                  </b-card>
                </div>
              </div>
            </b-card-group>
          </b-tabs>
        </div>
      </div>
</template>

<script lang="js">
/* eslint-disable */

export default {
  data() {
    return {
      status: [],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
