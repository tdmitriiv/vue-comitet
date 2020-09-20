<template>
  <div>
    <div class="group__name text-xl leading-7 mb-2" v-if="group">
      {{ group.name }}
    </div>
    <template v-if="page">
      <h1 class="font-bold text-3xl leading-10 mb-10">
        {{ page.name }}
      </h1>
      <section>
        <template v-if="isPageContentComplex">
          <component
            :is="element.component"
            v-for="(element, index) in page.content"
            :key="index"
            v-bind="element.options"
          />
        </template>
        <div v-else>
          {{ page.content }}
        </div>
      </section>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import {
  NavigationGroup,
  NavigationItem,
} from '@/types/navigationTypes';
import { findPageInfoByUrl } from '@/utils/navigation';
import AppButton from '@/components/ui/AppButton.vue';
import AppTable from '@/components/ui/table/AppTable.vue';

@Component({
  components: {
    AppButton,
    AppTable,
  },
})
export default class Home extends Vue {
  /**
   * Объект текущей страницы
   */
  page: NavigationItem | null = null;

  /**
   * Объект текущего раздела страницы
   */
  group: NavigationGroup | null = null;

  /**
   * Свойство возвращает url текущей страницы
   */
  get currentPageUrl(): string | undefined {
    return this.$route.params.url;
  }

  /**
   * Свойство проверяет является ли содержимое страницы массивом
   */
  get isPageContentComplex(): boolean {
    return Array.isArray(this.page?.content);
  }

  /**
   * Watcher обновляет информацию о странице и разделе,
   * в зависимости от параметра name текущего маршрута
   *
   * @param url - значение параметра маршрута страницы
   * @param oldUrl - предыдущее значение параметра маршрута страницы
   */
  @Watch('currentPageUrl', { immediate: true })
  getCurrentPageInfo(url: string | undefined, oldUrl: string | undefined): void {
    if (url && url !== oldUrl) {
      const { page, group } = findPageInfoByUrl(url);
      if (page && group) {
        this.page = page;
        this.group = group;
      }
    }
  }
}
</script>

<style scoped>
  .group__name { margin-bottom: .375rem; }
</style>
