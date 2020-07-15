<template>
  <div id="app">
    <div>
      Número de columnas:
      <select v-model="ncols">
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>
    </div>
    <memory-game :columns="parseInt(ncols)" />
  </div>
</template>

<script>
import memoryGame from "./components/MemoryGame";
export default {
  name: "App",
  data() {
    return {
      ncols: 4
    };
  },
  components: {
    memoryGame
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
</style>
