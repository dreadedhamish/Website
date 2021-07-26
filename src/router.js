import Vue from 'vue';
import Router from 'vue-router';

import index from './pages/index';
import contact from './pages/contact';
import roadmap from './pages/roadmap';
import token from './pages/Token';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact,
		},
		{
			path: '/roadmap',
			name: 'roadmap',
			component: roadmap,
		},
		{
			path: '/token',
			name: 'token',
			component: token,
		},
	],
});
