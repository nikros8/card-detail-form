<script setup lang="ts">
const props = defineProps({
  title: String,
  type: { type: String, required: true },
  placeholder: String,
  maxNumber: Number,
  width: { type: String, required: true },
  height: { type: String, required: true },
})

const model = defineModel()
</script>
<template>
  <div class="input">
    <div v-if="title" class="title">{{ title }}</div>
    <input
      v-model="model"
      :type="props.type"
      :placeholder="props.placeholder"
      :max="props.maxNumber"
      :style="{ width: props.width, height: props.height }"
    />
  </div>
</template>
<style scoped>
.title {
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
