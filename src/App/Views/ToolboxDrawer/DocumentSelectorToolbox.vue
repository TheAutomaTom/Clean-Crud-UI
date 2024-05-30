<script setup lang="ts">
	import { useDocumentSelectorViewModel } from "@/App/ViewModels/Toolbox/DocumentSelectorViewModel";
  
	const _VM = useDocumentSelectorViewModel();
  
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

