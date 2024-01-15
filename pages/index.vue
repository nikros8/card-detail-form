<script setup lang="ts">
import { reactive } from "vue"
import { type Inputs } from "../types/index"
import { type CardDetail } from "../types/index"
import { store } from "@/store/store.js"

// const cardDetails = reactive<CardDetail>({
//   cardHolderName: "",
//   cardNumber: "",
//   cardExpirationMonth: "",
//   cardExpirationYear: "",
//   cvc: "",
// })

// function handleMyEvent(inputs: Inputs) {
//   cardDetails.cardHolderName = String(inputs.cardHolderNameInput.value)
//   cardDetails.cardNumber = String(inputs.cardNumberInput.value)
//   cardDetails.cardExpirationMonth = String(inputs.cardExpirationMonth.value)
//   cardDetails.cardExpirationYear = String(inputs.cardExpirationYear.value)
//   cardDetails.cvc = String(inputs.cardCVC.value)
// }
</script>
<template>
  <main>
    <div class="container">
      <div class="cards">
        <cardBack :cvc="store.cardCVC" />
        <cardFront
          :cardNumber="store.cardNumber"
          :cardHolderName="store.cardHolderName"
          :cardExpirationMonth="store.cardExpirationMonth"
          :cardExpirationYear="store.cardExpirationYear"
        />
      </div>
      <cardDetailForm />
    </div>
  </main>
</template>
<style scoped>
main {
  display: flex;
  justify-content: center;
}
.container {
  max-width: 345px;
  width: 100%;
  margin-left: 16px;
  margin-right: 16px;
}
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  margin-top: 32px;
}
</style>
