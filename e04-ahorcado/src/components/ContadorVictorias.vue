<template>
  <div>
    <ul>
      <li>Victorias: {{victorias}}</li>
      <li>Derrotas: {{derrotas}}</li>
    </ul>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      victorias: 0,
      derrotas: 0
    };
  },
  created() {
    bus.$on("PalabraCompletada", () => {
      this.victorias++;
    });
    bus.$on("Ahorcado", () => {
      this.derrotas++;
    });
  }
};
</script>

<style>
</style>