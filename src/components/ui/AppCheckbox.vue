<template>
  <div
    class="checkbox rounded text-white flex items-center justify-center border"
    :class="[
      checked ? 'checkbox-active border-transparent' : 'border-gray-600',
    ]"
  >
    <CheckIcon
      v-if="checked"
      :size="size"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CheckIcon } from 'vue-feather-icons';

@Component({
  components: {
    CheckIcon,
  },
})
export default class AppCheckbox extends Vue {
  /**
   * Размер иконки чекбокса
   */
  @Prop({ default: '16' })
  size!: string;

  /**
   * Состояние активности чекбокса
   */
  @Prop({ default: false })
  checked!: boolean;
}
</script>

<style lang="scss" scoped>
  .checkbox {
    width: 24px;
    height: 24px;
    margin-right: .375rem;
    margin-left: .125rem;

    &-active {
      background: linear-gradient(
        0deg,
        rgba(63,178,0,1) 0%,
        rgba(69,193,4,1) 76%,
        rgba(69,193,4,1) 90%,
        rgba(255,255,255,1) 95%,
        rgba(63,178,0,1) 98%,
        rgba(63,178,0,1) 100%
      )
    }
  }
</style>
