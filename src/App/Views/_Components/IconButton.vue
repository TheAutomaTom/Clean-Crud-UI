<template>  
  <div class="icon-wrapper" @click="handleClick">
    <g-icon 
      :icon=icon
    />
  </div>
</template>
<script setup lang="ts">
	import { defineProps} from "vue";	
	const props = defineProps({
		icon: { type: String, default: "psychology-question-mark" }    
	});

	const emits = defineEmits<{
		(e:"icon-clicked", val:string):void
	}>();

	const handleClick = () => {
    
		console.log(`IconButton Emitting "${props.icon}"`);
		emits("icon-clicked", props.icon);
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