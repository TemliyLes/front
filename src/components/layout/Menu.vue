<template>
    <div class="w-[300px] bg-gray-950 h-dvh">
        <div class="pt-12">
            <a :class="isActive(item.to) ? 'bg-gray-800' : ''"
                class="text-gray-100 flex gap-2 block text-sm pl-6 py-2 hover:bg-gray-700 transition transition-all"
                v-for="item in menuItems" :href="item.to" :key="item.to">
                <span class="pi mt-0.5" :class="`pi-${item.icon}`"></span><span>{{
                    item.title }}</span></a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
type TMenuItem = {
    title: string
    to: string
    icon: string
}
const menuItems: TMenuItem[] = [
    {
        title: 'Главная',
        to: '/main',
        icon: 'warehouse'
    },
    {
        title: 'Участники',
        to: '/persons',
        icon: 'users'
    },
    {
        title: 'ОПН',
        to: '/opn',
        icon: 'map'
    }
]
const isActive = (href: string) => route.path.includes(href)
</script>