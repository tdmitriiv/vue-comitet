import { RouteConfig } from 'vue-router/types/router';
import Page from '@/views/Page.vue';

const routes: RouteConfig[] = [
	{
		name: 'home',
		path: '/',
		component: Page,
		children: [
			{
				name: 'page',
				path: '/:url',
				component: Page,
			},
		],
	},
];

export default routes;
