<script setup lang="ts">
	import { ToolboxMenuItemConfig } from "@/App/ViewModels/Toolbox/ToolboxMenuItemConfig";
	import IconButton from "@/App/Views/Common/IconButton.vue";
	import { UpdateOrigin as UpdateOrigin } from "@/Core/Infra/Common/Messaging/UpdatedBy";
	import { UpdateRequester } from "@/Core/Infra/Common/Messaging/UpdateRequester";
	import { ref } from "vue";


	const emits = defineEmits(["toolbox-menu-click"]);
	const isActiveIcon = ref(UpdateRequester.Documents);

	const handleToolboxToggle = (update: ToolboxMenuItemConfig) =>{
		isActiveIcon.value = update.requester;
		emits("toolbox-menu-click", update);
	};

	//TODO: Move to config file
	const Documents = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, UpdateRequester.Documents, "file-multiple");
	const Search    = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, UpdateRequester.Search,    "search");
	const Account   = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, UpdateRequester.Account,   "account-circle");
	const Settings  = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, UpdateRequester.Settings,  "settings");
	const Github    = new ToolboxMenuItemConfig(UpdateOrigin.ToolboxMenuItem, UpdateRequester.Github,    "github-octa-cat");
	
</script>

<template>  <!---- Template ------------------------------------------------>

  <div id="toolbox-menu-container">

    <!---- Top-Aligned --------------------------------------------------------->
    <div id="toolbox-menu-start">
      
      <icon-button 
        :config="Documents"
        :isActive="isActiveIcon == UpdateRequester.Documents"
        class="toolbox-menu-icon"
        @IconClicked="handleToolboxToggle" />

      <icon-button
        :config="Search"
        :isActive="isActiveIcon == UpdateRequester.Search"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" />
    </div>

    <!---- Bottom-Aligned ------------------------------------------------------>
    <div id="toolbox-menu-end">
      
      <n-tooltip placement="right" trigger="hover">
        <template #trigger>
          <icon-button 
            :config="Account"
            :isActive="isActiveIcon == UpdateRequester.Account"
            class="toolbox-menu-icon" 
            @IconClicked="handleToolboxToggle" 
          />
        </template>
        Account
      </n-tooltip>

      <icon-button 
        :config="Settings"
        :isActive="isActiveIcon == UpdateRequester.Settings"
        class="toolbox-menu-icon" 
        @IconClicked="handleToolboxToggle" 
      />
      <icon-button 
        :config="Github"
        :isActive="isActiveIcon == UpdateRequester.Github"
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
