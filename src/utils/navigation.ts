import {
	NavigationGroup,
	NavigationItem,
	NavigationPage,
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

/**
 * Функция возвращает объект страницы в искомом разделе по полю url
 * @param url - параметр маршрута страницы
 * @param group - раздел, в котором происходит поиск страницы
 */
const findGroupPageByUrl = (url: string, group: NavigationGroup): NavigationItem|undefined => {
	return group.items.find((groupItem) => groupItem.url === url);
};

/**
 * Функция возвращает данные страницы и её раздела по полю url искомой страницы
 * @param currentUrl - параметр маршрута страницы
 */
export const findPageInfoByUrl = (currentUrl: string): NavigationPage => {
	let page;

	const group = nav.find((group) => {
		page = findGroupPageByUrl(currentUrl, group);
		if (page) {
			return true
		}
	});

	return {
		page,
		group
	}
};
