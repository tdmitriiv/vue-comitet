<template>
  <div class="layout w-full bg-gray-900 text-gray-400 font-sans">
    <div class="md:flex h-full min-h-screen">
      <Navigation />
      <main class="w-full">
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
  main {
    padding: 2.625rem 3.375rem;
  }

  aside {
    width: 100%;

    @media (min-width: theme('screens.md')) {
      max-width: 400px;
    }
  }
</style>
