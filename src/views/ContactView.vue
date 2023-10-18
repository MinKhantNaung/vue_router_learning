<script setup>
import { useRoute } from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute();

const car = cars.find(car => car.id === parseInt(route.params.id))
</script>

<template>
    <div>
        <h1>Contact View</h1>
        <p>Dealer - {{ car.contact.dealer }}</p>
        <p>Phone - {{ car.contact.number }}</p>
    </div>
</template>