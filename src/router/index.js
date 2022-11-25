import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DatePick from '../views/DatePick.vue'
import FestView from '../views/FestView.vue'
import LoginView from '../views/LoginView.vue'
import Register from '../views/Register.vue'
import PlannerView from '../views/PlannerView.vue'
import Addfes from '../views/Addfes.vue'
import { auth } from '../firebase'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false
      }
      
    },
    {
      path: '/festview',
      name: 'festview',
      component: FestView,
      meta: {
        requiresAuth: false
      }
      
    },
    {
      path: '/dp',
      name: 'dp',
      component: DatePick,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/planner',
      name: 'planner',
      component: PlannerView,
      meta: {
        requiresAuth: true
      }
  
    },
    {
      path: '/addfes',
      name: 'addfes',
      component: Addfes,
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }
 

  console.log(to.matched.some(record => record.meta.requiresAuth))
  if ((to.matched.some(record => record.meta.requiresAuth)) && !auth.currentUser) {
    next('/login')
    return;
  }

  

  next();
})



export default router
