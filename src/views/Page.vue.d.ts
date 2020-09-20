import { Vue } from 'vue-property-decorator';
import { NavigationGroup, NavigationItem } from '@/types/navigationTypes';
export default class Home extends Vue {
    /**
     * Объект текущей страницы
     */
    page: NavigationItem | null;
    /**
     * Объект текущего раздела страницы
     */
    group: NavigationGroup | null;
    /**
     * Свойство возвращает url текущей страницы
     */
    get currentPageUrl(): string | undefined;
    /**
     * Свойство проверяет является ли содержимое страницы массивом
     */
    get isPageContentComplex(): boolean;
    /**
     * Watcher обновляет информацию о странице и разделе,
     * в зависимости от параметра name текущего маршрута
     *
     * @param url - значение параметра маршрута страницы
     * @param oldUrl - предыдущее значение параметра маршрута страницы
     */
    getCurrentPageInfo(url: string | undefined, oldUrl: string | undefined): void;
}
