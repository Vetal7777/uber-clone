<template>
  <div class="flex flex-col gap-4 sm:gap-11">
    <div class="flex justify-between">
      <div class="text-xl font-bold sm:text-4xl">{{ title }}</div>
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { BlockProps } from './types'

defineProps<BlockProps>()
</script>

<style lang="scss" scoped></style>
