
import HelloWorld from '@/components/HelloWorld'

export default  [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter:(to,from,next) => {
        next()
        //路由独享的守卫
      }
    }
  ]