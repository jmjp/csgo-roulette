<template>
  <div class="bg-theme-light-background text-gray-600 dark:text-white dark:bg-theme-dark-background h-screen min-h-auto">
    <router-view />
  </div>
</template>


<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  setup() {
    const store = useStore();
    const theme = computed(() => store.state["theme"].theme);
    watch(
      () => theme.value,
      (changedTheme) => {
        changedTheme === "light"
          ? document.querySelector("html").classList.remove("dark")
          : document.querySelector("html").classList.add("dark");
      }
    );
    return {
      theme,
    };
  },
};
</script>
