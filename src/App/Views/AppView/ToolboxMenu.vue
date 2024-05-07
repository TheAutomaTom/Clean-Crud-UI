<script setup lang="ts">
  import ToolboxSelection from "./ToolboxSelection.vue";

  const emits = defineEmits(["toolbox-toggled"]);

  // const handleToolboxToggle = (name: string) =>{
  //   console.log(`Emitting ${name}`);
  //   emits("toolbox-toggled", name);
  // };
  const handleToolboxToggle = () =>{
    console.log("Emitting ");
    emits("toolbox-toggled", "Yo!");
  };

</script>

<template>  <!---- Template ------------------------------------------------>
<div id="toolbox-menu-container">
  <!-- 
   
  <toolbox-selection
    @toolbox-toggled="handleToolboxToggle"
    :icon="'account-circle'" 
    :label="'User'"
    class="bordered"
  />
  <toolbox-selection
    @toolbox-toggled="handleToolboxToggle"
    :icon="'account-circle'" 
    :label="'User'"
    class="bordered"
  />
  <toolbox-selection
    @toolbox-toggled="handleToolboxToggle"
    :icon="'account-circle'" 
    :label="'User'"
    class="bordered"
  /> 

  <div @click="handleToolboxToggle" class="bg-green-400 toolbox-menu-item">1</div>
  <div @click="handleToolboxToggle" class="bg-green-500 toolbox-menu-item">2</div>
  <div @click="handleToolboxToggle" class="bg-green-600 toolbox-menu-item">3</div>
  <div @click="handleToolboxToggle" class="bg-green-700 toolbox-menu-item">4</div>
-->

 <div id="toolbox-menu-start" 
  class="bordered">
  <div class="bordered toolbox-menu-item-start">A1</div>
  <div class="bordered toolbox-menu-item-start">A2</div>
  <div class="bordered toolbox-menu-item-start">A3</div>
  <div class="bordered toolbox-menu-item-start">A4</div>
  <div class="bordered toolbox-menu-item-start">A5</div>
  <div class="bordered toolbox-menu-item-start">A6</div>
  <div class="bordered toolbox-menu-item-start">A7</div>
</div>

<div id="toolbox-menu-end" 
  class="bordered">
  <div class="bordered toolbox-menu-item-end">A8</div>
  <div class="bordered toolbox-menu-item-end">A9</div>
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
  
//   g-icon{
//     @apply h-10 w-10;
//     // align-self: center;
//     // justify-self: center;
//   }
// }

</style>
