<template>
  <div id="ServiceSelectLarge">
    <div class="bg-custom-color custom-height w-full rounded-2xl">
      <div v-if="promo" class="relative z-10 w-full">
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-green-700 p-0.5 px-2 text-xs text-gray-100"
          >Promo</span
        >
      </div>

      <div class="flex justify-between p-2">
        <div class="ml-2 mt-14 text-lg text-gray-900">{{ text }}</div>

        <div class="mr-1 mt-3">
          <img :src="`img/uber/${image}.png`" alt="" :width="imageWidth" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, withDefaults } from 'vue'

type Props = {
  text: string
  imageWidth: string
  image: string
  promo: boolean
}
const props = withDefaults(defineProps<Props>(), {
  promo: false
})

const { text, imageWidth, image, promo } = toRefs(props)
</script>

<style scoped lang="scss">
#ServiceSelectLarge {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }

  .custom-height {
    height: 100px;
  }
}
</style>
