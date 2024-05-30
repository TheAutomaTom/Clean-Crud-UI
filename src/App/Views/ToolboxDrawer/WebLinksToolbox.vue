<script setup lang="ts">

	import { useWebLinksViewModel } from "@/App/ViewModels/Toolbox/WebLinksViewModel";
	import { ref } from "vue";
  
  
	const _VM = useWebLinksViewModel();

	const homePage = _VM.HomePage;

</script>
<template>  <!---- Template ------------------------------------------------>
  <Teleport to="#toolbox-drawer">
    <div class="toolbox-drawer-wrapper">

      <div class="drawer-title"> 
        Web Links
      </div>

      <div 
        id="web-links-list"        
      >
        <ul class="drawer-link-list">
          <li><a href="https://github.com/TheAutomaTom" target="_blank">Github</a></li>
          <li><a href="https://www.SurrealityCheck.org" target="_blank">SurrealityCheck.org</a></li>
          <li><a href="mailto:m.TheAutomaTom@gmail.com" target="_blank">Email</a></li>
        </ul>

      </div>
    </div>

  </Teleport> 

</template>