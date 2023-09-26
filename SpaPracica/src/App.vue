<template>
  <!-- Навигация -->
  <TheMenu />

  <!-- Выбранная вкладка-->
  <router-view />
</template>

<script setup>
/** @module TheMenu - Навигация */
import TheMenu from '@/components/TheMenu.vue'
</script>