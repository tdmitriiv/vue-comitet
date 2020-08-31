<template>
  <table class="table-auto w-full" v-bind="$attrs">
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
        v-for="(row, rowIndex) in tableData"
        :key="rowIndex"
      >
        <AppTableCell
          v-for="(col, colIndex) in tableHeaders"
          :key="colIndex"
        >
          {{ row[col.field] }}
        </AppTableCell>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppTableCell from '@/components/ui/table/AppTableCell.vue';
import AppTableHeader from '@/components/ui/table/AppTableHeader.vue';
import { TableHeader } from '@/types/tableTypes';

@Component({
  components: {
    AppTableCell,
    AppTableHeader,
  },
})
export default class AppTable extends Vue {
  @Prop()
  tableHeaders!: Array<TableHeader>;

  @Prop()
  tableData!: Record<string, any>[];

  // @Prop({ type: Array })
  // readonly tableData: Record<string, any>[];
}
</script>

<style scoped>

</style>
