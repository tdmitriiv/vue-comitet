<template>
  <td>
    <div
      class="font-normal text-center text-gray-600 text-left relative"
      @mouseenter="isOpen = true"
      @mouseout="isOpen = false"
    >
      <MoreHorizontalIcon class="inline-block" />
      <div
        v-if="isOpen"
        class="absolute inset-x-auto mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10"
      >
        <a
          v-for="(item, index) in value"
          :key="index"
          href="#"
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MoreHorizontalIcon } from 'vue-feather-icons';

@Component({
  components: {
    MoreHorizontalIcon,
  },
})
export default class AppTableCellDropdown extends Vue {
  /**
   * Переключатель отображения выпадающего меню
   */
  isOpen = false;

  @Prop()
  readonly value!: string[];
}
</script>

<style scoped>

</style>
