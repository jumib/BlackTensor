<template>
  <b-row>
    <b-col cols="4">
      <div class='card'>
        <div class='card-body'>
          <h5>전체 성과를 한 눈에 파악해보세요</h5><br>
          <div class='row'>
            <div class='col-md-6'>
              <div class='d-flex align-items-center pb-2'>
                <div class='dot-indicator bg-danger mr-2'></div>
                <p class='mb-0'>전체 투자금</p>
              </div>
              <h4 class='font-weight-semibold'>$7,590</h4>
              <div class='progress progress-md'>
                <div class='progress-bar bg-danger' role='progressbar' style='width: 78%' aria-valuenow='78' aria-valuemin='0' aria-valuemax='78'></div>
              </div>
            </div>
            <div class='col-md-6 mt-4 mt-md-0'>
              <div class='d-flex align-items-center pb-2'>
                <div class='dot-indicator bg-success mr-2'></div>
                <p class='mb-0'>전체 수익</p>
              </div>
              <h4 class='font-weight-semibold'>$5,460</h4>
              <div class='progress progress-md'>
                <div class='progress-bar bg-success' role='progressbar' style='width: 45%' aria-valuenow='45' aria-valuemin='0' aria-valuemax='45'></div>
              </div>
            </div>
          </div>
        </div>
        <div class='card-body'>
          <div class='table-responsive'>
            <totallist class='mt-4' :height="130"></totallist>
          </div>
        </div>
      </div>
    </b-col>
    <div class="col-md-8 grid-margin stretch-card">
      <div class="card">
        <div class='card-body'>
          <h4 class='card-title mb-0'>Market Overview</h4>
          <div class='d-flex align-items-center justify-content-between w-100'>
            <p class='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class='dropdown'>
              <button class='btn btn-outline-secondary dropdown-toggle' type='button' id='dateSorter' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>This Month</button>
              <div class='dropdown-menu' aria-labelledby='dateSorter'>
                <div class='dropdown-item' id='market-overview_1'>Daily</div>
                <div class='dropdown-item' id='market-overview_2'>Weekly</div>
                <div class='dropdown-item' id='market-overview_3'>Monthly</div>
              </div>
            </div>
          </div>
          <div class='d-flex align-items-end'>
            <h3 class='mb-0 font-weight-semibold'>$36,2531.00</h3>
            <p class='mb-0 font-weight-medium mr-2 ml-2 mb-1'>USD</p>
            <p class='mb-0 text-success font-weight-semibold mb-1'>(+1.37%)</p>
          </div>
          <totalbarchart class='mt-4' :height="130"></totalbarchart>
        </div>
        <div>
          <totaltable :totalhistorys="totalhistorys"/>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script lang="js">
import totalbarchart from '../components/stockchart/totalbarchart'
import totaltable from '../components/stocktable/totaltable'
import totallist from '../components/stocklist/totallist'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'totalpage',
  components: {
    totalbarchart,
    totaltable,
    totallist
  },
  computed: {
    ...mapState(['totalhistorys'])
  },
  methods: {
    ...mapActions(['fetchTotalTable'])
  }

}
</script>

<style scoped lang="scss">
.tables {
}
</style>
