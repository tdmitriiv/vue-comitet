<template>
  <div>
    <div class="table__header flex items-center justify-between text-sm">
      <h4 class="font-bold inline-block text-xl leading-6">
        {{ title }}
      </h4>
      <div
        v-if="searchField"
        class="searchInput inline-flex items-center border border-gray-800 text-gray-600"
      >
        <SearchIcon
          size="18"
          class="mr-2"
        />
        <input
          v-model="search"
          class="bg-transparent appearance-none focus:outline-none placeholder-gray-600 text-xl leading-6"
          type="text"
          placeholder="Поиск"
        >
      </div>
    </div>
    <table
      class="table-auto w-full"
      v-bind="$attrs"
    >
      <thead class="text-xl hidden md:table-header-group">
        <tr>
          <AppTableHeader
            v-for="(col, index) in tableHeaders"
            :key="index"
            :col="col"
            class="tableCell"
            :class="{
              'md:border-l-0': index === 0,
              'md:border-r-0': index === tableHeaders.length - 1,
            }"
          />
        </tr>
      </thead>
      <tbody class="text-lg">
        <tr
          v-for="(row, rowIndex) in filteredTableData"
          :key="rowIndex"
          class="mb-5 block md:mb-0 md:table-row"
        >
          <td
            v-for="(col, colIndex) in tableHeaders"
            :key="colIndex"
            :class="{
              'md:border-l-0': colIndex === 0,
              'md:border-r-0': colIndex === tableHeaders.length - 1,
              'tableCell block border border-gray-700 w-full md:w-auto md:table-cell': true,
            }"
          >
            <div class="flex md:block">
              <div class="block md:hidden w-1/3">
                {{ col.name }}:
              </div>
              <component
                :is="col.component || 'AppTableCell'"
                :value="row[col.field]"
                :link="col.link"
              />
            </div>
          </td>
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
import AppTableCellMail from '@/components/ui/table/AppTableCellMail.vue';
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
    AppTableCellMail,
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

<style lang="scss" scoped>
  .table__header {
    margin-bottom: 7px;
  }

  .searchInput {
    padding: 4px 13px;
    border-radius: 17px;

    input {
      max-width: 220px;
    }
  }

  .tableCell {
    padding: .625rem .625rem;
  }
</style>
