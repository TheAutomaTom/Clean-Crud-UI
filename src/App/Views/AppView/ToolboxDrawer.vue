<script setup lang="ts">
	import { useAppState } from "@/App/State/AppState";
	const app$ = useAppState();
</script>

<template>  <!---- Template ------------------------------------------------>


  <div 
    v-show="app$.Toolbox$.IsOpen"
    id="toolbox-drawer-content"
  >
    <span>Toolbox Drawer</span>

  </div>

  <!-- 
  <Teleport to="#toolbox-drawer-content">
    <div id="account-toolbox">
      <span>Account Drawer</span>
    </div>
  </Teleport> -->

</template>

<style scoped lang="scss">  //---- Style ---------------------------------~~>

#toolbox-drawer-content{
  height: 80%;
  color:yellow;
  background-color: green;
}
</style>