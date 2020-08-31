<template>
  <div class="layout w-full bg-gray-900 text-gray-400 font-sans">
    <div class="flex h-full min-h-screen">
      <Navigation />
      <main class="w-3/4 px-10 py-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>
  aside {
    width: 100%;
    max-width: 300px;
  }
</style>
