//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'checklist.index',
        component: () => import( /* webpackChunkName: "checklist.index" */ '@/views/checklist/Index.vue')
    },
    {
        path: '/create',
        name: 'checklist.create',
        component: () => import( /* webpackChunkName: "checklist.create" */ '@/views/checklist/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'checklist.edit',
        component: () => import( /* webpackChunkName: "checklist.edit" */ '@/views/checklist/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
