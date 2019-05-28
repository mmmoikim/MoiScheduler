<template>
  <v-layout align-start justify-space-around row fill-height>
    <v-toolbar color="cyan" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Moi Scheduler</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

  </v-layout>
</template>

<script>
export default {
  name: "TopHeader",
  created() {
  }
}
</script>