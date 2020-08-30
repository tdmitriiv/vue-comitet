<template>
  <button class="text-white bg-blue-500 hover:bg-blue-700 text-sm px-5 py-2 rounded-md">
    <slot>
      Button
    </slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {}
</script>

<style scoped>

</style>
