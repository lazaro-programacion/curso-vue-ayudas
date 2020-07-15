<template>
  <div class="hello">
    <button v-on:click="show = !show">Mostrar/Ocultar</button>
    <transition name="fade">
      <p v-if="show">{{msg}}</p>
    </transition>
    <transition name="bounce">
      <p v-if="show">{{msg}}</p>
    </transition>
    <transition name="fade">
      <cuadrado v-if="show" />
    </transition>
    <transition name="bounce">
      <cuadrado v-if="show" />
    </transition>
  </div>
</template>

<script>
import cuadrado from "./Cuadrado";

export default {
  name: "HelloWorld",
  components: {
    cuadrado
  },
  data() {
    return {
      show: true
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
