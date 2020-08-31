<template>
  <th class="border border-gray-800 border-l-0 px-4 py-2">
    <div class="flex items-center font-normal text-gray-600 text-left">
      <AppIcon
        v-if="col.icon"
        :icon="col.icon"
        size="16"
        class="mr-2"
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
  @Prop({})
  col!: TableHeader
}
</script>

<style scoped>

</style>
