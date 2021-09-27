<template>
  <Menu />
  <div
    class="
      container
      mx-auto
      mt-16
      shadow-lg
      p-10
      bg-theme-light-highlight
      dark:bg-theme-dark-highlight
      min-h-96
    "
  >
    <Roulette />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Roulette from "@/components/Roulette.vue";

export default {
  name: "Home",
  components: {
    Menu,
    Roulette,
  },
  methods: {},
};
</script>
