<template>
  <div>
    <v-data-table :items="totalhistorys" :headers="headers"></v-data-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        { text: '번호', value: 'historyNo' },
        { text: '이름', value: 'stockName' },
        { text: '매매타입', value: 'tradeType' },
        { text: '매수가', value: 'buyPrice' },
        { text: '매수량', value: 'buyCount' },
        { text: '매도가', value: 'sellPrice' },
        { text: '매도량', value: 'sellCount' },
        { text: '손익', value: 'diffPrice' },
        { text: '수익률', value: 'yield' }
      ]
    }
  },
  props: {
    totalhistorys: {
      type: Array
    }
  }
}
</script>
