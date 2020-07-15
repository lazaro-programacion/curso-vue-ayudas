<template>
  <div class="game-list">
    <h1>Game List</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="index" v-on:click="goGame(game.id)">
          <td>{{game.id}}</td>
          <td>{{game.title}}</td>
          <td>{{game.author}}</td>
          <td v-on:click.stop>
            <router-link :to="'/games/'+game.id+'/edit'">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <router-link tag="button" to="games/new" class="btn btn-primary">Nuevo Juego</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      games: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/games")
      .then(res => (this.games = res.data));
  },
  methods: {
    goGame(id) {
      this.$router.push("/games/" + id);
    }
  }
};
</script>

<style scoped>
tr:hover {
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.39);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.39);
  background-color: gray;
  color: white;
}
</style>