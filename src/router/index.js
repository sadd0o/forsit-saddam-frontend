import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RevenueAnalysis from '@/views/RevenueAnalysis.vue';
import InventoryManagement from '@/views/InventoryManagement.vue';
import ProductRegistration from '@/views/ProductRegistration.vue';

const routes = [
  {
    path: '/',
    redirect: '/revenue-analysis'
  },
  {
    path: '/revenue-analysis',
    name: 'RevenueAnalysis',
    component: RevenueAnalysis,
  },
  {
    path: '/inventory-management',
    name: 'InventoryManagement',
    component: InventoryManagement,
  },
  {
    path: '/product-registration',
    name: 'ProductRegistration',
    component: ProductRegistration,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
