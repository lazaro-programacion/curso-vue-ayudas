<template>
  <div id="app">
    <h1>Vue Game Development</h1>

    <memory-game :columns="4" />
  </div>
</template>

<script>
import MemoryGame from "./components/MemoryGame";

export default {
  name: "App",
  components: {
    memoryGame: MemoryGame
  }
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

.game-wrapper {
  text-align: center;
}
</style>
