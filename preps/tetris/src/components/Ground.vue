<template>
  <div class="ground">
    <transition-group name="cell">
      <template v-for="(row,y) of this.ground">
        <template v-if="cell">
          <cell
            v-for="(cell,x) of row"
            :data="cell.data"
            :pos="[x,y]"
            :stage="stage"
            :key="cell.id"
            class="cell"
          />
        </template>
      </template>
    </transition-group>
  </div>
</template>

<script>
import stageComputed from "./stageComputed";
import cell from "./Cell";
import _ from "lodash";

export default {
  name: "ground",
  mixins: [stageComputed],
  props: ["stage"],
  data() {
    return { ground: [[]] };
  },
  methods: {
    reset() {
      let { width, height } = this.stage;
      let total = width * height;
      this.ground = _.chain(total)
        .times(() => null)
        .chunk(width)
        .value();
    },
    checkTouched(cells) {
      for (let [x, y] of cells) {
        if (x < 0 || x >= this.width) return "wall";
        if (y >= this.height) continue;
        if (y < 0 || this.ground[y][x]) return "ground";
      }
      return false;
    },
    clearRow() {
      let rows = 0;
      let empty = 0;
      for (let i = this.ground.length - 1; i >= 0; i--) {
        let row = this.ground[i];
        if (_.every(row)) {
          this.ground.splice(i, 1);
          this.ground.push(_.times(this.width, () => null));
          rows++;
          empty++; // current row cleared
        } else if (_.every(row, x => !x)) empty++;
      }
      empty === this.ground.length && this.$emit("clearAll");
      rows && this.$emit("clearRow", rows);
    },
    push(cells) {
      let ret = true;
      for (let cell of cells) {
        let [x, y] = cell.pos;
        this.ground[y] ? this.$set(this.ground[y], x, cell) : (ret = false);
      }
      this.$nextTick(this.clearRow);
      return ret;
    }
  },
  components: { cell }
};
</script>

<style scoped>
.cell-enter-active {
  animation: rubberBand 0.3s;
}
.cell-leave-active {
  z-index: 10;
  animation: fadeOutDown 0.3s;
}
.cell {
  transition: all 0.3s linear;
}
</style>
