import { Vue } from 'vue-property-decorator';
import { NavigationGroup } from '@/types/navigationTypes';
/**
 * Компонент выводит разделы навигации,
 * которые передаются через свойство navGroups
 */
export default class NavigationList extends Vue {
    /**
     * NavGroups - список разделов навигации
     */
    readonly navGroups: NavigationGroup[];
    /**
     * Свойство возвращает url текущей страницы
     */
    get currentPageUrl(): string | undefined;
    /**
     * Метод проверяет является ли группа последней
     *
     * @param itemIndex - индекс массив групп
     */
    checkIsGroupLast(itemIndex: number): boolean;
}
