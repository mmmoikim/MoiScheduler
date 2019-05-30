<template>
  <v-layout wrap>
    <v-flex xs12 class="mb-3">
      <v-sheet>
        <v-calendar ref="calendar" v-model="start" :end="end" color="primary"></v-calendar>
      </v-sheet>
    </v-flex>

    <v-flex sm4 xs12 class="text-sm-left text-xs-center">
      <v-btn @click="$refs.calendar.prev()">
        <v-icon dark left>
          keyboard_arrow_left
        </v-icon>
        Prev
      </v-btn>
      <v-btn @click="$refs.calendar.next()">
        Next
        <v-icon right dark>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Calender",
  created() {
  }
}
</script>