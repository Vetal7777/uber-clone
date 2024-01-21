<template>
  <div class="slide flex min-w-72 max-w-72 cursor-pointer flex-col gap-6">
    <img :src="img" class="w-full rounded-2xl" lazy />
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-0.5">
        <div class="text-l flex gap-1">
          {{ title }}
          <div class="icon transition-all">
            <Icon icon="majesticons:arrow-right" color="black" />
          </div>
        </div>
        <div class="text-base font-light text-base-gray">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { SlideProps } from './types'

defineProps<SlideProps>()
</script>

<style lang="scss" scoped>
.slide:hover .icon {
  transform: translateX(10px);
}
</style>
