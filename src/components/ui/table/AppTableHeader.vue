<template>
  <th class="border border-gray-700">
    <div class="flex items-center font-normal text-gray-600 text-left">
      <AppIcon
        v-if="col.icon"
        :icon="col.icon"
        size="16"
      />
      {{ col.name }}
    </div>
  </th>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TableHeader } from '@/types/tableTypes';
import AppIcon from '@/components/ui/AppIcon.vue';

@Component({
  components: {
    AppIcon,
  },
})
export default class AppTableHeader extends Vue {
  /**
   * Данные колонки заголовка таблицы
   */
  @Prop({})
  readonly col!: TableHeader
}
</script>

<style lang="scss" scoped>
  th {
    padding: 6px 9px;

    svg {
      margin-right: 5px;
    }
  }
</style>
