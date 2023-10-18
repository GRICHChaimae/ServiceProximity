<template>
  <input :type="type" :placeholder="placeholder">
</template>

<script setup>
defineProps({
  type: String,
  placeholder: String
})
</script>

<style scoped>
input {
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px 16px;
}

::placeholder {
  /* color: burlywood; */
}
</style>
