<template>
  <div class="block max-w-full overflow-hidden relative contain-p">
    <div
      class="
        flex
        max-w-full
        relative
        items-center
        flex-wrap
        overflow-hidden
        pt-4
        h-full
      "
    >
      <div class="flex relative left-1/2">
        <div class="flex" ref="wheel">
          <div
            v-for="item in roulette.numbers"
            :key="item.value"
            class="reel-item mx-0.5"
          >
            <div
              class="
                wheel-item
                text-center
                my-0.5
                rounded-md
                bg-gray-800
                border-box
              "
              :class="{
                'dark:bg-red-900 bg-red-600': item.color == 'red',
                'dar:bg-green-900 bg-green-600': item.color == 'green',
                'animate-winner opacity-100': item.value == roulette.winner,
                'opacity-10':
                  roulette.winner != null && item.value !== roulette.winner,
              }"
            >
              <img src="@/assets/roulette/ct.png" class="px-4 py-4" v-if="item.color == 'black'">
              <img v-else-if="item.color == 'red'" class="px-4 py-4" src="@/assets/roulette/tr.webp">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="indicator dark:bg-white bg-yellow-500" :class="{'opacity-5': roulette.winner != null}"></div>
  </div>
  <button @click="startGame(Math.floor(Math.random() * 12))">Run with random number</button>
</template>

<script>
import { reactive } from "@vue/reactivity";
const numbers = [
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 0,
    color: "green",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 1,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 2,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 3,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 4,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 5,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 6,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 7,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 8,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 9,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 10,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 11,
    color: "red",
    selected: false,
    currentMiddle: false,
  },
  {
    value: 12,
    color: "black",
    selected: false,
    currentMiddle: false,
  },
];
export default {
  setup() {
    const roulette = reactive({
      numbers: numbers,
      winner: null,
      lastNumber: 0,
    });
    return {
      roulette,
    };
  },
  methods: {
    async startGame(winner) {
      var pos = 0;
      var items = 12;
      var lenght = 70;
      var fullSize = (items + 1) * lenght;
      var translate = "";
      var loops = 3;
      var resultPos = winner * lenght;
      var isRunning = false;
      var fullDistance = loops * fullSize + resultPos;
      var rouletteTime = 5000;
      var startTime = Date.now();
      isRunning = true;
      while (isRunning) {
        await this.sleep(1000 / 60);
        this.$refs["wheel"].style.transform = update(Date.now(), startTime, this.roulette.lastNumber);
      }
      this.roulette.winner = winner;
      await this.sleep(1750);
      this.roulette.winner = null;
      this.roulette.lastNumber = winner;
      function easeOutSine(time, start, change, duration) {
        return change * Math.sin((time / duration) * (Math.PI / 2)) + start;
      }
      function update(raftTime, startTime, lastNumber) {
        var deltaTime = raftTime - startTime;
        if (deltaTime >= rouletteTime) {
          isRunning = false;
          return;
        }
        var fraction = easeOutSine(deltaTime, 0, 1, rouletteTime);
        pos = Math.round(fraction * fullDistance);
        if(fraction.toFixed(2) < 0.40){
          translateX = (pos % fullDistance) + (lastNumber + 2) * 70;
          translate = `translateX(-${translateX}px)`;
          return translateX;
        }
        var translateX = (pos % fullDistance) - (fullSize - (150 + winner * 2.0));
        translate = `translateX(-${translateX}px)`;
        return translate;
      }
    },
    async sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style scoped>
.contain-p {
  contain: layout style paint;
}
.wheel-item {
  position: relative;
  overflow: hidden;
  line-height: 70px;
  height: 70px;
  min-width: 70px;
  margin: 0 0.1rem;
  border-radius: 0.625rem;
  text-shadow: 1px 2px rgb(0 0 0 / 35%);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  transition: text-shadow 0.5s;
}
.reel-item {
  display: flex;
  height: auto;
  width: 70px;
  pointer-events: none;
  justify-content: center;
  transition: opacity 0.5s, transform 0.5s;
}
.indicator {
  position: absolute;
  left: calc(50% - 0.1875rem);
  top: 0;
  width: 0.1875rem;
  height: 100%;
  z-index: 2;
  transition: opacity 0.5s;
}
</style>