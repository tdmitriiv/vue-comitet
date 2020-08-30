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
        <NavigationList :nav-groups="mainNavGroups" />
      </div>
      <div>
        <NavigationList :nav-groups="bottomNavGroups" />
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { NavigationGroup } from '@/types/navigationTypes';
import { nav } from '@/utils/navigation';
import NavigationList from '@/components/layout/NavigationList.vue';
import Logo from './Logo.vue';

@Component({
  components: {
    Logo,
    NavigationList,
  },
})
export default class Menu extends Vue {
  readonly navGroups: NavigationGroup[] = nav;

  /**
   * Основная навигация, выводится вверху боковой панели
   */
  get mainNavGroups(): NavigationGroup[] {
    return this.navGroups.filter((group) => !group.bottom);
  }

  /**
   * Дополнительная навигация, которая располагается внизу боковой панели
   */
  get bottomNavGroups(): NavigationGroup[] {
    return this.navGroups.filter((group) => group.bottom);
  }
}
</script>

<style scoped>

</style>
