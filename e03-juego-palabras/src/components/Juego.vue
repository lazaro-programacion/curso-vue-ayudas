<template>
  <div class="container">
    <h1>Elige las palabras</h1>
    <template v-if="!estado.comenzado">
      <div class="alert alert-danger" role="alert" v-if="estado.error">{{estado.error}}</div>
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        v-on:click="estado.comenzado = true"
      >Comenzar</button>
    </template>
    <template v-else>
      <div>Puntuacion actual: {{palabras.length}}</div>
      <addPalabra v-bind:palabras="palabras" v-bind:estado="estado"></addPalabra>

      <listaPalabras v-bind:palabras="palabras" />
    </template>
  </div>
</template>

<script>
import ListaPalabras from "./ListaPalabras";
import AddPalabra from "./AddPalabra";

export default {
  components: {
    listaPalabras: ListaPalabras,
    addPalabra: AddPalabra
  },
  data() {
    return {
      palabras: [],
      estado: {
        comenzado: false,
        error: null
      }
    };
  }
};
</script>

<style scoped>
</style>