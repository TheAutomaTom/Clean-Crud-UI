<script setup lang="ts">
	import { ref } from "vue";
	import { useAccountState } from "../../State/AccountState";
	import { darkTheme } from "naive-ui";
	import { NConfigProvider } from "naive-ui";
  
	const account$ = useAccountState();
	const username = ref("");
	const passAttempt = ref("");

	const TryLogIn = () =>{
		console.log(`AccountToolbox.TryLogIn Start: ${username.value}/ ${passAttempt.value}`);
		account$.TryLogIn(username.value, passAttempt.value);
	};

</script>
<template>  <!---- Template ------------------------------------------------>

  <Teleport to="#toolbox-drawer">
    <div class="toolbox-drawer-wrapper">

      <div class="drawer-title"> 
        Account
      </div>

      <div id="account-credentials-form">
        <input 
          v-model="username" 
          type="text" 
          placeholder="User Name" 
          class="mb-4"
        />

        <input
          v-model="passAttempt" 
          type="password"
          show-password-on="click"
          clearable 
          placeholder="Password"
          :maxlength="30"
          class="mb-4"
          
        />
        <button  
          class="drawer-button"
          @click="TryLogIn"
        >
          Log in
        </button>
      
      </div>

      <div id="account-info">
        <em>Not currently logged in.</em>
      </div>
    
    </div>
  </Teleport>

</template>

<style scoped lang="scss">  //---- Style ----------------------------------->

$bg-content: #1F1F1F;
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

</style>