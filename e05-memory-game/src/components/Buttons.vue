<template>
  <div>
    <button v-on:click="reset">Reiniciar</button>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  methods: {
    reset() {
      bus.$emit("NewGame");
    }
  }
};
</script>

<style>
</style>