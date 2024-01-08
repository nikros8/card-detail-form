<script setup lang="ts">
import cardBackImage from "~/assets/images/bg-card-back.png"
</script>
<template>
  <div class="container">
    <div class="cards">
      <div class="card-back"></div>
      <div class="card-front"></div>
    </div>
  </div>
</template>

<style scoped>
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
  margin-top: 30px;
}
.card-back {
  background-image: url(~/assets/images/bg-card-back.png);
  background-size: contain; /* or use other values like 'contain' */
  background-repeat: no-repeat;
  align-self: flex-end;
  width: 286px;
  height: 160px;
}
.card-front {
  background-image: url(~/assets/images/bg-card-front.png);
  background-size: contain; /* or use other values like 'contain' */
  background-repeat: no-repeat;
  align-self: flex-start;
  position: relative;
  bottom: 66px;
  width: 286px;
  height: 157px;
}
</style>
