<template>
  <div id="app-wrapper" style="grid-template-rows: 3em 1fr">
    <div >
      <span class="bg-orange-400">Header!</span>
    </div>
    <content-view id="content-view" ></content-view>
  </div>
</template>

<script setup lang="ts">
import ContentView from "./App/Views/AppView/ContentView.vue";
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
<style lang="scss">

#app-wrapper{
  @apply grid-cols-3
    grid-rows-3 ;

}

#content-view {

  @apply w-full;
  @apply bg-green-300;
  
  // @media screen and (max-width: $small) {
  //   @apply bg-green-500;
  // }
  // @media screen and (min-width: $medium) {
  //   @apply bg-green-800;
  
  // }


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
