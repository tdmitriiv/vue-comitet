<template>
  <aside class="border border-gray-800">
    <div class="flex items-center text-white border-b-2 border-gray-800 logoWrapper">
      <MenuIcon
        @click="isVisibleMobileNav = !isVisibleMobileNav"
        class="md:hidden mr-4 cursor-pointer"
        size="24"
      />
      <Logo
        max-width="34"
        max-height="34"
        class="logo"
      />
      <span class="inline-block font-bold text-xl leading-none">КМТТ admin</span>
    </div>
    <div
      class="navigation bg-gray-900 flex flex-col justify-between"
      :class="{
        'navigation-active': isVisibleMobileNav,
      }"
    >
      <div>
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
import { MenuIcon } from 'vue-feather-icons';
import { NavigationGroup } from '@/types/navigationTypes';
import { nav } from '@/utils/navigation';
import NavigationList from '@/components/layout/NavigationList.vue';
import Logo from './Logo.vue';

@Component({
  components: {
    Logo,
    NavigationList,
    MenuIcon,
  },
})
export default class Menu extends Vue {
  readonly navGroups: NavigationGroup[] = nav;

  /**
   * Состояние видимости мобильной навигации
   */
  isVisibleMobileNav = false;

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
    padding: 1.25rem 1.625rem;
  }

  .logo {
    margin-right: .875rem;
    border-radius: .375rem;
  }

  .navigation {
    height: calc(100% - 76px);
    position: fixed;
    left: -420px;
    transition: left 0.5s ease;

    &-active {
      left: 0;
    }

    @apply border-r border-gray-800;

    @media (min-width: theme('screens.md')) {
      border: 0;
      height: 100%;
      position: static;
      transform: none;
    }
  }
</style>
