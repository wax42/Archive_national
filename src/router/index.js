import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tree from '@/components/Tree'
import Keyboard from '@/components/Keyboard'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,

		},
    {
      path: '/tree',
      name: 'Tree',
      component: Tree,

    },
    {
      path: '/key',
      name: 'Keyboard',
      component: Keyboard,
    },
    {
  path: '*',
  redirect: '/search'
  }
  ]
})

export default router
