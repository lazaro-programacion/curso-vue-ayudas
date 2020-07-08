<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{pruebaObj.texto}}</h1>
    <button v-on:click="incrementaContador">Incrementa</button>
    <h1>{{contador}}</h1>
    <HelloWorld
      msg="Bienvenido to Your Vue.js App"
      msg2="hola mundo"
      :contador="contador"
      :obj="pruebaObj"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      pruebas: "PRUEBAS DATA NUMBER ONE",
      contador: 0,
      pruebaObj: {
        texto: "hola mundo desde el objeto"
      }
    };
  },
  methods: {
    incrementaContador() {
      this.contador++;
    }
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
