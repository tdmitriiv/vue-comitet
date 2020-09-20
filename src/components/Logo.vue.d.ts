import Vue from 'vue';
/**
 * Компонент вывода логотипа
 */
export default class Logo extends Vue {
    /**
     * Максимальная ширина логотипа. Атрибут изменяет свойство max-width
     */
    readonly maxWidth: number;
    /**
     * Максимальная высота логотипа. Атрибут изменяет свойство max-height
     */
    readonly maxHeight: number;
}
