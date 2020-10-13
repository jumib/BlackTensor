<template>
  <div class='table-responsive'>
    <b-table hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: ['name', 'price', 'profit'],
      items: [
        { name: 'NAVER', price: '$250.00', profit: '+2.54' },
        { name: 'CACAO', price: '$350.00', profit: '-13.61' },
        { name: 'SAMSUNG', price: '$240.00', profit: '+1.64' },
        { name: 'GOOGLE', price: '$320.00', profit: '+13.44' }
      ]
    }
  }
}

</script>
