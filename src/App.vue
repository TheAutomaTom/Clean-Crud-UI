
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

//=== App ==================================//
#app-container {
  height: 100%;
  display: grid;
  grid-template-columns: 2.5em 18em 1fr 1em;
  grid-template-rows: 2.5em 1fr 2em;
}

//=== Toolbox ==============================//


#toolbox-drawer{
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
  grid-row:1/2;
  grid-column:3/5;

}

//=== Editor ===============================//
#editor-view{
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
  grid-row:3/4;
  grid-column:1/5;

}
</style>
