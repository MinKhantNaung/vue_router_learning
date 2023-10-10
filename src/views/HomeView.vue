<script setup>
import cars from '../data/cars.json'
</script>

<template>
  <div>
    <div class="cars">
      <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id">
        {{ car.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}

.cars a {
  color: black;
  width: 100px;
  box-shadow: 10px 10px 10px black;
  margin-right: 5px;
}
</style>
