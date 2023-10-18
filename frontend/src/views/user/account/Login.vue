<template>
  <div class="parent">
    <div class="login-container">
    <p class="sing-in">Sign In</p>

      <div class="input-container">
    <Input type="text" placeholder="name"/>
    <Input type="text" placeholder="email"/>
    <Input type="password" placeholder="password"/> 
    <AuthButton text="Sign In"/>
    </div>
    <div class="or-container">
      <div class="line"></div>
      <p>or</p>
      <div class="line"></div>
    </div>
    <GoogleButton class="googl-button"/>
    </div>

  </div>
</template>

<script setup>
import Input from '../../../components/general/InputComponent.vue'
import AuthButton from '../../../components/general/AuthButton.vue';
import GoogleButton from '../../../components/general/GoogleButton.vue';
</script>

<style> 
.googl-button{
  width: 100%;
}
.parent {
  height: 100vh;
  display: flex;
  align-items: center;
}
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-container {
  /* width: 24%; */
  border: 1px solid black;
  border-radius: 8px;
  margin: 0 auto;
  height: fit-content;
  padding: 30px 20px;
}
.sing-in {
  margin-top: 0;
  text-align: center;
}
.or-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.line {
  border: 1px solid rgba(167, 167, 167, 0.537);
  flex-grow: 1;
}
</style>