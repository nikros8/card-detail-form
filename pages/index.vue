<script setup lang="ts">
import { ref } from "vue"
import { type Inputs } from "../types/index"

const sharedState = ref({
  cardCVCValue: "",
})

function handleMyEvent(inputs: Inputs) {
  sharedState.value.cardCVCValue = inputs.cardCVC.value
}
</script>
<template>
  <main>
    <div class="container">
      <div class="cards">
        <cardBack :cvc="sharedState.cardCVCValue" />
        <cardFront />
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
