<template>
  <div>
    <h1>{{juego.title}}</h1>
    <h3>Autor: "{{juego.author}}"</h3>
    <router-link to="/games">Volver</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      juego: {}
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/games/${this.$route.params.gameId}`)
      .then(res => (this.juego = res.data));
  }
};
</script>

<style>
</style>