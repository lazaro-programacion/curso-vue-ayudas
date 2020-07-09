<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">{{user.name}}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => (this.users = res.data));
  }
};
</script>

<style>
</style>