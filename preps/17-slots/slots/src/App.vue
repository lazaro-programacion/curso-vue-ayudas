<template>
  <div class="container">
    <mostrarFormulario titulo="Login"></mostrarFormulario>
  </div>
</template>

<script>
import MostrarFormulario from "./components/MostrarFormulario";
export default {
  name: "app",
  components: {
    mostrarFormulario: MostrarFormulario
  },
  data() {
    return {
      msg: "hola mundo"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
