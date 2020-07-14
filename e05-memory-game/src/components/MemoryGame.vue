<template>
  <div class="memory-game">
    <h1>Memory Game</h1>
    <buttons />
    <puntuacion></puntuacion>
    <h1 v-if="finished">Enhorabuena!!!!!</h1>
    <div class="board">
      <div class="card" v-for="(item, index) in cards" :key="index" v-on:click="click(item)">
        <img :src="item.image" v-if="mostrar(item)" height="100%" width="100%" v-on:click.stop />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import { UNSPLASH_APPLICATION, UNSPLASH_SECRET } from "../config/unsplash";
import bus from "../bus";
import puntuacion from "./Puntuacion";
import Buttons from "./Buttons";
export default {
  components: {
    puntuacion,
    buttons: Buttons
  },
  data() {
    return {
      cards: [],
      selectedOne: null,
      selectedTwo: null
    };
  },
  props: {
    columns: {
      type: Number,
      default: 4
    }
  },
  computed: {
    elements() {
      return this.columns ** 2 / 2;
    },
    finished() {
      return this.cards.reduce((acc, act) => acc && act.discovered, true);
    }
  },
  methods: {
    click(item) {
      console.log(item, this.selectedOne, this.selectedTwo);
      if (!this.selectedOne) {
        this.selectedOne = item;
      } else if (!this.selectedTwo) {
        bus.$emit("Movimiento", this.selectedOne.image);
        this.selectedTwo = item;
        if (this.selectedOne.image === this.selectedTwo.image) {
          this.selectedOne.discovered = true;
          this.selectedTwo.discovered = true;
        }
      } else {
        this.selectedOne = item;
        this.selectedTwo = null;
      }
    },
    mostrar(item) {
      return (
        item.discovered ||
        item === this.selectedOne ||
        item === this.selectedTwo
      );
    },
    async createBoard() {
      let res = await axios.get(
        `https://api.unsplash.com/photos/random?count=${this.elements}&orientation=squarish&client_id=${UNSPLASH_APPLICATION}&client_secret=${UNSPLASH_SECRET}`
      );
      this.cards = [];
      for (let i = 0; i < this.elements; i++) {
        this.cards.push({
          image: res.data[i].urls.thumb,
          discovered: false
        });
        this.cards.push({
          image: res.data[i].urls.thumb,
          discovered: false
        });
      }
      this.cards = _.shuffle(this.cards);
    }
  },
  created() {
    this.createBoard();
    bus.$on("NewGame", () => this.createBoard());
  }
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 3rem;
  gap: 1rem;
  width: 15rem;
  margin: 2rem;
}

.card {
  width: 3rem;
  height: 3rem;
  background-color: chocolate;
}
</style>