<template>
  <div id="ServiceSelectSmall">
    <div class="bg-custom-color custom-height relative w-full rounded-2xl">
      <div
        class="absolute left-1/3 top-1/3 mt-0.5 -translate-x-1/4 -translate-y-1/4 transform"
      >
        <img :src="`img/uber/${image}.png`" alt="" width="55" />
      </div>
    </div>
    <div class="mt-2 text-center text-xs text-gray-900">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

type Props = {
  text: string
  image: string
}
const props = defineProps<Props>()

const { text, image } = toRefs(props)
</script>

<style scoped lang="scss">
#ServiceSelectSmall {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }

  .custom-height {
    height: 70px;
  }
}
</style>
