import { NavigationGroup, NavigationPage } from '@/types/navigationTypes';
export declare const nav: NavigationGroup[];
/**
 * Функция возвращает данные страницы и её раздела по полю url искомой страницы
 *
 * @param currentUrl - параметр маршрута страницы
 */
export declare const findPageInfoByUrl: (currentUrl: string) => NavigationPage;
