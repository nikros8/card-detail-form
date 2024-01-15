<script setup lang="ts">
const props = defineProps({
  title: String,
  type: { type: String, required: true },
  placeholder: String,
  error: String,
  formatInput: Function as PropType<
    ((event: KeyboardEvent, maxlength: number) => void) | undefined
  >, // Specify function signature or undefined
  width: { type: String, required: true },
  height: { type: String, required: true },
})

const inputValue = defineModel("inputValue")
</script>
<template>
  <div class="input-container">
    <div v-if="title" class="title">{{ props.title }}</div>
    <input
      v-model="inputValue"
      :type="props.type"
      :error="props.error"
      @keypress="props.formatInput"
      :placeholder="props.placeholder"
      :style="{ width: props.width, height: props.height }"
    />
    <div v-if="props.error" class="error">{{ props.error }}</div>
  </div>
</template>
<style scoped>
.input-container .error {
  position: absolute;
  font-size: 10px;
  color: #d46879;
}
.input-container .title {
  color: hsl(278, 68%, 11%);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
input {
  color: #251834;
  font-size: 17px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-indent: 16px;
  padding-top: 2px;
}
input::-webkit-input-placeholder {
  color: hsl(270, 3%, 87%);
  font-size: 18px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-indent: 16px;
  /* Chrome/Opera/Safari */
}
input::-moz-placeholder {
  color: hsl(270, 3%, 87%);
  font-size: 17px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-indent: 16px;
  /* Firefox 19+ */
}
input:-ms-input-placeholder {
  color: hsl(270, 3%, 87%);
  font-size: 17px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-indent: 16px;
  /* IE 10+ */
}
input:-moz-placeholder {
  color: hsl(270, 3%, 87%);
  font-size: 17px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-indent: 16px;
  /* Firefox 18- */
}
</style>
