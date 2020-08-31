<template>
  <td class="border border-gray-700 px-4 py-2">
    <router-link
      :to="link"
      class="text-blue-500 inline-block border-b border-dashed border-blue-500"
    >
      {{ value }}
    </router-link>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AppTableCellLink extends Vue {
  /**
   * Значение ячейки
   */
  @Prop()
  readonly value!: string | number;

  /**
   * Ссылка ячейки
   */
  @Prop()
  readonly link!: string;
}
</script>

<style scoped>

</style>
