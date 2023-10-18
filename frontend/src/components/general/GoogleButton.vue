<script setup>
import { decodeCredential, googleLogout  } from 'vue3-google-login'
const callback = (response) => {
  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData)
}
</script>

<template>
  <GoogleLogin :callback="callback" :button-config="{ text: '', size: 'medium', width: '300px' }"/>
</template>
