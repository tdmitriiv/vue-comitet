import { Vue } from 'vue-property-decorator';
import { TableHeader } from '@/types/tableTypes';
/**
 * Базовый компонент таблицы
 * <AppTable
 *  :tableHeaders="[]"
 *  :tableData="[]"
 *  title="Заголовок"
 *  searchField="name"
 * />
 */
export default class AppTable extends Vue {
    /**
     * Значение строки поиска
     */
    search: string;
    /**
     * Массив заголовков таблицы
     */
    readonly tableHeaders: TableHeader[];
    /**
     * Массив элементов таблицы
     */
    readonly tableData: Record<string, any>[];
    /**
     * Заголовок таблицы
     */
    readonly title: string;
    /**
     * Значение поля, по которому осуществляется поиск среди элементов таблицы
     */
    readonly searchField: string;
    /**
     * Отфильтрованные элементы таблицы по полю searchField,
     * в которых содержится значение search
     */
    get filteredTableData(): Record<string, any>[];
}
