<template>
  <div class="ahorcado-container">
    <h1>Ahorcado</h1>
    <contadorVictorias />
    <vidas />
    <palabra :palabra="palabra" />
    <letras />
  </div>
</template>

<script>
import Vidas from "./Vidas";
import Letras from "./Letras";
import Palabra from "./Palabra";
import ContadorVictorias from "./ContadorVictorias";
import axios from "axios";
import bus from "../bus";
export default {
  components: {
    letras: Letras,
    palabra: Palabra,
    vidas: Vidas,
    contadorVictorias: ContadorVictorias
  },
  data() {
    return {
      palabra: ""
    };
  },
  methods: {
    getPalabra() {
      axios
        .get("https://www.aleatorios.com/random-words?dictionary=2&words=1")
        .then(
          res =>
            (this.palabra = res.data.records[0]
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""))
        );
    }
  },
  created() {
    this.getPalabra();
    bus.$on("Ahorcado", () => {
      this.getPalabra();
    });
    bus.$on("PalabraCompletada", () => {
      this.getPalabra();
    });
  }
};
</script>

<style>
.ahorcado-container {
  display: grid;
}
</style>