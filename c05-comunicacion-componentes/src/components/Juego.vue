<template>
  <div class="container">
    <h1>Elige las palabras</h1>
    <template v-if="!comenzado">
      <div class="alert alert-danger" role="alert" v-if="error">{{error}}</div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        v-on:click="comenzado = true"
      >Comenzar</button>
    </template>
    <template v-else>
      <div>Puntuacion actual: {{palabras.length}}</div>
      <addPalabra
        v-bind:palabras="palabras"
        v-bind:setComenzado="setComenzado"
        v-on:error:palabras="manejarError"
      ></addPalabra>

      <listaPalabras v-bind:palabras="palabras" />
    </template>
  </div>
</template>

<script>
import ListaPalabras from "./ListaPalabras";
import AddPalabra from "./AddPalabra";
import bus from "../bus";

export default {
  components: {
    listaPalabras: ListaPalabras,
    addPalabra: AddPalabra
  },
  data() {
    return {
      palabras: [],
      comenzado: false,
      error: null
    };
  },
  methods: {
    setComenzado(nuevoComenzado) {
      this.comenzado = nuevoComenzado;
    },
    manejarError(event) {
      this.error = event;
    }
  },
  created() {
    bus.$on("add:palabra", event => {
      this.palabras.push(event);
      bus.$emit("added:palabra", event);
    });
  }
};
</script>

<style scoped>
</style>