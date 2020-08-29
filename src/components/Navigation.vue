<template>
  <aside class="border border-gray-800">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center text-white py-4 px-5 border-b-2 border-gray-800">
          <Logo
            max-width="20"
            max-height="20"
            class="mr-2"
          />
          <span class="inline-block font-bold text-sm leading-none">КМТТ Admin</span>
        </div>
        <div
          class="py-4"
          v-for="(group, index) in navGroups"
          :key="index"
        >
          <div class="uppercase text-sm py-1 px-5 text-gray-600">
            {{ group.name }}
          </div>
          <a
            class="block py-1 px-5 text-sm"
            :href="navLink.url"
            v-for="(navLink, linkIndex) in group.items"
            :key="linkIndex"
          >
            {{ navLink.name }}
          </a>
        </div>
      </div>
      <div class="flex px-6 text-sm">
        <LayersIcon class="text-gray-600 mr-6" />
        Библиотека компонентов
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { LayersIcon } from 'vue-feather-icons';
import { NavigationGroup } from '@/types/navigationTypes';
import { nav } from '@/utils/navigation';
import Logo from './Logo.vue';

@Component({
  components: {
    LayersIcon,
    Logo,
  },
})
export default class Menu extends Vue {
  readonly navGroups: NavigationGroup[] = nav;
}
</script>

<style scoped>

</style>
