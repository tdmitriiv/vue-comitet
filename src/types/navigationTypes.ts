/**
 * Доступны компоненты для содержимого
 */
export enum ComponentNames {
	Button = 'AppButton',
	Table = 'AppTable',
}

export interface ContentItem {
	/**
	 * Объект компонента содержимого страницы
	 */
	component: ComponentNames;

	/**
	 * Опции компонента
	 * см Props компонентов ComponentNames
	 */
	options: Record<string, any>;
}

/**
 * Группа представляет собой отдельный раздел в навигации с заголовком и пунктами меню
 * name - заголовок
 * items - пункты меню
 */
export interface NavigationGroup {
	/**
	 * Name - наименование раздела в навигации
	 */
	name: string;

	/**
	 * Items - содержит массив пунктов меню
	 */
	items: NavigationItem[];

	/**
	 * Bottom - расположение группы ссылок в нижней части навигации (ПК - версия)
	 */
	bottom?: boolean;
}

/**
 * Пункт меню
 */
export interface NavigationItem {
	/**
	 * Name - наименование пункта в навигации
	 */
	name: string;

	/**
	 * Url - параметр маршрута для vue-router
	 */
	url: string;

	/**
	 * Content - содержимое страницы, содержит либо строку, либо массив Компонентов
	 */
	content?: Array<ContentItem> | string | null;

	/**
	 * Icon - компонент иконки рядом с пунктом меню.
	 * список доступных иконок https://vue-feather-icons.egoist.sh/
	 */
	icon?: string;
}

/**
 * Объект данных страницы
 * page - объект страницы
 * group - текущий раздел страницы
 */
export interface NavigationPage {
	/**
	 * Page - объект содержащий информацию о странице
	 */
	page: NavigationItem | undefined;

	/**
	 * Group - объект содержащий информацию о текущем разделе
	 */
	group: NavigationGroup | undefined;
}
