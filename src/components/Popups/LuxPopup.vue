<template>
  <div class="relative flex min-h-screen w-screen flex-col gap-12 bg-white">
    <!-- Close button -->
    <button
      class="absolute left-5 top-5 z-10 rounded-full bg-white p-2 transition-all hover:scale-110"
      @click="$emit('close')"
    >
      <Icon icon="material-symbols:close" width="55" />
    </button>
    <!-- Pic -->
    <div class="h-96 max-h-96 overflow-hidden">
      <img src="/lux.png" class="w-full scale-110" />
    </div>
    <!-- Main -->
    <div class="flex flex-col gap-10 p-7">
      <!-- Title -->
      <div class="text-6xl font-bold">
        Ride in premium cars, enjoy elevated service
      </div>
      <!-- Description -->
      <div class="text-2.5xl font-light">
        In addition to offering a little extra time at pickup,
        <span class="font-bold">Uber Black</span>
        lets you tell your top-rated driver in advance what temperature and
        level of conversation you'd like.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
