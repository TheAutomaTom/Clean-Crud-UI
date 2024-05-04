<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useAppState } from "./App/State/AppState";
const app = useAppState();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  app.IsScrolled = window.scrollY > 0;
}

</script>

<template>
  <body data-theme="dark" class="h-96">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    
    <span>{{ app.IsScrolled }}</span>
  </body>
</template>

<style lang="scss">

</style>
