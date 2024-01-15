<script setup lang="ts"></script>
<template>
  <main>
    <div class="container">
      <CardPreview />
      <CardDetailForm />
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
</style>
