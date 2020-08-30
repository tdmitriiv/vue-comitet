import {
	NavigationGroup,
} from '@/types/navigationTypes';
import { LayersIcon } from 'vue-feather-icons';

export const nav:NavigationGroup[] = [
	{
		name: 'Статистика',
		items: [
			{
				name: 'Публикации',
				url: 'publications',
				content: ''
			},
			{
				name: 'Мессенджер',
				url: 'messenger',
				content: ''
			},
		],
	},
	{
		name: '',
		items: [
			{
				name: 'Подписка на еженедельную рассылку',
				url: 'subscribtion',
				content: ''
			}
		]
	},
	{
		name: 'Списки данных',
		items: [
			{
				name: 'Доступные города',
				url: 'cities',
				content: ''
			}
		]
	},
	{
		name: '',
		items: [
			{
				name: 'Библиотека компонентов',
				url: 'components',
				icon: LayersIcon,
			},
		],
		bottom: true,
	}
];
