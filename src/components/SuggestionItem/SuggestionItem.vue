<template>
  <button
    :class="[
      { 'h-40 max-h-40 justify-end': img, 'justify-center': !img },
      'bg-base-light-gray relative flex w-full flex-col  items-center gap-5 rounded-xl p-4 text-xl outline-none transition-all hover:scale-105'
    ]"
    @click="$emit('click')"
  >
    <!-- Promo label -->
    <div
      v-if="promo"
      class="bg-base-green absolute bottom-full translate-y-2/4 rounded-full px-4 py-1 text-white"
    >
      Promo
    </div>
    <!-- Image ico -->
    <img v-if="img" :src="img" class="max-w-24 overflow-auto" />

    {{ title }}
  </button>
</template>

<script setup lang="ts">
import type { SuggestionItemProps } from './types'

defineProps<SuggestionItemProps>()
</script>
