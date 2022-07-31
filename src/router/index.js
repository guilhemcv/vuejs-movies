import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/series',
    name: 'series',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SeriesView.vue'),
  },
  {
    path: '/films',
    name: 'films',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/FilmsView.vue'),
  },
  {
    path: '/best',
    name: 'best',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MostViewedView.vue'),
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/details/:type/:id',
    name: 'detailSerie',
    component: () => import('../views/DetailView.vue'),
  },
  {
    path: '/details/:type/:id',
    name: 'detailFilm',
    component: () => import('../views/DetailView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
