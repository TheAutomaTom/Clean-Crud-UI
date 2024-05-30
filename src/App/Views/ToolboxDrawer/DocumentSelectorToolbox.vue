<script setup lang="ts">
	import { useDocumentsViewModel } from "@/App/ViewModels/Toolbox/DocumentSelector/DocumentSelectorViewModel";
	import { ref } from "vue";
  
	const _VM = useDocumentsViewModel();
</script>
<template>  <!---- Template ------------------------------------------------>

  <Teleport to="#toolbox-drawer">
    <div class="toolbox-drawer-wrapper">

      <div class="drawer-title"> 
        Documents
      </div>

      <div>    
        Not yet implemented
      </div>
    </div>
  </Teleport>

</template>

