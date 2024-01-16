<script setup lang="ts">
import { store } from "@/store/store.js"

// const props = defineProps({
//   cvc: Number,
// })
</script>
<template>
  <div class="card-back">
    <div class="card-cvc-container">
      <div class="card-cvc">{{ store.cardCVC || "000" }}</div>
    </div>
  </div>
</template>

<style scoped>
.card-back {
  background-image: url(~/assets/images/bg-card-back.png);
  background-size: contain; /* or use other values like 'contain' */
  background-repeat: no-repeat;
  align-self: flex-end;
  width: 286px;
  height: 160px;
}
.card-back .card-cvc-container {
  display: flex;
  align-items: center;
  justify-content: right;
  position: relative;
  top: 65px;
  left: 29px;
  width: 231px;
  height: 30px;
  border-radius: 4px;
  background-color: #aab6c1;
}
.card-back .card-cvc-container .card-cvc {
  color: #e8f0f6;
  font-size: 10px;
  margin-right: 12px;
}

@media (min-width: 1100px) {
  .card-back {
    width: 447px;
    height: 245px;
    margin-left: 95px;
  }
  .card-back .card-cvc-container {
    top: 101px;
    left: 45px;
    width: 350px;
    height: 38px;
    border-radius: 4px;
  }
  .card-back .card-cvc-container .card-cvc {
    font-size: 15px;
    letter-spacing: 1px;
    margin-right: 6px;
  }
}
</style>
