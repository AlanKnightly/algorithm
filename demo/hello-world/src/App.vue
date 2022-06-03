<template>
  <div id="app" @click="click">{{ num }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  },
  onMounted() {
    this.$nextTick().then(() => console.log("set at mounted"));
  },
  methods: {
    click() {
      const trackNum = this.num++;
      this.$nextTick().then((r) => {
        console.log("r:", r);
        console.log(`set at num:${trackNum}`);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
