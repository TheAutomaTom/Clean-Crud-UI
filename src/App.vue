<script setup lang="ts">
import ContentView from "./App/Views/ContentView.vue";
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
  <content-view id="content-view" ></content-view>
</template>

<style lang="scss">

#content-view {
  @apply w-full;
  @apply bg-slate-300;
}

// .app-wrapper {
//   @apply w-full;
// }

// .buffer-header {
//   @apply w-full;
// }

// $footer-height: 15em;
// .content-wrapper {
//   @apply w-full flex justify-center;
//   padding-bottom: $footer-height;
// }

// .content {
//   @apply w-full max-w-2xl flex;
// }

// .footer-wrapper {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: $footer-height;
// }
</style>
