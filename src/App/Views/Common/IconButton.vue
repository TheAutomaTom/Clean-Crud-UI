<template>  
  <div 
    :class="isActive? 'icon-wrapper-active' : 'icon-wrapper'" 
    @click="handleClick"
  >
    <g-icon 
      :icon=config?.iconName
    />
  </div>
</template>
<script setup lang="ts">
	import {ToolboxMenuItemConfig} from "../../ViewModels/Toolbox/ToolboxMenuItemConfig";
	const props = defineProps({
		config: ToolboxMenuItemConfig,
		isActive: Boolean
	});

	const emits = defineEmits<{
		(e:"icon-clicked", val:ToolboxMenuItemConfig):void
	}>();

	const handleClick = () => {
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
  
}
.icon-wrapper-active{
  fill: $fg-font-1;
}

</style>