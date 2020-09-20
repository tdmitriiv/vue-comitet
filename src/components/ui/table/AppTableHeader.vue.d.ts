import { Vue } from 'vue-property-decorator';
import { TableHeader } from '@/types/tableTypes';
export default class AppTableHeader extends Vue {
    /**
     * Данные колонки заголовка таблицы
     */
    readonly col: TableHeader;
}
