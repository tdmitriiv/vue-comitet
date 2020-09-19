<template>
  <div class="flex items-center font-normal text-gray-600 text-left">
    {{ value }}
  </div>
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
