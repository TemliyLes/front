<template>
    <div class="p-4">
        <div class="flex justify-between gap-12">
            <img class="w-24 h-24 rounded-full object-cover" :src="getImgSrc(data.photo.url)">
            <div class="w-full">
                <div class="text-lg alumni text-gray-700">{{ data.name }}</div>
                <div class="h-px bg-gray-300 w-full my-2"></div>
                <div class="text-sm">
                    <p v-for="(p, pIndex) in data.about" :key="pIndex">
                    <p v-for="(underP, underPIndex) in p.children" :key="underPIndex">
                        {{ underP.text }}
                    </p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

type TChildren = {
    id: number,
    type: string,
    text: string
}

type TPhoto = {
    url: string,
}

type TAbout = {
    type: string,
    children: TChildren[]
}

type CardData = {
    id: number,
    documentId: string,
    name: string,
    about: TAbout[],
    photo: TPhoto
}

const props = defineProps<{
    data: CardData
}>()
import { onMounted } from 'vue'

import { getImgSrc } from '../../composables/api'
onMounted(() => {
    console.dir('--child--')
    console.dir(props, '--child--')
})

</script>