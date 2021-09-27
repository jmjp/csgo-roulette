<template>
  <nav
    class="
      flex
      items-center
      justify-between
      p-4
      backdrop-filter backdrop-blur-lg
      z-10
      shadow
      border-b border-transparent
      dark:border-gray-800
      sticky
      top-0
    "
  >
    <div class="font-logo text-2xl">VERSUS</div>
    <div class="">
      <button @click="toggleTheme">
        <div v-if="isLight == 'light'" class="flex">
          <MoonIcon class="h-6 w-6" />Dark mode
        </div>
        <div v-else class="flex"><OutlineMoon class="h-6 w-6" />Light mode</div>
      </button>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { MoonIcon } from "@heroicons/vue/solid";
import { MoonIcon as OutlineMoon } from "@heroicons/vue/outline";

export default {
  setup() {
    const store = useStore();
    const isLight = computed(() => store.state["theme"].theme);
    return {
      isLight,
    };
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
  components: {
    MoonIcon,
    OutlineMoon,
  },
};
</script>

<style>
</style>