<template>
  <div>
    <div>
      Letras:
      <input type="text" v-model="letras" v-on:keyup="onLetra($event)" />
    </div>
  </div>
</template>

<script>
import bus from "../bus";

export default {
  data() {
    return {
      letras: ""
    };
  },
  methods: {
    onLetra(event) {
      console.log(event);
      bus.$emit("NuevaLetra", event.key.toUpperCase());
    }
  },
  created() {
    bus.$on("Ahorcado", () => {
      this.letras = "";
    });
    bus.$on("PalabraCompletada", () => {
      this.letras = "";
    });
  }
};
</script>

<style>
</style>