<template>
  <div>
    <img
      src="./assets/logo.png"
      alt="vue logo"
    >
    <h1>Hello <span>World</span>!</h1>
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
  h1 {
    font-size: 18px;

    span {
      color: red;
    }
  }
</style>>
