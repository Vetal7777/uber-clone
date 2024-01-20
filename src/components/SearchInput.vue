<template>
  <div
    class="bg-base-light-gray flex items-center gap-5 rounded-full px-6 py-7"
  >
    <Icon icon="ion:search-sharp" color="black" class="text-4xl" />

    <input
      type="text"
      placeholder="Where to?"
      class="bg-base-light-gray placeholder:text-base-light-black cursor-pointer text-4xl font-semibold outline-none"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
