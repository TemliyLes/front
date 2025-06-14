<script setup lang="ts">
import Menu from './components/layout/Menu.vue';
</script>

<template>
  <div class="relative">
    <div class="fixed top-0 h-12 bg-black w-full"></div>
    <div class="flex top-0">
      <Menu></Menu>
      <div class="pt-12"><router-view></router-view></div>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
