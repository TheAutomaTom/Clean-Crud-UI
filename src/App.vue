<template>
  <div 
    id="app-container" 
    class="toolbox-parent"
  >
    <toolbox-comp 
      id="toolbox-comp" 
      class="bordered" 
      :class="toolboxGridColumns"
      @toolbox-toggled="handleToolboxUpdate"
    ></toolbox-comp>

    <workbench-selector 
      id="workbench-selector" 
      class="bordered" 
      :class="editorGridColumns"
    ></workbench-selector>

    <editor-view 
      id="editor-view" 
      class="bordered" 
      :class="editorGridColumns"
    ></editor-view>

    <footer-comp 
      id="footer-comp" 
      class="bordered"
    ></footer-comp>

  </div>
</template>
<script setup lang="ts">
  import ToolboxComp from "./App/Views/AppView/ToolboxComp.vue";
  import WorkbenchSelector from "./App/Views/AppView/WorkbenchSelector.vue";
  import EditorView from "./App/Views/AppView/EditorView.vue";
  import FooterComp from "./App/Views/AppView/FooterComp.vue";
  import { onMounted, onUnmounted, ref } from "vue";
  import { useAppState } from "./App/State/AppState";
import { useToolboxState } from "./App/State/ToolboxState";
  const app$ = useAppState();
  const toolbox$ = useToolboxState();

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    app$.IsScrolled = window.scrollY > 0;
  }

  const toolboxGridColumns = ref("toolbox-grid-columns-per-toolbox-close");
  const editorGridColumns = ref("editor-grid-columns-per-toolbox-close");

  function handleToolboxUpdate(name: string) {
    console.log(`Receiving: ${name}`);
    app$.UpdateToolbox(name);
    if(toolbox$.IsOpen == true ){
      console.log("Open Toolbox");
      toolboxGridColumns.value  = "toolbox-grid-columns-per-toolbox-open";
      editorGridColumns.value   = "editor-grid-columns-per-toolbox-open";
    } else {
      console.log("Close Toolbox");
      toolboxGridColumns.value  = "toolbox-grid-columns-per-toolbox-close";
      editorGridColumns.value   = "editor-grid-columns-per-toolbox-close";
    }
  }

</script>

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
// $fg-border: #2B2B2B;

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
//=== Toolbox ==============================//
#toolbox-comp {
  @apply w-full;
  grid-column-start:1;
  grid-row-start:1;
  grid-row-end:3;
}
.toolbox-grid-columns-per-toolbox-open {
// See also: editor-grid-columns-per-toolbox-close
  grid-column-end:2;
}
.toolbox-grid-columns-per-toolbox-close {
// See also: editor-grid-columns-per-toolbox-close
  grid-column-end:3;
}

//=== Workbench ============================//
#workbench-selector {
  @apply w-full;
  // grid-column-start:3;
  grid-column-end:-1;
  grid-row-start:1;
  grid-row-end:1;
}

//=== Editor ===============================//
#editor-view {
  @apply w-full h-full;
  background-color: var(--bg-content);
  // grid-column-start:3;
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
.editor-grid-columns-per-toolbox-open {
// See also: toolbox-grid-columns-per-toolbox-open
  grid-column-start:2;
}

.editor-grid-columns-per-toolbox-close {
// See also: toolbox-grid-columns-per-toolbox-close
  grid-column-start:3;
}

//=== Footer ===============================//
#footer-comp {
  @apply w-full;
  grid-column-start:1;
  grid-column-end:-1;
  grid-row-start:3;
  grid-row-end:-1;
  bottom:0;
}
</style>
