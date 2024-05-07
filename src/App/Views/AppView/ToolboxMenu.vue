<script setup lang="ts">
	import IconButton from "../_Components/IconButton.vue";
	const emits = defineEmits(["toolbox-toggled"]);

	const handleToolboxToggle = (icon: string) =>{
		console.log(`ToolboxMenu Received ${icon}`);
		console.log(`ToolboxMenu Emitting ${icon}`);
		console.dir(icon);
		emits("toolbox-toggled", icon);
	};
</script>

<template>  <!---- Template ------------------------------------------------>

  <div id="toolbox-menu-container">

    <!---- Top-Aligned --------------------------------------------------------->
    <div id="toolbox-menu-start">
      <icon-button :icon="'file-multiple'" class="toolbox-menu-icon" @IconClicked="handleToolboxToggle" />
      <icon-button :icon="'search'" class="toolbox-menu-icon" @IconClicked="handleToolboxToggle" />
    </div>

    <!---- Bottom-Aligned ------------------------------------------------------>
    <div id="toolbox-menu-end">
      <icon-button :icon="'account-circle'" class="toolbox-menu-icon" @IconClicked="handleToolboxToggle" />
      <icon-button :icon="'settings'" class="toolbox-menu-icon" @IconClicked="handleToolboxToggle" />
      <icon-button :icon="'github-octa-cat'" class="toolbox-menu-icon" @IconClicked="handleToolboxToggle" />
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
