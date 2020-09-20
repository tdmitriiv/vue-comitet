<template>
  <div class="pt-7">
    <div
      v-for="(group, index) in navGroups"
      :key="index"
      class="group"
      :class="{
        'group-nameless': !group.name && !checkIsGroupLast(index),
        'group-last': checkIsGroupLast(index),
      }"
    >
      <div
        v-if="group.name"
        class="uppercase font-medium py-2 px-5 text-lg text-gray-600 leading-6 group__name"
      >
        {{ group.name }}
      </div>
      <router-link
        v-for="(navLink, linkIndex) in group.items"
        :key="linkIndex"
        :to="`/${navLink.url}`"
        :class="[
          'flex items-center group__link',
          navLink.url === currentPageUrl ? 'bg-white bg-opacity-10' : '',
          navLink.options.class ? navLink.options.class : 'text-xl',
        ]"
      >
        <AppIcon
          v-if="navLink.icon"
          :icon="navLink.icon"
          class="text-gray-600 group__link__icon"
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

  /**
   * Метод проверяет является ли группа последней
   *
   * @param itemIndex - индекс массив групп
   */
  checkIsGroupLast(itemIndex: number): boolean {
    return itemIndex === this.navGroups.length - 1;
  }
}
</script>

<style lang="scss" scoped>
  .group {
    margin-bottom: 1.75rem;

    &-nameless {
      margin-bottom: 2.375rem;
    }

    &-last {
      margin-bottom: 1rem;
    }

    &__name {
      letter-spacing: .05em;
      margin-bottom: .375rem;
      padding: 0 1.625rem;
    }

    &__link {
      padding: .375rem 1.625rem;
      line-height: 1.875rem;

      &__icon {
        margin-right: 0.875rem;
      }
    }
  }
</style>
