<template>
      <div class='card'>
        <div class='card-body'>
          <b-tabs content-class="mt-3">
            <b-tab title="검색" active>
              <b-input-group size="sm" class="mb-2">
                <b-form-input type="search" v-model="stockName" placeholder="종목 이름을 검색하세요. 예) 삼성전자" @keyup.enter="submit"></b-form-input>
              </b-input-group><br>
              <div v-if="viewflag">
                <wishbarchart height="80"/><br>
                <wishsearchtable/>
                <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                >찜 목록에 추가하기</b-form-checkbox>
              </div>
              <div v-else>
              </div>
            </b-tab>
            <b-tab title="찜 목록" @click="$router.push('/wishcart/')"><p>I'm the second tab</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
</template>

<script lang="js">
import wishbarchart from '../components/stockchart/wishbarchart'
import wishsearchtable from '../components/stocktable/wishsearchtable'

export default {
  data () {
    return {
      status: [],
      stockName: '',
      viewflag: false
    }
  },
  components: {
    wishbarchart,
    wishsearchtable
  },
  methods: {
    submit () {
      if (this.submit()) {
        this.viewflag = true
      } else {

      }
    }
  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
