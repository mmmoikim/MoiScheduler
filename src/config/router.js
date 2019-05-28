import VueRouter from 'vue-router'

import List from 'View/List.vue'
import Calender from 'View/Calender.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [{
        name: 'list',
        path: `/list`,
        component: List,
    }, {
        name: 'calender',
        path: `/calender`,
        component: Calender,
    }]
})

export default router