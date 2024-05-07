
<script setup lang="ts">
  import ToolboxMenu from "./App/Views/AppView/ToolboxMenu.vue";
  import ToolboxDrawer from "./App/Views/AppView/ToolboxDrawer.vue";
  import WorkbenchSelector from "./App/Views/AppView/WorkbenchSelector.vue";
  import EditorView from "./App/Views/AppView/EditorView.vue";
  import FooterComp from "./App/Views/AppView/FooterInfo.vue";
  import { onMounted, onUnmounted, ref } from "vue";
  import { useAppState } from "./App/State/AppState";
  import { useToolboxState } from "./App/State/ToolboxState";
  const app$ = useAppState();
  const toolbox$ = useToolboxState();

  onMounted(() =>   { window.addEventListener(   "scroll", handleScroll); });
  onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

  function handleScroll() {
    app$.IsScrolled = window.scrollY > 0;
  }

  // const toolboxGridColumns = ref("toolbox-grid-columns-per-toolbox-close");
  const editorGridColumns = ref("editor-grid-columns-per-toolbox-close");

  function handleToolboxToggle(name: string) {
    console.log(`Receiving: ${name}`);
    // app$.UpdateToolbox(name);
    // if(toolbox$.IsOpen == true ){
    //   console.log("Open Toolbox");
    //   // toolboxGridColumns.value  = "toolbox-grid-columns-per-toolbox-open";
    //   editorGridColumns.value   = "editor-grid-columns-per-toolbox-open";
    // } else {
    //   console.log("Close Toolbox");
    //   // toolboxGridColumns.value  = "toolbox-grid-columns-per-toolbox-close";
    //   editorGridColumns.value   = "editor-grid-columns-per-toolbox-close";
    // }
  }

</script>

<template>
  <div 
    id="app-container" 
  > 
  
    <toolbox-menu 
      @toolbox-toggled="handleToolboxToggle"
    ></toolbox-menu> 

<!-- 
<div id="toolbox-menu">
  
<div id="toolbox-menu-start" 
  class="bordered">
  <div class="bordered toolbox-menu-item-start">A1</div>
  <div class="bordered toolbox-menu-item-start">A2</div>
  <div class="bordered toolbox-menu-item-start">A3</div>
  <div class="bordered toolbox-menu-item-start">A4</div>
  <div class="bordered toolbox-menu-item-start">A5</div>
  <div class="bordered toolbox-menu-item-start">A6</div>
  <div class="bordered toolbox-menu-item-start">A7</div>
</div>

<div id="toolbox-menu-end" 
  class="bordered">
  <div class="bordered toolbox-menu-item-end">A8</div>
  <div class="bordered toolbox-menu-item-end">A9</div>
</div>
</div> -->

    <toolbox-drawer 
      id="toolbox-drawer"
    ></toolbox-drawer>
    
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

    <footer-info 
      id="footer-comp" 
      class="bordered"
    ></footer-info> 

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

//=== App ==================================//
#app-container {
  height: 100%;
  display: grid;
  grid-template-columns: 2.5em 18em 1fr 1em;
  grid-template-rows: 2.5em 1fr 2em;
}

//=== Toolbox ==============================//


#toolbox-drawer{
  background-color:limegreen;
  grid-row:1/3;
  grid-column:2/3;
  
}

.toolbox-grid-columns-per-toolbox-open {
// See also: editor-grid-columns-per-toolbox-close
  grid-column-end:3;
}
.toolbox-grid-columns-per-toolbox-close {
  // See also: editor-grid-columns-per-toolbox-close
  // grid-column-end:3;
  grid-column-end:2;
}

//=== Workbench ============================//
#workbench-selector{
  background-color:green;
  grid-row:1/2;
  grid-column:3/5;

}

//=== Editor ===============================//
#editor-view{
  background-color:lightseagreen;
  grid-row:2/3;
  grid-column:3/5;
  
}
.editor-grid-columns-per-toolbox-open {
// See also: toolbox-grid-columns-per-toolbox-open
  grid-column-start:3;
}
.editor-grid-columns-per-toolbox-close {
  // See also: toolbox-grid-columns-per-toolbox-close
  grid-column-start:2;
}

//=== Footer ===============================//
#footer-comp{
  background-color:gold;
  grid-row:3/4;
  grid-column:1/5;

}
</style>
