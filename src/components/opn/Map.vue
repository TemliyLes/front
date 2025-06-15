<template>
    <div class="relative" ref="wrapper" v-wrap>
        <div class="bg-red-100 absolute top-0 left-0 z-[99999]">
            current {{ lines }}
        </div>
        <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="[51.547271, 43.172316]">
            <l-polyline :lat-lngs="lines" color="red" />
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LPolyline } from "@vue-leaflet/vue-leaflet";

defineProps<{
    lines: any
}>()

const zoom = ref(14)

const parentElem = ref()
const wrapper = ref()
const vWrap = {

    mounted: (e: HTMLElement) => {
        parentElem.value = e?.parentElement
        e.style.width = e?.parentElement?.offsetWidth + 'px'
        e.style.height = e?.parentElement?.offsetHeight + 'px'
    },
}

const autoResize = () => {
    wrapper.value.style.width = parentElem.value.offsetWidth + 'px'
    wrapper.value.style.height = parentElem.value.offsetHeight + 'px'
}

addEventListener('resize', autoResize)

</script>