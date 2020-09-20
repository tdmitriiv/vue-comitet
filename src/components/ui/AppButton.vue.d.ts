import { Vue } from 'vue-property-decorator';
/**
 * Компонент кнопки
 * <AppButton title="Кнопка" :events="{ click: () => {}">
 */
export default class AppButton extends Vue {
    /**
     * Title - текст кнопки
     */
    readonly title: string;
    /**
     * Events - объект, содержащий события кнопки
     */
    readonly events: Record<string, () => void>;
}
