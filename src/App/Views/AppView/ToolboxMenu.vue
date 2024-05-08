<script setup lang="ts">
	import { ToolboxMenuItemConfig } from "@/App/State/Models/ToolboxMenuItemConfig";
	import IconButton from "../_Components/IconButton.vue";
	import { UpdateBy } from "@/App/State/Models/UpdatedBy";


	const emits = defineEmits(["toolbox-menu-click"]);

	const handleToolboxToggle = (update: ToolboxMenuItemConfig) =>{
		emits("toolbox-menu-click", update);
	};

	//TODO: Move to config file
	const Documents = new ToolboxMenuItemConfig(UpdateBy.ToolboxMenuItem, "DocumentsDrawer", "file-multiple");
	const Search = new ToolboxMenuItemConfig(UpdateBy.ToolboxMenuItem, "SearchDrawer", "search");
	const Account = new ToolboxMenuItemConfig(UpdateBy.ToolboxMenuItem, "AccountDrawer", "account-circle");
	const Settings = new ToolboxMenuItemConfig(UpdateBy.ToolboxMenuItem, "SettingsDrawer", "settings");
	const Github = new ToolboxMenuItemConfig(UpdateBy.ToolboxMenuItem, "GithubDrawer", "github-octa-cat");
	
</script>

<template>  <!---- Template ------------------------------------------------>

  <div id="toolbox-menu-container">

    <!---- Top-Aligned --------------------------------------------------------->
    <div id="toolbox-menu-start">
      <icon-button 
        :config="Documents"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" />
      <icon-button
        :config="Search"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" />
    </div>

    <!---- Bottom-Aligned ------------------------------------------------------>
    <div id="toolbox-menu-end">
      <icon-button 
        :config="Account"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" 
      />
      <icon-button 
        :config="Settings"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" 
      />
      <icon-button 
        :config="Github"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" 
      />
    </div>
    
  </div>
</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

#toolbox-menu-container{
  grid-row:1/3;
  grid-column:1/2;
  display: grid;

  /* Set the bottom row height here */
  grid-template-rows: auto 7.75em;
}

#toolbox-menu-start{
  margin-top: 6px;
}

.toolbox-menu-icon{
  padding: 6px;
  margin: 1px 0px;
}
</style>
