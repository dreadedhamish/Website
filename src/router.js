import Vue from 'vue';
import Router from 'vue-router';

import index from './pages/index';
import about from './pages/about';
import blockchain from './pages/blockchain';
import contact from './pages/contact';
import faq from './pages/faq';
import roadmap from './pages/roadmap';

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
			path: '/faq',
			name: 'faq',
			component: faq,
		},
		{
			path: '/about',
			name: 'about',
			component: about,
		},
		{
			path: '/blockchain',
			name: 'blockchain',
			component: blockchain,
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
	],
});
