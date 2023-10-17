<script setup>
import { useRoute } from "vue-router";
import cars from '../data/cars.json'

const route = useRoute();

// useRoute for get route information
const car = cars.find(car => car.id === parseInt(route.params.id))
</script>

<template>
    <div>
        <h1>{{ car.name }}</h1>
        <p>{{ car.price }}</p>
    </div>
</template>