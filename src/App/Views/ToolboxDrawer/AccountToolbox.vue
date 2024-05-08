<script setup lang="ts">
// import { useAppState } from "./stores/AppState";
// import { onMounted, onUnmounted } from "vue";
// import Header from "./infra/components/body/Header.vue";
// const app$ = useAppState();

</script>
<template>  <!---- Template ------------------------------------------------>
  
  <Teleport to="#toolbox-drawer">    
    <div 
      id="account-toolbox"
    >
      Account Drawer
    </div>
  </Teleport>
</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

#account-toolbox{
  height: 100%;
  background-color: blue;
}
</style>