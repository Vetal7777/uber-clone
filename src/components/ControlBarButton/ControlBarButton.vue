<template>
  <button
    :class="[
      'flex h-32 cursor-pointer flex-col items-center justify-end gap-2 pb-6 text-xl text-base-gray transition-all hover:opacity-70',
      { active: actvie }
    ]"
  >
    <Icon
      v-if="iconifyName"
      :icon="iconifyName"
      :color="actvie ? 'black' : '#A6A6A6'"
      height="50px"
    />
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ControlBarButtonProps } from './types'

defineProps<ControlBarButtonProps>()
const slots = defineSlots()
</script>

<style lang="scss" scoped>
.active {
  @apply pb-8 text-black;
}
</style>
