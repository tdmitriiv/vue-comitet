<template>
  <img
    src="@/assets/logo.jpg"
    alt="logo"
    :style="[
      maxWidth ? { maxWidth: `${maxWidth}px` } : {},
      maxHeight ? { maxHeight: `${maxHeight}px`} : {}
    ]"
  >
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

/**
 * Компонент вывода логотипа
 */
@Component
export default class Logo extends Vue {
  /**
   * Максимальная ширина логотипа. Атрибут изменяет свойство max-width
   */
  @Prop({})
  readonly maxWidth!: number

  /**
   * Максимальная высота логотипа. Атрибут изменяет свойство max-height
   */
  @Prop({})
  readonly maxHeight!: number
}
</script>

<style scoped>

</style>
