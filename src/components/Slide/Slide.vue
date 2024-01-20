<template>
  <div class="min-w-110 max-w-110 flex cursor-pointer flex-col gap-6">
    <img :src="img" class="w-full rounded-2xl" lazy />
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 text-3xl">
          {{ title }}
          <Icon icon="majesticons:arrow-right" color="black" />
        </div>
        <div class="text-2xl font-light text-base-gray">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlideProps } from './types'
import { Icon } from '@iconify/vue'

defineProps<SlideProps>()
</script>

<style lang="scss" scoped></style>
