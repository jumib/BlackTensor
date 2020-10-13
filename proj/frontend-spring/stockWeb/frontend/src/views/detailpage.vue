<template>
  <b-row>
    <b-col cols="4">
      <div class='card'>
        <div class='card-body'>
          <h5>보유 중인 종목의 정보를 상세하게 보세요</h5>
          <div>
            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
          </div><br>
          <div class='table-responsive'>
            <detaillist/>
          </div>
        </div>
      </div>
    </b-col>
    <div class="col-md-8 grid-margin stretch-card">
      <div class="card">
        <div class='card-body'>
          <h4 class='card-title mb-0'>AM chart로 변경</h4><br>
          <div class='d-flex flex-column flex-lg-row'>
            <div class='data-wrapper d-flex mt-2 mt-lg-0'>
              <div class='wrapper pr-5'>
                <h5 class='mb-0'>Total Cost</h5>
                <div class='d-flex align-items-center'>
                  <h4 class='font-weight-semibold mb-0'>15,263</h4>
                  <small class='ml-2 text-gray d-none d-lg-block'><b>89.5%</b> of 20,000 Total</small>
                </div>
              </div>
              <div class='wrapper'>
                <h5 class='mb-0'>Total Revenue</h5>
                <div class='d-flex align-items-center'>
                  <h4 class='font-weight-semibold mb-0'>$753,098</h4>
                  <small class='ml-2 text-gray d-none d-lg-block'><b>10.5%</b> of 20,000 Total</small>
                </div>
              </div>
            </div>
            <div class="ml-lg-auto" id="sales-statistics-legend">
              <div class="chartjs-legend">
                <ul>
                  <li><span style="background-color: #8862e0"></span>Revenue</li>
                  <li><span style="background-color: #19d895"></span>Sales</li>
                </ul>
              </div>
            </div>
          </div><br>
          <detaillinechart class='mt-5' :height="170"></detaillinechart><br>
          <div class='d-flex justify-content-between'>
            <h4 class='card-title mb-0'>history</h4><br>
          </div>
          <div class='table-responsive'>
            <detailhistory/>
          </div>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script lang="js">
import detaillinechart from '../components/stockchart/detaillinechart'
import detaillist from '../components/stocklist/detaillist'
import detailhistory from '../components/stocktable/detailhistory'

export default {
  name: 'basicTables',
  components: {
    detaillinechart,
    detaillist,
    detailhistory
  },
  data () {
    return {
      search: [],
      selected: null,
      options: [
        { value: null, text: '종목을 선택하세요' },
        { value: 'a', text: '삼성' },
        { value: 'b', text: '네이버' },
        { value: 'd', text: '카카오' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tables {
}
</style>
