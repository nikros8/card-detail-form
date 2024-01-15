<script setup lang="ts">
import { type Inputs } from "@/types/index"

const inputs: Inputs = reactive({
  cardHolderNameInput: {
    title: "CARDHOLDER NAME",
    type: "text",
    value: "",
    error: "",
    placeholder: "e.g. Jane Appleseed",
    width: "100%",
    height: "45px",
  },
  cardNumberInput: {
    title: "CARD NUMBER",
    type: "text",
    definedLength: 16,
    value: "",
    error: "",
    placeholder: "e.g. 1234 5678 9123 0000",
    width: "100%",
    height: "45px",
  },
  cardExpirationMonth: {
    title: "EXP. DATE",
    type: "number",
    definedLength: 2,
    value: "",
    error: "",
    placeholder: "MM",
    width: "96%",
    height: "45px",
  },
  cardExpirationYear: {
    title: "(MM/YY)",
    type: "number",
    definedLength: 2,
    value: "",
    error: "",
    placeholder: "YY",
    width: "91%",
    height: "45px",
  },
  cardCVC: {
    title: "CVC",
    type: "number",
    definedLength: 3,
    value: "",
    error: "",
    placeholder: "e.g. 123",
    width: "100%",
    height: "45px",
  },
})

enum Errors {
  isEmpty = "Can't be blank",
  isWrongFormat = "Wrong format",
}

const emits = defineEmits(["inputs"])

/// Watch when any input value changes
watch(inputs, () => {
  emits("inputs", inputs)
})

function formatNumber(event: KeyboardEvent, maxlength: number) {
  const inputValue = (event.target as HTMLInputElement).value

  // Check if the pressed key is a digit and the total number of digits (excluding spaces) is less than or equal to 16
  if (
    (event.key.length === 1 && isNaN(Number(event.key))) ||
    inputValue.replace(/\s/g, "").length >= maxlength
  ) {
    event.preventDefault()
  }
}

function submit() {
  for (const key in inputs) {
    if (String(inputs[key].value).length < 1) {
      inputs[key].error = Errors.isEmpty
    } else if (
      inputs[key].definedLength &&
      String(inputs[key].value).length > 0 &&
      String(inputs[key].value).length !== inputs[key].definedLength
    ) {
      inputs[key].error = Errors.isWrongFormat
    } else {
      inputs[key].error = ""
    }
  }
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
          :error="inputs.cardHolderNameInput.error"
          :placeholder="inputs.cardHolderNameInput.placeholder"
          :width="inputs.cardHolderNameInput.width"
          :height="inputs.cardHolderNameInput.height"
        />
        <Input
          v-model:input-value="inputs.cardNumberInput.value"
          :type="inputs.cardNumberInput.type"
          :title="inputs.cardNumberInput.title"
          :error="inputs.cardNumberInput.error"
          :formatNumber="(event) => formatNumber(event, 16)"
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
            :error="inputs.cardExpirationMonth.error"
            :formatNumber="(event) => formatNumber(event, 2)"
            :placeholder="inputs.cardExpirationMonth.placeholder"
            :width="inputs.cardExpirationMonth.width"
            :height="inputs.cardExpirationMonth.height"
          />
          <Input
            v-model:input-value="inputs.cardExpirationYear.value"
            style="flex: 0 0 24%"
            :type="inputs.cardExpirationYear.type"
            :title="inputs.cardExpirationYear.title"
            :error="inputs.cardExpirationYear.error"
            :formatNumber="(event) => formatNumber(event, 2)"
            :placeholder="inputs.cardExpirationYear.placeholder"
            :width="inputs.cardExpirationYear.width"
            :height="inputs.cardExpirationYear.height"
          />
          <Input
            v-model:input-value="inputs.cardCVC.value"
            style="flex: 0 1 50%"
            :type="inputs.cardCVC.type"
            :title="inputs.cardCVC.title"
            :error="inputs.cardCVC.error"
            :formatNumber="(event) => formatNumber(event, 4)"
            :placeholder="inputs.cardCVC.placeholder"
            :width="inputs.cardCVC.width"
            :height="inputs.cardCVC.height"
          />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  </div>
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
