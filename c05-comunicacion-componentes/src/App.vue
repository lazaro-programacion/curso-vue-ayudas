<template>
  <div id="app">
    <userList></userList>
    <juego />
  </div>
</template>

<script>
import Juego from "./components/Juego.vue";
import UserList from "./components/UserList";

export default {
  name: "App",
  components: {
    juego: Juego,
    userList: UserList
  }
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
