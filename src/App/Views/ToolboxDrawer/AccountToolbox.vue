<script setup lang="ts">
	import { useAccountViewModel } from "@/App/ViewModels/Toolbox/AccountViewModel";
	import { ref } from "vue";
  
	const _accountVM = useAccountViewModel();

	const username = ref(_accountVM.User.username);
	const email = ref(_accountVM.User.email);
	const password = ref("Admin123!");
	const passwordConfirmation = ref("Admin123!");
	const firstName = ref(_accountVM.User.firstName);
	const lastName = ref(_accountVM.User.lastName);

	const showRegistrationForm = ref(false);

	const LogIn = () =>{
		console.log(`AccountToolbox.LogIn Start: {${username.value}}, {${password.value}}.`);
		_accountVM.LogIn(username.value, password.value);
	};

	const Register = () =>{
		console.log("AccountToolbox.Register Start.");
		_accountVM.Register(
			username.value,
			email.value,
			password.value,
			firstName.value,
			lastName.value
		);
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
          v-model="password" 
          type="password"
          show-password-on="click"
          clearable 
          placeholder="Password"
          :maxlength="30"
          class="mb-4"
          
        />

        <input
          v-if="showRegistrationForm == true"
          v-model="passwordConfirmation" 
          type="password"
          show-password-on="click"
          clearable 
          placeholder="Password"
          :maxlength="30"
          class="mb-4"          
        />
        <input 
          v-if="showRegistrationForm == true"
          v-model="email" 
          type="text" 
          placeholder="Email" 
          class="mb-4"
        />
        <input 
          v-if="showRegistrationForm == true"
          v-model="firstName" 
          type="text" 
          placeholder="First Name" 
          class="mb-4"
        />
        <input 
          v-if="showRegistrationForm == true"
          v-model="lastName" 
          type="text" 
          placeholder="Last Name" 
          class="mb-4"
        />
        <button
          v-if="showRegistrationForm == false"
          class="drawer-button"
          @click="LogIn()"
        >
          Log in
        </button>
        
        <button
          v-if="showRegistrationForm == true"
          class="drawer-button"
          @click="Register()"
        >
          Register
        </button>
        
        <button
          class="drawer-button-alt"
          @click="showRegistrationForm = !showRegistrationForm"
        >
          {{ showRegistrationForm == true ? "Log in with current account" : "Register new account"}}
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


</style>