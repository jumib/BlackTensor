<template>
  <b-row>
    <b-col cols="4">
      <div class='card'>
        <div class='card-body'>
          <h5>종목을 검색하고 관심목록에 추가해보세요</h5><br>
          <b-tabs content-class="mt-3">
            <b-tab title="검색" active>
              <b-input-group size="sm" class="mb-2">
                <b-form-input type="search" placeholder="종목 이름 또는 코드를 검색하세요"></b-form-input>
              </b-input-group><br>
              <div class='table-responsive'>
                <table class='table table-stretched'>
                  <thead>
                  <tr>
                    <th>종목</th>
                    <th>코드</th>
                    <th>가격</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <p class='mb-1 text-dark font-weight-medium'>NFLX</p><small class='font-weight-medium'>Netflix, Inc.</small>
                    </td>
                    <td class='font-weight-medium'>$250.00</td>
                    <td class='text-success font-weight-medium'>+12.64</td>
                  </tr>
                  <tr>
                    <td>
                      <p class='mb-1 text-dark font-weight-medium'>TSLA</p><small class='font-weight-medium'>Tesla, Inc.</small>
                    </td>
                    <td class='font-weight-medium'>$458.00</td>
                    <td class='text-danger font-weight-medium'>-14.53</td>
                  </tr>
                  <tr>
                    <td>
                      <p class='mb-1 text-dark font-weight-medium'>GOOG</p><small class='font-weight-medium'>Alphabet, Inc.</small>
                    </td>
                    <td class='font-weight-medium'>$250.00</td>
                    <td class='text-danger font-weight-medium'>+12.64</td>
                  </tr>
                  <tr>
                    <td>
                      <p class='mb-1 text-dark font-weight-medium'>AMZN</p><small class='font-weight-medium'>Amazon.com, Inc.</small>
                    </td>
                    <td class='font-weight-medium'>$546.00</td>
                    <td class='text-success font-weight-medium'>+24.34</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="찜 목록" @click="$router.push('/wishcart/')"><p>I'm the second tab</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-col>
    <div class="col-md-8 grid-margin stretch-card">
      <div>
        <b-card style="max-width: 23rem;">
          <b-card-title>삼성전자</b-card-title>
            <line-chart height="250"></line-chart>
            <b-table :items="items"></b-table>
            <b-form-checkbox
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >찜 목록에 추가하기</b-form-checkbox>
        </b-card>
      </div>
    </div>
  </b-row>
</template>

<script lang="js">
import lineChart from '../components/charts/examples/lineChart'

export default {
  data () {
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
    lineChart
  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
