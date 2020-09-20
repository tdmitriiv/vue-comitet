import { Vue } from 'vue-property-decorator';
export default class AppCheckbox extends Vue {
    /**
     * Размер иконки чекбокса
     */
    size: string;
    /**
     * Состояние активности чекбокса
     */
    checked: boolean;
}
