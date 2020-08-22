<template>
  <div>
    <img
      src="./assets/logo.png"
      alt="vue logo"
    >
    <h1 class="text-lg">
      Hello <span class="text-red-900">World</span>!
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  test(): Promise<string> {
    return new Promise((resolve) => {
      resolve('promise');
    });
  }

  async beforeMount() {
    const msg = await this.test();
    console.log(msg);
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/index.scss";
</style>>
