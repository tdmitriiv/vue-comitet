<template>
  <aside class="border border-gray-800">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="flex items-center text-white border-b-2 border-gray-800 logoWrapper">
          <Logo
            max-width="25"
            max-height="25"
            class="logo rounded"
          />
          <span class="inline-block font-bold text-sm leading-none">КМТТ admin</span>
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
  .logoWrapper {
    padding: 15px 20px;
  }

  .logo {
    margin-right: 10px;
  }
</style>
