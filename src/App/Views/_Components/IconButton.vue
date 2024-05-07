
<template>  
  <div class="icon-wrapper" @click="handleClick">
    <g-icon 
      :icon=icon
      :class=$attrs.class 
      :style="$attrs.style" 
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