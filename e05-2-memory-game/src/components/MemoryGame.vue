<template>
  <div>
    <template v-if="terminado">
      <h1>ENHORABUENA</h1>
      <button v-on:click="createBoard">Jugar otra vez</button>
    </template>
    <div>
      <h3 v-if="turnos">Turnos: {{turnos}}</h3>
    </div>
    <div class="memory-game">
      <div class="board" :style="'grid-template-columns: repeat(' + columns + ', 200px)'">
        <div class="card" v-for="(item, index) in cards" :key="index" v-on:click="onClick(item)">
          <img :src="item.image" v-if="mostrar(item)" v-on:click.stop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { UNSPLASH_APPLICATION, UNSPLASH_SECRET } from "../config/unsplash";
import _ from "lodash";
import func from "../../vue-temp/vue-editor-bridge";

export default {
  data() {
    return {
      cards: [],
      element1: null,
      element2: null,
      turnos: 0
    };
  },
  watch: {
    columns: function() {
      this.createBoard();
    },
    terminado: function(value) {
      if (value) {
        console.log(terminado);
      }
    }
  },
  props: {
    columns: {
      type: Number,
      default: 4
    }
  },
  computed: {
    elements() {
      return this.columns ** 2 % 2 === 1
        ? (this.columns * (this.columns - 1)) / 2
        : this.columns ** 2 / 2;
    },
    terminado() {
      return this.cards.reduce((acc, act) => acc && act.discovered, true);
    }
  },
  methods: {
    async createBoard() {
      let res = await axios.get(
        `https://api.unsplash.com/photos/random?count=${this.elements}&orientation=squarish&client_id=${UNSPLASH_APPLICATION}&client_secret=${UNSPLASH_SECRET}`
      );
      console.log(res.data);

      this.cards = [];
      res.data.forEach(i => {
        this.cards.push({
          image: i.urls.thumb,
          discovered: false
        });
        this.cards.push({
          image: i.urls.thumb,
          discovered: false
        });
      });
      this.cards = _.shuffle(this.cards);
      this.turnos = 0;
    },
    mostrar(item) {
      return (
        item.discovered || item === this.element1 || item === this.element2
      );
    },
    onClick(item) {
      if (!this.element1) {
        this.element1 = item;
      } else {
        if (!this.element2) {
          this.element2 = item;
          if (this.element1.image === this.element2.image) {
            this.element1.discovered = true;
            this.element2.discovered = true;
          }
          this.turnos++;
        } else {
          this.element1 = item;
          this.element2 = null;
        }
      }
    }
  },
  created() {
    this.createBoard();
  }
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 200px;
  background-color: orangered;
}

.board {
  display: grid;
  gap: 20px;
}

.memory-game {
  display: flex;
  justify-content: center;
}

.card img {
  width: 100%;
  height: 100%;
}
</style>