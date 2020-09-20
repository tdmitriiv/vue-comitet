import { Vue } from 'vue-property-decorator';
export default class AppTableCellLink extends Vue {
    /**
     * Значение ячейки
     */
    readonly value: string | number;
    /**
     * Ссылка ячейки
     */
    readonly link: string;
}
