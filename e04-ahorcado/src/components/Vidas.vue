<template>
  <div class="vidas">{{vidas}}</div>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      vidas: 5
    };
  },
  created() {
    bus.$on("Fallo", () => {
      this.vidas--;
      if (this.vidas === 0) {
        bus.$emit("Ahorcado", "");
      }
    });

    bus.$on("Ahorcado", () => {
      this.vidas = 5;
    });
    bus.$on("PalabraCompletada", () => {
      this.vidas = 5;
    });
  }
};
</script>

<style scoped>
.vidas {
  font-size: 5rem;
}
</style>