import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/LoginView.vue'),
  },
  {
    path: '/',
    component: () => import('./layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('./views/DashboardView.vue'),
      },
      {
        path: 'clients',
        name: 'Clients',
        component: () => import('./views/ClientsView.vue'),
      },
      {
        path: 'clients/:id',
        name: 'ClientDetail',
        component: () => import('./views/ClientDetailView.vue'),
      },
      {
        path: 'deals',
        name: 'Deals',
        component: () => import('./views/DealsPipelineView.vue'),
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: () => import('./views/TasksView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.path !== '/login' && !auth.currentUser) {
    next('/login')
  } else if (to.path === '/login' && auth.currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router