<script setup lang="ts">
// import { useAppState } from "./stores/AppState";
// import { onMounted, onUnmounted } from "vue";
// import Header from "./infra/components/body/Header.vue";
// const app$ = useAppState();

const emits = defineEmits(["toolbox-toggled"]);
const handleClick = (name: string) =>{
  console.log(`Emitting ${name}`);
  emits("toolbox-toggled", name);

};

</script>
<template>  <!---- Template ------------------------------------------------>
  <div class="border-b-red-400">
    
    <g-icon class="toolbox-menu-icon"  :name="'account-circle'"     @click="handleClick('account-circle')"></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'account-circle-off'" @click="handleClick('account-circle-off')"></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'id-badge'"           @click="handleClick('id-badge')"></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'help'"               @click="handleClick('help')" ></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'manage-account'"     @click="handleClick('manage-account')"></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'person-edit'"        @click="handleClick('person-edit')"></g-icon> 
    <g-icon class="toolbox-menu-icon"  :name="'person-off'"         @click="handleClick('person-off')"></g-icon> 
  </div>
</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

</style>