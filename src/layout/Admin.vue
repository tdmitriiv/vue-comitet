<template>
  <div class="layout w-full bg-gray-900 text-gray-400">
    <div class="flex h-full min-h-screen">
      <div class="w-1/4 border border-gray-800">
        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="text-white py-4 px-5 border-b-2 border-gray-800">
              <span class="font-bold">КМТТ Admin</span>
            </div>
            <div class="py-4">
              <div>Навигация</div>
            </div>
          </div>
          <div class="flex px-6">
            <LayersIcon class="text-gray-600 mr-6" />
            Библиотека компонентов
          </div>
        </div>
      </div>
      <div class="w-3/4">
        Контент
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { LayersIcon } from 'vue-feather-icons';

@Component({
  components: {
    LayersIcon,
  },
})
export default class Admin extends Vue {}
</script>

<style lang="scss" scoped>

</style>
