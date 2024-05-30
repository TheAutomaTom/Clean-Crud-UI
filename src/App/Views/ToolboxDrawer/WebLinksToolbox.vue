<script setup lang="ts">

	import { useWebLinksViewModel } from "@/App/ViewModels/Toolbox/WebLinks/WebLinksViewModel";
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
        <ul>
          <li><a href="https://example.com">Website</a></li>
          <li><a href="mailto:m.bluth@example.com">Email</a></li>
          <li><a href="tel:+123456789">Phone</a></li>
        </ul>

      </div>
    </div>

  </Teleport> 

</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

$bg-content: #1F1F1F;
$bg-accent-neutral: #0078D4;
$bg-accent-hover: #0f65a7;
$bg-accent-active: #1c91eb;

$bg-ancillary: #181818;

$bg-content: #1F1F1F;
$fg-font-5: #3a3a3a;
$fg-font-4: #636363;
$fg-font-3: #bdbbbb;
$fg-font-1: #f4f4f4;
$fg-border: #2B2B2B;
$bg-accent-neutral: #0078D4;
$bg-accent-hover: #0f65a7;
$bg-accent-active: #1c91eb;

.drawer-title{
  @apply mb-2;
  font-variant: small-caps;
}
.toolbox-drawer-wrapper{
  @apply p-3 text-xs;  
  height: 100%;
  width: 100%;  
}

input{
  padding:2px;
  width: 100%;  
  background-color: $bg-content;
}

.drawer-button{
  @apply mb-4;
  height: 1.765em;
  width: 100%;  
  background-color: $bg-accent-neutral;
  
}
.drawer-button:hover {
    background-color: $bg-accent-hover;
  }  
.drawer-button:active {
    background-color: $bg-accent-active;
  }  

.drawer-button-alt{
  @apply mb-4;
  height: 1.765em;
  width: 100%;  
  color: $bg-accent-active;
  background-color: $bg-ancillary;
  
}
.drawer-button-alt:hover {
  color: $bg-accent-hover;
  background-color: $bg-ancillary;
}

</style>