<script setup lang="ts">
import { type Inputs } from "@/types/index"
import { store } from "@/store/store.js"

const router = useRouter()

const inputs: Inputs = reactive({
  cardHolderName: {
    title: "CARDHOLDER NAME",
    type: "text",
    error: "",
    placeholder: "e.g. Jane Appleseed",
    width: "100%",
    height: "45px",
  },
  cardNumber: {
    title: "CARD NUMBER",
    type: "text",
    definedLength: 16,
    error: "",
    placeholder: "e.g. 1234 5678 9123 0000",
    width: "100%",
    height: "45px",
  },
  cardExpirationMonth: {
    title: "EXP. DATE",
    type: "number",
    definedLength: 2,
    error: "",
    placeholder: "MM",
    width: "96%",
    height: "45px",
  },
  cardExpirationYear: {
    title: "(MM/YY)",
    type: "number",
    definedLength: 2,
    error: "",
    placeholder: "YY",
    width: "91%",
    height: "45px",
  },
  cardCVC: {
    title: "CVC",
    type: "number",
    definedLength: 3,
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

function isInputValid(): boolean {
  const isValid = ref(true)
  const cardDetails = Object.entries(store)
  cardDetails.forEach(([key, value]) => {
    if (String(value).length < 1) {
      inputs[key].error = Errors.isEmpty
      isValid.value = false
    } else if (
      inputs[key].definedLength &&
      String(value).length > 0 &&
      String(value).length !== inputs[key].definedLength
    ) {
      inputs[key].error = Errors.isWrongFormat
      isValid.value = false
    } else {
      inputs[key].error = ""
    }
  })
  return isValid.value
}

function submit() {
  if (isInputValid()) {
    router.push({ path: "/completed" })
  }
}
</script>
<template>
  <div class="card-detail-form">
    <form @submit.prevent="submit" name="card-detail">
      <div class="inputs-container">
        <BaseInput
          v-model:input-value="store.cardHolderName"
          :type="inputs.cardHolderName.type"
          :title="inputs.cardHolderName.title"
          :error="inputs.cardHolderName.error"
          :formatInput="(event) => formatInput(event, 24, false)"
          :placeholder="inputs.cardHolderName.placeholder"
          :width="inputs.cardHolderName.width"
          :height="inputs.cardHolderName.height"
        />
        <BaseInput
          v-model:input-value="store.cardNumber"
          :type="inputs.cardNumber.type"
          :title="inputs.cardNumber.title"
          :error="inputs.cardNumber.error"
          :formatInput="(event) => formatInput(event, 16, true)"
          :placeholder="inputs.cardNumber.placeholder"
          :width="inputs.cardNumber.width"
          :height="inputs.cardNumber.height"
        />
        <div class="inputs-row">
          <BaseInput
            v-model:input-value="store.cardExpirationMonth"
            style="flex: 0 0 23%"
            :type="inputs.cardExpirationMonth.type"
            :title="inputs.cardExpirationMonth.title"
            :error="inputs.cardExpirationMonth.error"
            :formatInput="(event) => formatInput(event, 2, true)"
            :placeholder="inputs.cardExpirationMonth.placeholder"
            :width="inputs.cardExpirationMonth.width"
            :height="inputs.cardExpirationMonth.height"
          />
          <BaseInput
            v-model:input-value="store.cardExpirationYear"
            style="flex: 0 0 24%"
            :type="inputs.cardExpirationYear.type"
            :title="inputs.cardExpirationYear.title"
            :error="inputs.cardExpirationYear.error"
            :formatInput="(event) => formatInput(event, 2, true)"
            :placeholder="inputs.cardExpirationYear.placeholder"
            :width="inputs.cardExpirationYear.width"
            :height="inputs.cardExpirationYear.height"
          />
          <BaseInput
            v-model:input-value="store.cardCVC"
            class="input-cvc"
            style="flex: 0 1 50%"
            :type="inputs.cardCVC.type"
            :title="inputs.cardCVC.title"
            :error="inputs.cardCVC.error"
            :formatInput="(event) => formatInput(event, 3, true)"
            :placeholder="inputs.cardCVC.placeholder"
            :width="inputs.cardCVC.width"
            :height="inputs.cardCVC.height"
          />
        </div>
      </div>
      <BaseButton class="button" value="Confirm" />
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
.card-detail-form form .button {
  margin-top: 28px;
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
@media (min-width: 1100px) {
  .card-detail-form {
    align-items: center;
    margin-top: 0;
  }
  .card-detail-form form {
    max-width: 381px;
  }
  .card-detail-form form .button {
    margin-top: 40px;
  }
  .card-detail-form form .inputs-container {
    row-gap: 26px;
  }
  .card-detail-form form .inputs-container .inputs-row {
    justify-content: unset;
  }

  .card-detail-form form .inputs-container .inputs-row .input-cvc {
    margin-left: auto;
  }
}
</style>
