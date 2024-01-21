<template>
  <button
    :class="[
      {
        'h-24 max-h-24 justify-end ': img,
        'justify-center': !img
      },
      'relative flex w-full flex-col items-center gap-3 rounded-xl bg-base-light-gray p-2 text-sm outline-none transition-all hover:scale-105'
    ]"
    @click="$emit('click')"
  >
    <!-- Promo label -->
    <div
      v-if="promo"
      class="absolute bottom-full translate-y-2/4 rounded-full bg-base-green px-2 py-0 text-white"
    >
      Promo
    </div>
    <!-- Image ico -->
    <img v-if="img" :src="img" class="max-w-12 overflow-auto" />

    {{ title }}
  </button>
</template>

<script setup lang="ts">
import type { SuggestionItemProps } from './types'

defineProps<SuggestionItemProps>()
</script>
