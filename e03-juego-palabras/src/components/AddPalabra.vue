<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      v-model="palabra"
      v-on:keyup.enter="addPalabra"
    />
    <button class="btn btn-primary" type="button" v-on:click="addPalabra">Añadir</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      palabra: ""
    };
  },
  props: ["palabras", "estado"],
  methods: {
    addPalabra() {
      if (this.palabras.length > 0) {
        const ultimaPalabra = this.palabras[this.palabras.length - 1];
        if (
          ultimaPalabra.charAt(ultimaPalabra.length - 1) !==
          this.palabra.charAt(0)
        ) {
          console.log("changing error state");
          this.estado.error =
            "Has fallado. Puntuación total: " + this.palabras.length;
          this.estado.comenzado = false;
          this.palabras.length = 0;
          return;
        }
      }
      this.palabras.push(this.palabra);
      this.palabra = "";
    }
  }
};
</script>

<style>
</style>
