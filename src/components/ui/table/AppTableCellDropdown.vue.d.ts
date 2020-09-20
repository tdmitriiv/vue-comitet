import { Vue } from 'vue-property-decorator';
export default class AppTableCellDropdown extends Vue {
    /**
     * Переключатель отображения выпадающего меню
     */
    isOpen: boolean;
    readonly value: string[];
}
