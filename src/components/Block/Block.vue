<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between">
      <div class="text-xl font-bold">{{ title }}</div>
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
