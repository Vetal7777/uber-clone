<template>
  <div
    class="flex items-center gap-2 overflow-hidden rounded-full bg-base-light-gray px-3 py-2.5 sm:gap-5 sm:px-6 sm:py-7"
  >
    <Icon icon="ion:search-sharp" color="black" class="text-xl sm:text-4xl" />

    <input
      type="text"
      placeholder="Where to?"
      class="cursor-pointer bg-base-light-gray text-xl font-semibold outline-none placeholder:text-base-light-black sm:text-4xl"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
