<script setup lang="ts">
defineProps({
  value: { type: String, required: true },
})
</script>

<template>
  <button type="submit">{{ value }}</button>
</template>

<style scope>
button {
  background-color: hsl(278, 68%, 11%);
  color: hsl(270, 3%, 87%);
  font-size: 17px;
  letter-spacing: 1.3px;
  width: 100%;
  height: 53px;
  border: none;
  border-radius: 8px;
}
</style>
