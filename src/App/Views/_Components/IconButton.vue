<template>  
  <div class="icon-wrapper" @click="handleClick">
    <g-icon 
      :icon=config?.iconName
    />
  </div>
</template>
<script setup lang="ts">
	import { defineProps} from "vue";	
	import {ToolboxMenuItemConfig} from "../../State/Models/ToolboxMenuItemConfig";
	const props = defineProps({
		config: ToolboxMenuItemConfig
	});

	const emits = defineEmits<{
		(e:"icon-clicked", val:ToolboxMenuItemConfig):void
	}>();

	const handleClick = () => {    
		console.log(`IconButton Emitting "${props.config?.update}"`);
		emits("icon-clicked", props.config as ToolboxMenuItemConfig);
	};

</script>
<style scoped lang="scss">

// TODO: Access Index.scss variables
$fg-font-1: #f4f4f4;
$fg-font-3: #bdbbbb;
$fg-font-4: #636363;

.icon-wrapper{
  fill: $fg-font-4;
  :hover{
    fill: $fg-font-3;
  }
  :active{
    fill: $fg-font-1;
  }
}

</style>