<template>
  <div id="app">
    <tetris />
  </div>
</template>

<script>
import tetris from "./components/Tetris";

export default {
  name: "App",
  components: {
    tetris
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
