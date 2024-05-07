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

  <!---- Top-Aligned --------------------------------------------------------->
  <div id="toolbox-menu-container">
    <div id="toolbox-menu-start">
      <icon-button :icon="'account-circle'" @IconClicked="handleToolboxToggle"></icon-button>
    </div>

    <!---- Bottom-Aligned ------------------------------------------------------>
    <div id="toolbox-menu-end">
      <icon-button :icon="'account-circle'" @IconClicked="handleToolboxToggle"></icon-button>
      <icon-button :icon="'account-circle'" @IconClicked="handleToolboxToggle"></icon-button>
    </div>
  </div>
</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

// TODO: Access Index.scss variables
$fg-font-3: #7e7e7e;
$fg-font-4: #4b4b4b;

.toolbox-menu-start{
  justify-items: start;
}

#toolbox-menu-container{
  grid-row:1/3;
  grid-column:1/2;

  display: grid;
  grid-template-rows: auto 5em;
}

.toolbox-menu-item-start{
  height:2.5em;
}

#toolbox-menu-end{
  height: 15em;
  justify-items: end;
  bottom:0;
}

.toolbox-menu-item-end{
  height:2.5em;
  justify-items: end;
}

// toolbox-selection {
//   // @apply w-full;
//   // display: block;
//   // grid-column-start:1;
//   // grid-column-end:-1;
//   @apply w-12;
//   // display: grid;
//   // grid-column-start:1;
//   // grid-column-end:2;
//   // Justify-items: center;
//   color: $fg-font-4;
//   fill: $fg-font-4;

//   :hover{
//     color: $fg-font-3;
//     fill: $fg-font-3;
//   }  

//   div{
//     @apply font-bold text-lg;
//     // align-self: center;
    
//   }    
  
  .icon-wrapper{
    color: $fg-font-4;
    fill: $fg-font-4;
    :hover{
      color: $fg-font-3;
      fill: $fg-font-3;
    }
  }


</style>
