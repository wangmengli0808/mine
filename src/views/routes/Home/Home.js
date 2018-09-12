import Home from '../../components/Home/Home.vue'
import HomeFirst from '../../components/Home/HomeFirst.vue'
import HomeSecond from '../../components/Home/HomeSecond.vue'
import HomeThird from '../../components/Home/HomeThird.vue'

export default [
  {
    path: '/home',
    name: 'home',
    redirect: '/home-first',
    component: Home,
    children: [
      {
        path: '/home-first',
        name: 'home-first',
        component: HomeFirst
      },
      {
        path: '/home-second',
        name: 'home-second',
        component: HomeSecond
      },
      {
        path: '/home-third',
        name: 'home-third',
        component: HomeThird
      }
    ]
  }
]