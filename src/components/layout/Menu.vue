<template>
    <div class="w-[300px] bg-gray-950 h-dvh">
        <div class="pt-12">
            <a class="text-gray-100 flex gap-2 block text-sm pl-6 py-2 hover:bg-gray-700" v-for="item in menuItems"
                :href="item.to" :key="item.to">
                <span class="pi mt-0.5" :class="`pi-${item.icon}`"></span><span>{{ item.title }}</span></a>
        </div>
    </div>
</template>

<script setup lang="ts">
type TMenuItem = {
    title: string
    to: string
    icon: string
}
const menuItems: TMenuItem[] = [
    {
        title: 'Главная',
        to: '/',
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
</script>