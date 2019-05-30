<template>
  <div>
    <v-btn fab fixed right color="primary" dark :class="$style['floating_Btn']">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  name: "addButton",
  created() {
  }
}
</script>

<style module lang="scss">
.floating_Btn {
  bottom: 66px;
}
</style>