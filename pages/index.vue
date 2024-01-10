<script setup lang="ts">
import { reactive, ref } from "vue"
import { type Inputs } from "../types/index"
import { type CardDetail } from "../types/index"

const cardDetails = reactive<CardDetail>({
  cardHolderName: "",
  cardNumber: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  cvc: "",
})

function handleMyEvent(inputs: Inputs) {
  cardDetails.cardHolderName = String(inputs.cardHolderNameInput.value)
  cardDetails.cardNumber = String(inputs.cardNumberInput.value)
  cardDetails.cardExpirationMonth = String(inputs.cardExpirationMonth.value)
  cardDetails.cardExpirationYear = String(inputs.cardExpirationYear.value)
  cardDetails.cvc = String(inputs.cardCVC.value)
}
</script>
<template>
  <main>
    <div class="container">
      <div class="cards">
        <cardBack :cvc="cardDetails.cvc" />
        <cardFront
          :cardNumber="cardDetails.cardNumber"
          :cardHolderName="cardDetails.cardHolderName"
          :cardExpirationMonth="cardDetails.cardExpirationMonth"
          :cardExpirationYear="cardDetails.cardExpirationYear"
        />
      </div>
      <cardDetailForm @inputs="handleMyEvent" />
    </div>
    <h1></h1>
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
