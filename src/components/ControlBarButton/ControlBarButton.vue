<template>
  <button
    :class="[
      'flex h-16 cursor-pointer flex-col items-center justify-end gap-0.5 pb-2 text-sm text-base-gray transition-all hover:opacity-70 ',
      { active: actvie }
    ]"
  >
    <Icon
      v-if="iconifyName"
      :icon="iconifyName"
      :color="actvie ? 'black' : '#A6A6A6'"
      class="text-xl"
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
  @apply pb-3 text-black;
}
</style>
