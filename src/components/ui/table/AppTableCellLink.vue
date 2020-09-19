<template>
  <router-link
    :to="link"
    class="text-blue-500 inline-block border-b border-dashed border-blue-500"
  >
    {{ value }}
  </router-link>
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
