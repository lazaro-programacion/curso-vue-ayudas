<template>
  <ul class="list-group">
    <li
      :style="`background-color: ${colors[color%3]}`"
      class="list-group-item"
      v-for="(palabra, index) in [...palabras].reverse()"
      v-bind:key="`palabra${index}`"
    >{{palabra}}</li>
  </ul>
</template>

<script>
import bus from "../bus";

export default {
  props: ["palabras"],
  data() {
    return {
      colors: ["blue", "red", "green"],
      color: 1
    };
  },
  created() {
    bus.$on("add:palabra", () => {
      this.color++;
    });
  }
};
</script>

<style>
</style>