<template>
  <div>
    <h1>Hello <span>World</span>!</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    test() {
      return new Promise((resolve) => {
        resolve('promise')
      })
    }
  },
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
