<template>
  <td class="border border-gray-700 px-4 py-2">
    <div class="flex items-center font-normal text-gray-600 text-left">
      {{ value ? 'Активен' : 'Отключен' }}
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AppTableCellBoolean extends Vue {
  /**
   * Значение ячейки
   */
  @Prop()
  readonly value!: boolean;
}
</script>

<style scoped>

</style>
