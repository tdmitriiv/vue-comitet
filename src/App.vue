<template>
  <div>
    <h1>Hello <span>World</span>!</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  async beforeMount() {
    const msg = await this.test();
    console.log(msg);
  },
  methods: {
    test() {
      return new Promise((resolve) => {
        resolve('promise');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 18px;

    span {
      color: red;
    }
  }
</style>>
