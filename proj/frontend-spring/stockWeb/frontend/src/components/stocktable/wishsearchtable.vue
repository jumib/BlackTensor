<template>
  <v-container>
    <v-col cols="10">
        <b-table
            dense
            :items="wishitems"
            item-key="name"
            class="elevation-1"
        ></b-table>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    wishitems: [
      { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { age: 555, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
  })
}
</script>
