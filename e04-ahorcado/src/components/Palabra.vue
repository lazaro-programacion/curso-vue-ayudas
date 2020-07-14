<template>
  <div class="palabra">
    <span
      v-for="(item, index) in letras"
      :key="index"
      style="margin-right: 0.5rem;
    font-size: 3rem;"
    >{{item.visible ? item.letra: "_"}}</span>
  </div>
</template>

<script>
import bus from "../bus";

export default {
  data() {
    return {
      letras: []
    };
  },
  watch: {
    palabra: function() {
      this.letras = this.palabra.split("").map(l => {
        return { letra: l.toUpperCase(), visible: false };
      });
    }
  },
  props: {
    palabra: {
      type: String
    }
  },
  created() {
    bus.$on("NuevaLetra", letra => {
      if (this.palabra.toUpperCase().includes(letra)) {
        this.letras = this.letras.map(item => {
          return item.letra === letra
            ? { letra: item.letra, visible: true }
            : item;
        });
        if (this.letras.reduce((acc, act) => acc && act.visible, true)) {
          bus.$emit("PalabraCompletada", this.palabra);
        }
      } else {
        bus.$emit("Fallo", letra);
      }
    });
  }
};
</script>

<style scoped>
.palabra {
  margin-bottom: 3rem;
}
</style>