<script setup lang="ts">
  import HeaderComp from "./App/Views/AppView/WorkbenchComp.vue";
  import ContentView from "./App/Views/AppView/EditorView.vue";
  import FooterComp from "./App/Views/AppView/FooterComp.vue";
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
  <div id="app-container">
    <toolbox-menu id="header-comp" class="bordered"></toolbox-menu>
    <header-comp id="header-comp" class="bordered" ></header-comp>
    <content-view id="content-view" class="bordered" ></content-view>
    <footer-comp id="footer-comp" class="bordered" ></footer-comp>
  </div>
</template>

<style lang="scss">
/*
NOTES

- clamp(20px, 40%, 500px) 
"Clamp take three parameters (min, preferred, max)"

- grid-template-columns: 1fr fit-content(20%);
"The fit-content function accepts one param, the maximum value. 
A grid column/row with this property set will still take up as little space as necessary, 
according to its content, but no more than the maximum value." 

Justify-items: Aligns grid items along the inline (row) axis (left and right).
Justify-items: start | end | center | stretch;

Align-items: Aligns along the block (column) axis (up and down).
Align-items: start | end | center | stretch;

*/
$fg-border: #2B2B2B;

#app-container{  
  display: grid;  
  grid-template-columns: 4em 0.25em 1fr 1em;
  grid-template-rows: 3em 1fr 2em;
  
  @screen lg {
    grid-template-columns: 4em 18em 1fr 1m;
  } 
  @screen 2xl {
    grid-template-columns: 4em 18em 1fr 1em;
  }

  @apply h-full;
}

#header-comp {
  @apply w-full;
  grid-column-start:1;
  grid-column-end:-1;
  grid-row-start:1;
  grid-row-end:1;
}

#content-view {
  @apply w-full h-full;
  background-color: var(--bg-content);
  grid-column-start:3;
  grid-column-end:4;
  grid-row-start:2;
  grid-row-end:2;

  // @screen md {
  // }  
  // @screen lg {
  // }
  // @screen xl {
  // }

}
#footer-comp {
  @apply w-full;
  grid-column-start:1;
  grid-column-end:-1;
  grid-row-start:3;
  grid-row-end:-1;
  bottom:0;
}
</style>
