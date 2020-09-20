<template>
  <aside class="border border-gray-800 relative z-10">
    <div class="flex items-center text-white border-b-2 border-gray-800 logoWrapper">
      <MenuIcon
        class="lg:hidden mr-4 cursor-pointer"
        size="24"
        @click="isVisibleMobileNav = !isVisibleMobileNav"
      />
      <Logo
        max-width="34"
        max-height="34"
        class="logo"
      />
      <div class="inline-flex flex-grow justify-between font-bold text-xl leading-none">
        КМТТ admin
        <ChevronDownIcon size="24" />
      </div>
    </div>
    <div
      :class="[isVisibleMobileNav ? 'fixed bg-opacity-10' : 'static bg-opacity-0']"
      class="overlay w-full bg-white transition-all duration-300 ease-in lg:bg-transparent lg:static"
      @click="isVisibleMobileNav = false"
    >
      <div
        class="navigation fixed bg-gray-900 flex flex-col justify-between lg:static"
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
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { MenuIcon, ChevronDownIcon } from 'vue-feather-icons';
import { NavigationGroup } from '@/types/navigationTypes';
import { nav } from '@/utils/navigation';
import NavigationList from '@/components/layout/NavigationList.vue';
import Logo from './Logo.vue';

@Component({
  components: {
    Logo,
    NavigationList,
    MenuIcon,
    ChevronDownIcon,
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

  .overlay,
  .navigation {
    height: calc(100% - 76px);
  }

  .navigation {
    left: -420px;

    &-active {
      left: 0;
    }

    @apply border-r border-gray-800;

    @media (min-width: theme('screens.lg')) {
      border: 0;
      left: 0;
      height: 100%;
      transform: none;
    }
  }
</style>
