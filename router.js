// import Vue from 'vue'
// import Router from 'vue-router'
import list from './components/list.vue'
import editPage from './components/edit.vue'

// Vue.use(Router)

const routes = [{
    path: '/',
    component: list,
},{ path: '/list/:id',
    name: 'edit-city',
    title: 'edit-city',
    component: editPage,
    }
];

export default routes
