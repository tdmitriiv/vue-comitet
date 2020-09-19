<template>
  <a
    :href="`mailto:${value}`"
    class="inline-block underline text-gray-600"
  >
    {{ value }}
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AppTableCellMail extends Vue {
  /**
   * Значение ячейки
   */
  @Prop()
  readonly value!: string | number;
}
</script>

<style scoped>

</style>
