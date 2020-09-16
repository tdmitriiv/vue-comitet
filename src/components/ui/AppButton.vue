<template>
  <div>
    <button
      class="text-xl text-white bg-blue-500 hover:bg-blue-700"
      v-bind="$attrs"
      v-on="events"
    >
      <slot>
        {{ title }}
      </slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * Компонент кнопки
 * <AppButton title="Кнопка" :events="{ click: () => {}">
 */
@Component
export default class AppButton extends Vue {
  /**
   * Title - текст кнопки
   */
  @Prop({ default: 'Button' })
  readonly title!: string;

  /**
   * Events - объект, содержащий события кнопки
   */
  @Prop({ default: () => ({}) })
  readonly events!: Record<string, () => void>;
}
</script>

<style scoped>
  button {
    border-radius: 1.125rem;
    padding: .75rem 1.25rem;
    line-height: 1.875rem;
    box-shadow: 0 6px 18px rgba(19, 69, 166, 0.46);
  }
</style>
