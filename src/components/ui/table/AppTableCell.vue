<template>
  <th class="border border-gray-800 border-r-0 px-4 py-2">
    <div class="flex items-center font-normal text-gray-600 text-left">
      <slot/>
    </div>
  </th>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppTableCell extends Vue {}
</script>

<style scoped>

</style>
