<template>
  <div>
    <h1>{{msg | capitalize}}</h1>
    <h1>{{msg | capitalizeAll}}</h1>
    <h1>{{numero | sumaUno}}</h1>
    <h1>{{numero | sumaUno | multiplicaPorDos}}</h1>
    <h1>{{numero | sumaUno | multiplicaPor(4)}}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      numero: 2
    };
  },
  props: {
    msg: String
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    sumaUno(value) {
      return value + 1;
    },
    multiplicaPorDos(value) {
      return value * 2;
    },
    multiplicaPor(value, multiplicador) {
      return value * multiplicador;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
