<script setup lang="ts">  //---- Script ------------------------------------>
defineProps({
  icon: { type: String, default: "psychology-question-mark" },
  label: { type: String, default: "Label" }
});

const emits = defineEmits(["toolbox-toggled"]);

const handleClick = (label: string) =>{
  console.log(`Emitting ${label}`);
  emits("toolbox-toggled", label);
};

</script>

<template>  <!---- Template ------------------------------------------------>
  <div 
    @click="handleClick(label)"    
  >
  <div class="g-icon">X</div>
    <!-- <g-icon
      class="toolbox-menu-icon"
      :name="icon"
    /> -->
  </div>
</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

// TODO: Access Index.scss variables
// $fg-font-3: #7e7e7e;
// $fg-font-4: #4b4b4b;

// .toolbox-selection{  
//   @apply h-12 w-12;
//   display: grid;
//   grid-column-start:1;
//   grid-column-end:2;
//   Justify-items: center;
//   color: $fg-font-4;
//   fill: $fg-font-4;

//   :hover{
//     color: $fg-font-3;
//     fill: $fg-font-3;
//   }  

//   div{
//     @apply font-bold text-lg;
//     align-self: center;
    
//   }    
  
//   g-icon{
//     @apply h-10 w-10;
//     // align-self: center;
//     // justify-self: center;
//   }
// }

// .toolbox-menu-icon{
//   @apply w-7;
//   grid-column-start:1;
//   grid-column-end:2;
// }

// .toolbox-menu-label{
//   @apply h-12 w-full;
//   grid-column-start:2;
//   grid-column-end:-1;
// }

</style>
