<template>
  <div class="pt-4">
    <div
      v-for="(group, index) in navGroups"
      :key="index"
      class="pb-2"
    >
      <div
        v-if="group.name"
        class="uppercase font-medium py-2 px-5 text-gray-600 groupName"
      >
        {{ group.name }}
      </div>
      <router-link
        v-for="(navLink, linkIndex) in group.items"
        :key="linkIndex"
        :to="`/${navLink.url}`"
        :class="{ 'bg-white bg-opacity-10': navLink.url === currentPageUrl }"
        class="flex text-sm groupLink"
      >
        <AppIcon
          v-if="navLink.icon"
          :icon="navLink.icon"
          class="text-gray-600 mr-3"
          size="24"
        />
        {{ navLink.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavigationGroup } from '@/types/navigationTypes';
import AppIcon from '@/components/ui/AppIcon.vue';

/**
 * Компонент выводит разделы навигации,
 * которые передаются через свойство navGroups
 */
@Component({
  components: {
    AppIcon,
  },
})
export default class NavigationList extends Vue {
  /**
   * NavGroups - список разделов навигации
   */
  @Prop()
  readonly navGroups!: NavigationGroup[];

  /**
   * Свойство возвращает url текущей страницы
   */
  get currentPageUrl(): string | undefined {
    return this.$route.params.url;
  }
}
</script>

<style scoped>
  .groupName {
    padding: 4px 19px 6px;
    font-size: 13px;
    letter-spacing: 1.1px;
  }
  .groupLink {
    padding: 4px 19px;
  }
</style>
