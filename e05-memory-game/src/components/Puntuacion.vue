<template>
  <div>
    <div>Movimientos: {{movimientos}}</div>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      movimientos: 0
    };
  },
  created() {
    bus.$on("Movimiento", () => this.movimientos++);
    bus.$on("NewGame", () => (this.movimientos = 0));
  }
};
</script>

<style>
</style>