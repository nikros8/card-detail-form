<script setup lang="ts"></script>
<template>
  <main>
    <div class="container">
      <div class="cards">
        <cardBack />
        <cardFront />
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
  margin-top: 30px;
}
</style>
