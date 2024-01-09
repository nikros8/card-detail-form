<script setup lang="ts"></script>
<template>
  <div class="card-front">
    <div class="circles-container">
      <div class="big-circle"></div>
      <div class="small-circle"></div>
    </div>
    <div class="card-details">
      <div class="card-number">0000 0000 0000 0000</div>
      <div class="container">
        <div class="card-holder-name">JANE APPLESEED</div>
        <div class="card-expire-date">00/00</div>
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
  align-self: center;
  margin-right: 2px;
  margin-bottom: 15px;
  font-size: 18px;
  letter-spacing: 2.2px;
}
.card-front .card-details .container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  font-size: 10px;
  letter-spacing: 0.7px;
}
.card-front .card-details .container .card-holder-name {
}
</style>
