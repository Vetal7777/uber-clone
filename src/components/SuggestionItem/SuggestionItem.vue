<template>
  <button
    :class="[
      { 'max-h-h-37 h-37 justify-end': src, 'justify-center': !src },
      'bg-base-light-gray flex w-full flex-col items-center  gap-5 rounded-xl p-4 text-xl outline-none transition-all hover:scale-105'
    ]"
    @click="$emit('click')"
  >
    <img v-if="src" :src="src" class="max-w-24 overflow-auto" />

    {{ title }}
  </button>
</template>

<script setup lang="ts">
import type { SuggestionItemProps } from './types'

defineProps<SuggestionItemProps>()
</script>
