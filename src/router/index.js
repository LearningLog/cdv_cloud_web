import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import live from '@/views/live'
import playback from '@/views/playback'
import vueCropper from '@/views/vueCropper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/playback',
      name: 'playback',
      component: playback
    },
    {
      path: '/vueCropper',
      name: 'vueCropper',
      component: vueCropper
    }
  ]
})
