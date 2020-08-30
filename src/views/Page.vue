<template>
  <div>
    <div>{{ group.name }}</div>
    <h1 class="text-xl font-bold mb-6">
      {{ page.name }}
    </h1>
    <section>
      <div class="flex items-center justify-between text-sm">
        <h4 class="font-medium inline-block">
          Список пользователей
        </h4>
        <div class="inline-flex items-center border border-gray-800 py-2 px-3 rounded-lg text-gray-600">
          <SearchIcon
            size="16"
            class="mr-2"
          />
          <input
            class="bg-transparent appearance-none focus:outline-none placeholder-gray-600"
            type="text"
            placeholder="Поиск"
          >
        </div>
      </div>
      <table class="table-auto w-full mb-4">
        <thead class="text-sm">
        <tr>
          <th
            class="border border-gray-800 border-l-0 px-4 py-2"
          >
            <div class="flex items-center font-normal text-gray-600 text-left">
              <ListIcon
                size="16"
                class="mr-2"
              />
              ID
            </div>
          </th>
          <th class="border border-gray-800 px-4 py-2">
            <div class="flex items-center font-normal text-gray-600 text-left">
              <UserIcon
                size="16"
                class="mr-2"
              />
              Имя
            </div>
          </th>
          <th class="border border-gray-800 px-4 py-2">
            <div class="flex items-center font-normal text-gray-600 text-left">
              <AtSignIcon
                size="16"
                class="mr-2"
              />
              Email
            </div>
          </th>
          <th class="border border-gray-800 px-4 py-2">
            <div class="flex items-center font-normal text-gray-600 text-left">
              <InfoIcon
                size="16"
                class="mr-2"
              />
              Статус
            </div>
          </th>
          <th class="border border-gray-800 border-r-0 px-4 py-2">
            <div class="flex items-center font-normal text-gray-600 text-left">
              <DiscIcon
                size="16"
                class="mr-2"
              />
              Действия
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="text-sm">
        <tr>
          <td class="border border-gray-800 border-l-0 px-4 py-2">
            <a
              href="#"
              class="text-blue-500 inline-block border-b border-dashed border-blue-500"
            >
              56723
            </a>
          </td>
          <td class="border border-gray-800 px-4 py-2">
            Alex stone
          </td>
          <td class="border border-gray-800 px-4 py-2">
            alexstone.greatsoul@gmail.com
          </td>
          <td class="border border-gray-800 px-4 py-2">
            Активен
          </td>
          <td class="border border-gray-800 border-r-0 px-4 py-2">
            test
          </td>
        </tr>
        </tbody>
      </table>
      <div class="text-white bg-blue-600 inline-block text-sm px-5 py-2 rounded-md">
        Добавить пользователя
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import {
  AtSignIcon,
  DiscIcon,
  InfoIcon,
  ListIcon,
  SearchIcon,
  UserIcon,
} from 'vue-feather-icons';
import {
  NavigationGroup,
  NavigationItem,
} from '@/types/navigationTypes';
import { findPageInfoByUrl } from '@/utils/navigation';

@Component({
  components: {
    ListIcon,
    UserIcon,
    AtSignIcon,
    InfoIcon,
    DiscIcon,
    SearchIcon,
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
   * Watcher обновляет информацию о странице и разделе,
   * в зависимости от параметра name текущего маршрута
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

</style>
