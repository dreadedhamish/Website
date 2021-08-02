import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index';
import Contact from './pages/Contact';
import Roadmap from './pages/Roadmap';
import Token from './pages/Token';
import TVL from './pages/TVL';
import FAQ from './pages/FAQ';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
		},
		{
			path: '/Contact',
			name: 'Contact',
			component: Contact,
		},
		{
			path: '/Roadmap',
			name: 'Roadmap',
			component: Roadmap,
		},
		{
			path: '/Token',
			name: 'Token',
			component: Token,
		},
		{
			path: '/TVL',
			name: 'TVL',
			component: TVL,
		},
		{
			path: '/FAQ',
			name: 'FAQ',
			component: FAQ,
		},
	],
});
