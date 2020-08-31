<template>
  <div>
    <button
      class="text-white bg-blue-500 hover:bg-blue-700 text-sm px-5 py-2 rounded-md"
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

</style>
