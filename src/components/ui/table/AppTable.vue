<template>
  <div>
    <div class="flex items-center justify-between text-sm">
      <h4 class="font-medium inline-block">
        {{ title }}
      </h4>
      <div
        v-if="searchField"
        class="inline-flex items-center border border-gray-800 py-2 px-3 rounded-lg text-gray-600"
      >
        <SearchIcon
          size="16"
          class="mr-2"
        />
        <input
          v-model="search"
          class="bg-transparent appearance-none focus:outline-none placeholder-gray-600"
          type="text"
          placeholder="Поиск"
        >
      </div>
    </div>
    <table
      class="table-auto w-full"
      v-bind="$attrs"
    >
      <thead class="text-sm">
        <tr>
          <AppTableHeader
            v-for="(col, index) in tableHeaders"
            :key="index"
            :col="col"
          />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in filteredTableData"
          :key="rowIndex"
        >
          <component
            :is="col.component || 'AppTableCell'"
            v-for="(col, colIndex) in tableHeaders"
            :key="colIndex"
            :value="row[col.field]"
            :link="col.link"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SearchIcon } from 'vue-feather-icons';
import AppTableCell from '@/components/ui/table/AppTableCell.vue';
import AppTableCellLink from '@/components/ui/table/AppTableCellLink.vue';
import AppTableCellBoolean from '@/components/ui/table/AppTableCellBoolean.vue';
import AppTableCellDropdown from '@/components/ui/table/AppTableCellDropdown.vue';
import AppTableHeader from '@/components/ui/table/AppTableHeader.vue';
import { TableHeader } from '@/types/tableTypes';

/**
 * Базовый компонент таблицы
 * <AppTable
 *  :tableHeaders="[]"
 *  :tableData="[]"
 *  title="Заголовок"
 *  searchField="name"
 * />
 */
@Component({
  components: {
    AppTableCell,
    AppTableCellLink,
    AppTableCellBoolean,
    AppTableCellDropdown,
    AppTableHeader,
    SearchIcon,
  },
})
export default class AppTable extends Vue {
  /**
   * Значение строки поиска
   */
  search = '';

  /**
   * Массив заголовков таблицы
   */
  @Prop()
  readonly tableHeaders!: TableHeader[];

  /**
   * Массив элементов таблицы
   */
  @Prop()
  readonly tableData!: Record<string, any>[];

  /**
   * Заголовок таблицы
   */
  @Prop()
  readonly title!: string;

  /**
   * Значение поля, по которому осуществляется поиск среди элементов таблицы
   */
  @Prop()
  readonly searchField!: string;

  /**
   * Отфильтрованные элементы таблицы по полю searchField,
   * в которых содержится значение search
   */
  get filteredTableData(): Record<string, any>[] {
    return this.searchField
      ? this.tableData.filter((row) => row[this.searchField].includes(this.search))
      : this.tableData;
  }
}
</script>

<style scoped>

</style>
