<script setup>
import { useRoute, useRouter } from "vue-router";
import cars from '../data/cars.json'

const route = useRoute();
const router = useRouter();
// useRoute for get route information
// useRoute is for get current route information
// useRouter is for modifying route

const carId = parseInt(route.params.id)
const car = cars.find(car => car.id === carId)

const showContact = () => {
    if(carId === 4) return;
    router.push(`/cars/${carId}/contact`)
}
</script>

<template>
    <div>
        <h1>{{ car.name }}</h1>
        <p>{{ car.price }}</p>
        <button @click.prevent="showContact">Contact</button>

        <RouterView />
    </div>
</template>