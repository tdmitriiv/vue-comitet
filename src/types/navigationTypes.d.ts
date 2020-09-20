/**
 * Доступны компоненты для содержимого
 */
export declare enum ComponentNames {
    Button = "AppButton",
    Table = "AppTable"
}
export interface ContentItem {
    /**
     * Объект компонента содержимого страницы
     */
    component: ComponentNames;
    /**
     * <pre>
     * Опции компонента
     * см Props компонентов ComponentNames
     * </pre>
     */
    options: Record<string, any>;
}
/**
 * <pre>
 * Группа представляет собой отдельный раздел в навигации с заголовком и пунктами меню
 * name - заголовок
 * items - пункты меню
 * </pre>
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
     * <pre>
     * Icon - компонент иконки рядом с пунктом меню.
     * список доступных иконок https://vue-feather-icons.egoist.sh/
     * </pre>
     */
    icon?: string;
    /**
     * атрибуты пункта меню
     */
    options: NavigationItemOptions;
}
/**
 * <pre>
 * Объект данных страницы
 * page - объект страницы
 * group - текущий раздел страницы
 * </pre>
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
/**
 * Атрибуты пункта меню
 */
export interface NavigationItemOptions {
    /**
     * css класс пункта меню
     */
    class?: string;
}
