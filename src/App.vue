<script setup lang="ts">
	import ToolboxMenu from "./App/Views/AppView/ToolboxMenu.vue";
	import ToolboxDrawer from "./App/Views/AppView/ToolboxDrawer.vue";
	import WorkbenchSelector from "./App/Views/AppView/WorkbenchSelector.vue";
	import EditorView from "./App/Views/AppView/EditorView.vue";
	import FooterInfo from "./App/Views/AppView/FooterInfo.vue";
	import { computed, onMounted, onUnmounted, ref } from "vue";
	import { useAppState } from "./App/State/AppState";
	import type { ToolboxMenuItemConfig } from "./App/State/Models/ToolboxMenuItemConfig";
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

	// const show = ref(false);
	// const showLogin = () => {
	// 	show.value = true;
	// };
	// const hideLogin = () => {
	// 	show.value = false;
	// };


</script>
<template>
  <!-- <div class="flex justify-center items-center">
    <login-modal 
      v-if="show"
      @close="hideLogin"
    />
    <button
      @click="showLogin"
    >
      Log in
    </button>
  </div> -->
  
  <div 
    id="app-container" 
    class="main-grid"
    :class="mainGridClass"
  > 

    <toolbox-menu     
      @toolbox-menu-click="handleToolboxToggle"
    ></toolbox-menu> 

    <toolbox-drawer 
      v-show="app$.Toolbox$.IsOpen"
      id="toolbox-drawer"
    ></toolbox-drawer>
    
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

</template>

<style lang="scss">

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
