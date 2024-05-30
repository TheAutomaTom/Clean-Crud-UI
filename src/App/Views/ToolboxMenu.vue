<script setup lang="ts">
	import { ToolboxMenuItemConfig } from "@/App/ViewModels/Toolbox/ToolboxMenuItemConfig";
	import IconButton from "@/App/Views/Common/IconButton.vue";
	import { UpdateOrigin as UpdateOrigin } from "@/Core/Infra/Common/Messaging/UpdatedBy";
	import { ToolboxType } from "@/Core/Infra/Common/Messaging/ToolboxType";
	import { ref } from "vue";


	const emits = defineEmits(["toolbox-menu-click"]);
	const isActiveIcon = ref(ToolboxType.Documents);

	const handleToolboxToggle = (update: ToolboxMenuItemConfig) =>{
		isActiveIcon.value = update.requester;
		emits("toolbox-menu-click", update);
	};

	//TODO: Move to config file
	const Documents = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, ToolboxType.Documents, "file-multiple");
	const Search    = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, ToolboxType.Search,    "search");
	const Account   = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, ToolboxType.Account,   "account-circle");
	const Settings  = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, ToolboxType.Settings,  "settings");
	const Github    = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, ToolboxType.Github,    "github-octa-cat");
	
</script>

<template>  <!---- Template ------------------------------------------------>

  <div id="toolbox-menu-container">

    <!---- Top-Aligned --------------------------------------------------------->
    <div id="toolbox-menu-start">
      
      <icon-button 
        :config="Documents"
        :isActive="isActiveIcon == ToolboxType.Documents"
        class="toolbox-menu-icon"
        @IconClicked="handleToolboxToggle" />

      <icon-button
        :config="Search"
        :isActive="isActiveIcon == ToolboxType.Search"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" />
    </div>

    <!---- Bottom-Aligned ------------------------------------------------------>
    <div id="toolbox-menu-end">
      
      <n-tooltip placement="right" trigger="hover">
        <template #trigger>
          <icon-button 
            :config="Account"
            :isActive="isActiveIcon == ToolboxType.Account"
            class="toolbox-menu-icon" 
            @IconClicked="handleToolboxToggle" 
          />
        </template>
        Account
      </n-tooltip>

      <icon-button 
        :config="Settings"
        :isActive="isActiveIcon == ToolboxType.Settings"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" 
      />
      <icon-button 
        :config="Github"
        :isActive="isActiveIcon == ToolboxType.Github"
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
