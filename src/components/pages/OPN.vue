<template>
    <div>
        <div>
            <div>MAP</div>
            {{ data }}
        </div>
    </div>
</template>


<script setup lang="ts">
import type { CardData } from '../person/types'

type TLanLong = [number, number]

type TOpn = {
    id?: number,
    date: Date,
    persons?: CardData[],
    lines?: TLanLong[]
}

const data: TOpn[] = [
    {
        id: 1,
        date: new Date(),
        persons: [],
        lines: [[6, 32], [32, 32]]
    }
]

</script>