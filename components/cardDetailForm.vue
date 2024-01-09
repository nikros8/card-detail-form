<script setup lang="ts">
import { type Inputs } from "@/types/index"

const inputs: Inputs = reactive({
  cardHolderNameInput: {
    title: "CARDHOLDER NAME",
    type: "text",
    value: "",
    placeholder: "e.g. Jane Appleseed",
    width: "100%",
    height: "45px",
  },
  cardNumberInput: {
    title: "CARD NUMBER",
    type: "number",
    value: "",
    placeholder: "e.g. 1234 5678 9123 0000",
    width: "100%",
    height: "45px",
  },
  cardExpirationMonth: {
    title: "EXP. DATE",
    type: "number",
    value: "",
    placeholder: "MM",
    maxNumber: 99,
    width: "96%",
    height: "45px",
  },
  cardExpirationYear: {
    title: "(MM/YY)",
    type: "number",
    value: "",
    placeholder: "YY",
    width: "91%",
    height: "45px",
  },
  cardCVC: {
    title: "CVC",
    type: "text",
    value: "",
    placeholder: "e.g. 123",
    width: "100%",
    height: "45px",
  },
})
const emits = defineEmits(["inputs"])

watch(inputs, () => {
  emits("inputs", inputs)
})

function submit() {
  console.log("DONE")
}
</script>
<template>
  <div class="card-detail-form">
    <form @submit.prevent="submit" name="card-detail">
      <div class="inputs-container">
        <Input
          v-model:input-value="inputs.cardHolderNameInput.value"
          :type="inputs.cardHolderNameInput.type"
          :title="inputs.cardHolderNameInput.title"
          :value="inputs.cardHolderNameInput.value"
          :placeholder="inputs.cardHolderNameInput.placeholder"
          :width="inputs.cardHolderNameInput.width"
          :height="inputs.cardHolderNameInput.height"
        />
        <Input
          v-model:input-value="inputs.cardNumberInput.value"
          :type="inputs.cardNumberInput.type"
          :title="inputs.cardNumberInput.title"
          :value="inputs.cardNumberInput.value"
          :placeholder="inputs.cardNumberInput.placeholder"
          :width="inputs.cardNumberInput.width"
          :height="inputs.cardNumberInput.height"
        />
        <div class="inputs-row">
          <Input
            v-model:input-value="inputs.cardExpirationMonth.value"
            style="flex: 0 0 23%"
            :type="inputs.cardExpirationMonth.type"
            :title="inputs.cardExpirationMonth.title"
            :value="inputs.cardExpirationMonth.value"
            :placeholder="inputs.cardExpirationMonth.placeholder"
            :maxNumber="inputs.cardExpirationMonth.maxNumber"
            :width="inputs.cardExpirationMonth.width"
            :height="inputs.cardExpirationMonth.height"
          />
          <Input
            v-model:input-value="inputs.cardExpirationYear.value"
            style="flex: 0 0 24%"
            :type="inputs.cardExpirationYear.type"
            :title="inputs.cardExpirationYear.title"
            :value="inputs.cardExpirationYear.value"
            :placeholder="inputs.cardExpirationYear.placeholder"
            :width="inputs.cardExpirationYear.width"
            :height="inputs.cardExpirationYear.height"
          />
          <Input
            v-model:input-value="inputs.cardCVC.value"
            style="flex: 0 1 50%"
            :type="inputs.cardCVC.type"
            :title="inputs.cardCVC.title"
            :placeholder="inputs.cardCVC.placeholder"
            :width="inputs.cardCVC.width"
            :height="inputs.cardCVC.height"
          />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  </div>
  <h1>{{ inputs.cardExpirationYear.value }}</h1>
</template>
<style scoped>
.card-detail-form {
  display: flex;
  justify-content: center;
  margin-top: 49px;
}
.card-detail-form form {
  max-width: 327px;
  width: 100%;
}
.card-detail-form form button {
  background-color: hsl(278, 68%, 11%);
  color: hsl(270, 3%, 87%);
  font-size: 17px;
  letter-spacing: 1.3px;
  width: 100%;
  height: 53px;
  margin-top: 28px;
  border: none;
  border-radius: 8px;
}
.card-detail-form form .inputs-container {
  display: flex;
  flex-direction: column;
  row-gap: 21px;
}
.card-detail-form form .inputs-container .inputs-row {
  display: flex;
  justify-content: space-between;
}
</style>
