<template>
  <v-flex align-start :class="$style['header_wrap']">
    <v-toolbar color="primary" dark dense>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Moi Scheduler</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
  </v-flex>
</template>

<script>
export default {
  name: "TopHeader",
  created() {
  }
}
</script>

<style module lang="scss">
@import "Styles/common.scss";
</style>