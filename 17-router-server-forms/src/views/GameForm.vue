<template>
  <div>
    <h1>Game Form</h1>
    <form>
      <div class="mb-3">
        <label for="titleInput" class="form-label">Title</label>
        <input type="text" class="form-control" id="titleInput" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="authorInput" class="form-label">Author</label>
        <input type="text" class="form-control" id="authorInput" v-model="author" />
      </div>
      <button type="submit" class="btn btn-primary" v-on:click.prevent="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      author: "",
      id: null
    };
  },
  methods: {
    async onSubmit() {
      let res;
      if (this.id) {
        res = await axios.put(`http://localhost:3000/games/${this.id}`, {
          title: this.title,
          author: this.author
        });
      } else {
        res = await axios.post("http://localhost:3000/games", {
          title: this.title,
          author: this.author
        });
      }
      console.log(res);
      this.$router.push("/games");
    }
  },
  created() {
    const { gameId } = this.$route.params;

    if (gameId) {
      this.id = gameId;
      axios.get(`http://localhost:3000/games/${gameId}/`).then(res => {
        (this.title = res.data.title), (this.author = res.data.author);
      });
    }
  }
};
</script>

<style>
</style>