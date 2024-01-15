<script setup lang="ts">
import { store } from "@/store/store.js"

function addSpacesToDigits(digits: string | undefined): string {
  return digits ? digits.replace(/(\d{4})/g, "$1 ").trim() : ""
}
const formattedCardNumber = computed(() => addSpacesToDigits(store.cardNumber) || null)
</script>
<template>
  <div class="card-front">
    <div class="circles-container">
      <div class="big-circle"></div>
      <div class="small-circle"></div>
    </div>
    <div class="card-details">
      <div class="card-number">
        <div
          v-if="formattedCardNumber"
          v-for="char in formattedCardNumber"
          :class="char === ' ' ? 'space' : 'digit'"
        >
          {{ char }}
        </div>
        <div v-else style="letter-spacing: 2.2px">0000 0000 0000 0000</div>
      </div>
      <div class="container">
        <div class="card-holder-name">
          {{ store.cardHolderName?.toUpperCase() || "JANE APPLESEED" }}
        </div>
        <div class="card-expire-date">
          {{ store.cardExpirationMonth || "00" }}{{ "/" }}{{ store.cardExpirationYear || "00" }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-front {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
  padding: 18px 22px 20px 20px;
  top: 126px;
  width: 286px;
  height: 157px;
  background-image: url(~/assets/images/bg-card-front.png);
  background-size: contain; /* or use other values like 'contain' */
  background-repeat: no-repeat;
  color: white;
}

.card-front .circles-container {
  display: flex;
  align-items: center;
}
.card-front .circles-container .big-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: aliceblue;
}
.card-front .circles-container .small-circle {
  width: 11px;
  height: 11px;
  margin-left: 11px;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  background-color: transparent;
}

.card-front .card-details {
  display: flex;
  flex-direction: column;
  color: #f2e5f3;
}
.card-front .card-details .card-number {
  display: flex;
  margin-bottom: 15px;
  font-size: 18px;
}
.card-front .card-details .card-number .digit {
  width: 14px;
}
.card-front .card-details .card-number .space {
  width: 6px;
}
.card-front .card-details .container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  font-size: 10px;
  letter-spacing: 0.7px;
}
</style>
