<template>
  <div
    class="flex items-center gap-2 overflow-hidden rounded-full bg-base-light-gray px-3 py-2.5"
  >
    <Icon icon="ion:search-sharp" color="black" class="text-xl" />

    <input
      type="text"
      placeholder="Where to?"
      class="cursor-pointer bg-base-light-gray text-xl font-semibold outline-none placeholder:text-base-light-black"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
