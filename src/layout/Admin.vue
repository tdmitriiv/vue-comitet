<template>
  <div class="layout w-full bg-gray-900 text-gray-400">
    <div class="flex h-full min-h-screen">
      <aside class="border border-gray-800">
        <div class="flex flex-col justify-between h-full">
          <div>
            <div class="text-white py-4 px-5 border-b-2 border-gray-800">
              <span class="font-bold text-sm">КМТТ Admin</span>
            </div>
            <div class="py-4">
              <div class="uppercase text-sm py-1 px-5 text-gray-600">Статистика</div>
              <a href="#" class="block py-1 px-5 text-sm">Публикации</a>
              <a href="#" class="block py-1 px-5 text-sm">Мессенджер</a>
            </div>
            <div class="py-4">
              <a href="#" class="block py-1 px-5 text-sm">Подписка на еженедельную рассылку</a>
            </div>
            <div class="py-4">
              <div class="uppercase text-sm py-1 px-5 text-gray-600">Списки данных</div>
              <a
                href="#"
                class="block py-1 px-5 text-sm bg-white bg-opacity-10"
              >
                Доступные города
              </a>
            </div>
          </div>
          <div class="flex px-6 text-sm">
            <LayersIcon class="text-gray-600 mr-6" />
            Библиотека компонентов
          </div>
        </div>
      </aside>
      <main class="w-3/4 px-10 py-6">
        <slot />
      </main>
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
  aside {
    width: 100%;
    max-width: 300px;
  }
</style>
