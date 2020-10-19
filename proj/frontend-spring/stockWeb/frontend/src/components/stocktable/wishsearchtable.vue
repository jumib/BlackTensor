<template>
  <v-container>
    <v-col cols="10">
        <b-table
            dense
            :headers="headers"
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
    headers: [
      { text: 'No', value: 'boardNo' },
      { text: 'Title', value: 'title' },
      { text: 'Writer', value: 'writer' }
    ]
  })
}
</script>
