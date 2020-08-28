<template>
  <AdminLayout>
    <div>Списки данных</div>
    <h1 class="text-xl font-bold mb-6">
      Управление пользователями
    </h1>
    <section>
      <div>
        <h4>Список пользователей</h4>
      </div>
      <table class="table-auto w-full">
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
            <td class="border border-gray-800 px-4 py-2">Alex stone</td>
            <td class="border border-gray-800 px-4 py-2">alexstone.greatsoul@gmail.com</td>
            <td class="border border-gray-800 px-4 py-2">Активен</td>
            <td class="border border-gray-800 border-r-0 px-4 py-2">test</td>
          </tr>
        </tbody>
      </table>
      <div class="text-white bg-blue-600 inline-block text-sm px-5 py-2 rounded-md">
        Добавить пользователя
      </div>
    </section>
  </AdminLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  ListIcon,
  UserIcon,
  AtSignIcon,
  InfoIcon,
  DiscIcon,
} from 'vue-feather-icons';
import AdminLayout from '@/layout/Admin.vue';

@Component({
  components: {
    AdminLayout,
    ListIcon,
    UserIcon,
    AtSignIcon,
    InfoIcon,
    DiscIcon,
  },
})
export default class App extends Vue {
  test(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise');
    });
  }

  async beforeMount() {
    const msg = await this.test();
    console.log(msg);
  }
}
</script>

<style lang="scss">
  @import "src/assets/index.scss";
</style>>
