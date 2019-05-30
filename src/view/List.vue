<template>
  <v-layout align-start row>
    <v-flex>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index" avatar ripple>
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.destination }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{item.startDate | dateFormat}} ~ {{item.endDate | dateFormat}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text></v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import * as moment from 'moment'
export default {
  name: "List",
  data() {
    return {
      selected: [2],
      items: [
        {
          startDate: moment('20190501'),
          endDate: moment('20190503'),
          destination: '제주도',
          title: '제주가족여행',
          icon: 'pool'
        },
        {
          startDate: moment('20191101'),
          endDate: moment('20191220'),
          destination: '뉴욕',
          title: '뉴욕출장',
          icon: 'business_center'
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  },
  filters: {
    dateFormat(date) {
      return moment(date).format('YYYY.M.D')
    }
  }
}
</script>