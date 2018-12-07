import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tree from '@/components/Tree'

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
  path: '*',
  redirect: '/search'
  }
  ]
})

export default router
