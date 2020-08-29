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

@Component
export default class Logo extends Vue {
  @Prop({})
  readonly maxWidth!: number

  @Prop({})
  readonly maxHeight!: number
}
</script>

<style scoped>

</style>
