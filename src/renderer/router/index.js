import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/views/index').default,
      redirect:"/home",
      children:[
        {
          path:"home",
          name:'home',
          component:require("@/views/home/index").default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
