<script lang="ts"></script>

<template>
  <div class="cards">
    <CardPreviewCardBack />
    <CardPreviewCardFront />
  </div>
</template>

<style scope>
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 37px;
  height: 250px;
  margin-top: 32px;
}

@media (min-width: 1100px) {
  .cards {
    flex-direction: column-reverse;
    height: auto;
    margin-top: 0;
  }
}
</style>
