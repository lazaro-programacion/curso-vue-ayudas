<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(palabra, index) in [...palabras].reverse()"
      v-bind:key="`palabra${index}`"
    >{{palabra}}</li>
  </ul>
</template>

<script>
export default {
  props: ["palabras"]
};
</script>

<style>
</style>