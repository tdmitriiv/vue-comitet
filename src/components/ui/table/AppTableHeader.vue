<template>
  <th
    class="border border-gray-700"
    v-bind="col.options"
  >
    <div class="flex items-center font-normal text-gray-600 text-left">
      <AppIcon
        v-if="col.icon"
        :icon="col.icon"
        size="24"
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
    svg {
      margin-right: .375rem;
    }
  }
</style>
