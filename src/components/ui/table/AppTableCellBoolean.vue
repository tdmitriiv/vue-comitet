<template>
  <td>
    <div class="flex items-center font-normal text-gray-600 text-left">
      <AppCheckbox
        :checked="value"
      />
      {{ value ? 'Активен' : 'Отключен' }}
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AppCheckbox from '@/components/ui/AppCheckbox.vue';

@Component({
  components: {
    AppCheckbox,
  },
})
export default class AppTableCellBoolean extends Vue {
  /**
   * Значение ячейки
   */
  @Prop()
  readonly value!: boolean;
}
</script>

<style scoped>

</style>
