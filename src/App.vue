<script setup lang="ts">
	import AccountToolbox from "@/App/Views/ToolboxDrawer/AccountToolbox.vue";
	import EditorView from "@/App/Views/EditorView.vue";
	import FooterInfo from "@/App/Views/FooterInfo.vue";
	import ToolboxMenu from "@/App/Views/ToolboxMenu.vue";
	import WorkbenchSelector from "@/App/Views/WorkbenchSelector.vue";
	import type { ToolboxMenuItemConfig } from "@/App/ViewModels/Toolbox/ToolboxMenuItemConfig";
	import { computed, onMounted, onUnmounted } from "vue";
	import { useAppState } from "@/App/ViewModels/AppState";
	const app$ = useAppState();

	onMounted(() =>   { window.addEventListener(   "scroll", handleScroll); });
	onUnmounted(() => { window.removeEventListener("scroll", handleScroll); });

	function handleScroll() {
		app$.IsScrolled = window.scrollY > 0;
	}

	const mainGridClass = computed(() => {        
		return app$.Toolbox$.IsOpen ==  true ? "app-container-toolbox-show" : "app-container-toolbox-hide";
	});  

	function handleToolboxToggle(update: ToolboxMenuItemConfig) {
		app$.UpdateToolbox(update);		
	}

</script>
<template>

  <div 
    id="app-container" 
    class="main-grid"
    :class="mainGridClass"
  > 

    <toolbox-menu     
      @toolbox-menu-click="handleToolboxToggle"
    ></toolbox-menu>
    <div id="toolbox-drawer"
         v-show="app$.Toolbox$.IsOpen"
    />
    
    <workbench-selector 
      id="workbench-selector" 
      class="bordered"
    ></workbench-selector>

    <editor-view 
      id="editor-view" 
      class="bordered"
    ></editor-view>

    <footer-info 
      id="footer-comp" 
      class="bordered"
    ></footer-info>   
  </div>
    
  

  <!-- Teleport Elements -->
  <account-toolbox /> 
  
</template>

<style lang="scss">

$bg-content: #1F1F1F;

//=== App ==================================//
#app-container {
  height: 100%;
  display: grid;
  grid-template-rows: 2.5em 1fr 1em;
  transition: 150ms;
  transition-timing-function: ease-out;
  overflow: hidden;
}
.app-container-toolbox-show{
  grid-template-columns: 2.5em 18em 1fr 1em;  
}
.app-container-toolbox-hide{
  grid-template-columns: 2.5em 0em 1fr 1em;
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
  background-color: $bg-content;
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
