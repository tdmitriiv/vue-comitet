<template>
  <AdminLayout>
    <router-view />
  </AdminLayout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AdminLayout from '@/layout/Admin.vue';

@Component({
  components: {
    AdminLayout,
  },
})
export default class App extends Vue {
  test(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise');
    });
  }

  async beforeMount(): Promise<void> {
    const msg = await this.test();
    console.log(msg);
  }
}
</script>

<style lang="scss">
  @import "src/assets/index.scss";
</style>>
