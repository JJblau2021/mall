import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Profile = () => import('views/me/Me')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')





const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history', // H5 的 history 模式；默认为哈希模式
  routes
})

router
  .beforeEach((to, from, next) => {
    // console.log(to.name)
    next()
  })

export default router
