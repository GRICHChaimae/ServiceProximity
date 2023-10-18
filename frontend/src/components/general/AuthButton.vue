<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<script setup>
defineProps({
  text: String,

})
</script>

<style>
button {
  background-color: black;
  color: white;
  padding: 8px 16px;
  width: 100%;
  border: black solid 1px;
  border-radius: 8px;
}
</style>