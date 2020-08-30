<template>
  <div>
    <div
      v-for="(group, index) in navGroups"
      :key="index"
      class="py-4"
    >
      <div
        v-if="group.name"
        class="uppercase text-sm py-1 px-5 text-gray-600"
      >
        {{ group.name }}
      </div>
      <router-link
        v-for="(navLink, linkIndex) in group.items"
        :key="linkIndex"
        :to="`/${navLink.url}`"
        class="flex py-1 px-5 text-sm"
      >
        <AppIcon
          :icon="navLink.icon"
          v-if="navLink.icon"
          class="text-gray-600 mr-3"
          size="16"
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
}
</script>

<style scoped>

</style>
