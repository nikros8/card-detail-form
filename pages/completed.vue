<script setup lang="ts">
import IconCompleteSVG from "@/assets/images/icon-complete.svg"
</script>
<template>
  <main>
    <div class="container-main">
      <CardPreview />
      <div class="result">
        <img :src="IconCompleteSVG" />
        <div class="title">THANK YOU!</div>
        <div class="info">We've added your card details</div>
        <BaseButton class="button" value="Continue" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
}

.result img {
  width: 80px;
}
.result .title {
  font-size: 29px;
  letter-spacing: 3px;
  margin-top: 36px;
}
.result .info {
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 20px;
  color: #908e91;
}
.result .button {
  margin-top: 28px;
}
@media (min-width: 1100px) {
  .result {
    width: 380px;
    margin-top: unset;
    align-self: center;
  }
}
</style>
