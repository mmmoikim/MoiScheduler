<template>
  <v-layout align-end row fill-height :class="$style['menu_wrap']">
    <v-flex>
      <v-tabs fixed-tabs v-model="active" color="primary" dark slider-color="yellow">
        <v-tab v-for="(item, index) in menuList" :key="index" ripple :to="item.route">
          <v-icon>{{item.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      active: 0,
      menuList: [{ name: '일정', icon: 'list', route: 'list' }, { name: '달력', icon: 'calendar_today', route: 'calender' }]
    }
  },
  methods: {
  }
}
</script>

<style module lang="scss">
@import "Styles/common.scss";
</style>