<template>
    <div>
        <div v-for="person in personData" :key="person.id">
            <Card :data="person"></Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '../person/Card.vue';
import { personData, getData } from '../../composables/api';

import { onMounted } from 'vue'


onMounted(() => {
    getData()
})
</script>