<template>
  <td class="border border-gray-800 border-r-0 px-4 py-2">
    <div class="flex items-center font-normal text-gray-600 text-left">
      {{ value }}
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class AppTableCell extends Vue {
  @Prop()
  readonly value: any;
}
</script>

<style scoped>

</style>
