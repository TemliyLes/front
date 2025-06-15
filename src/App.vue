<script setup lang="ts">
import Menu from './components/layout/Menu.vue';
</script>

<template>
  <div class="relative">
    <!-- <div class="fixed top-0 h-12 bg-black w-full"></div> -->
    <div class="flex top-0">
      <Menu class="shrink-0"></Menu>
      <div class="w-full shrink-1 overflow-hidden"><router-view></router-view></div>
    </div>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
