<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{msg2}}</h2>
    <button v-on:click="cambiaDatos">Cambia Datos</button>
    <ul>
      <li>{{obj.texto}}</li>
      <li>{{contador}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true
    },
    msg2: {
      type: String,
      default: "Mensaje por defecto"
    },
    contador: {
      type: Number,
      default: 0
    },
    obj: {}
  },
  data() {
    return {};
  },
  methods: {
    cambiaDatos() {
      this.contador++;
      this.obj.texto = " PERICO EL DE LOS PALOTES";
    }
  },
  beforeMount() {
    console.log(this.contador, this.obj);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
