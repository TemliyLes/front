<template>
    <div class="w-full">
        <div class="w-full h-[50dvh] bg-red-400 overflow-hidden">
            <Map :lines="currentLines" />
        </div>
        <!-- <div>data {{ opnData }}</div> -->
        <div class="bg-gray-100">
            <div v-for="(opn, index) in opnData" :key="opn.id" class="flex gap-4 cursor-pointer h-12 items-center px-4"
                :class="isActive(index) ? 'bg-red-100' : ''" @click="setActive(index)">
                <div>{{ opn.id }}</div>
                <div>{{ formatDate(opn.date) }}</div>
                <div class="flex gap-2">
                    <div>Участников: {{ opn.people.length }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Map from '../opn/Map.vue'
import type { CardData } from '../person/types'
import { getOPNData, opnData, getImgSrc } from '../../composables/api'
import { onMounted, computed, ref } from 'vue'

type TLanLong = {
    id: number,
    Lat: number,
    Long: number
}

type TOpn = {
    id?: number,
    date: Date,
    persons?: CardData[],
    lines?: TLanLong[]
}

const isActive = (index: number) => index === currentIndex.value
const setActive = (index: number) => currentIndex.value = index

const currentIndex = ref(0)
const currentLines = computed<TOpn>(() => opnData.value?.[currentIndex.value]?.lines?.map((latlong: TLanLong) => [latlong.Lat, latlong.Long]))

// console.log(opnData.value)

const formatDate = (date: Date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
};

onMounted(() => {
    getOPNData()
})
</script>