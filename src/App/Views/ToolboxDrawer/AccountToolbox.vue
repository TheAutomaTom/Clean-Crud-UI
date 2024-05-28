<script setup lang="ts">
	import { useAccountViewModel } from "@/App/ViewModels/Account/AccountViewModel";
	import { ref } from "vue";
  
	const _accountVM = useAccountViewModel();

	const username = ref(_accountVM.User.username);
	const passAttempt = ref("Admin123!");  

	const LogIn = () =>{
		console.log(`AccountToolbox.LogIn Start: {${username.value}}, {${passAttempt.value}}.`);
		_accountVM.LogIn(username.value, passAttempt.value);
	};

</script>
<template>  <!---- Template ------------------------------------------------>

  <Teleport to="#toolbox-drawer">
    <div class="toolbox-drawer-wrapper">

      <div class="drawer-title"> 
        Account
      </div>

      <div 
        v-if="_accountVM.IsLoggedIn == false"
        id="account-credentials-form"
      >
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
          @click="LogIn()"
        >
          Log in
        </button>
      
        <div id="account-info-empty">
          <p>Not currently logged in.</p>
        </div>

      </div>

      <div id="account-info">

        <div
          v-if="_accountVM.IsLoggedIn == true"  
          id="account-info-user-data"
        >
          <table>
            <tr>
              <td class="pr-2">Username:</td>
              <td>{{ _accountVM.User.username }}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{{ _accountVM.User.email }}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{{ _accountVM.User.firstName }} {{ _accountVM.User.lastName }}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{{ _accountVM.User.userRole }}</td>
            </tr>
          </table>

        </div>
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