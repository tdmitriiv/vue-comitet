import { Vue } from 'vue-property-decorator';
import { NavigationGroup } from '@/types/navigationTypes';
export default class Menu extends Vue {
    readonly navGroups: NavigationGroup[];
    /**
     * Состояние видимости мобильной навигации
     */
    isVisibleMobileNav: boolean;
    /**
     * Основная навигация, выводится вверху боковой панели
     */
    get mainNavGroups(): NavigationGroup[];
    /**
     * Дополнительная навигация, которая располагается внизу боковой панели
     */
    get bottomNavGroups(): NavigationGroup[];
}
