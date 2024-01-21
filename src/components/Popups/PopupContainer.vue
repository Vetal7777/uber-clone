<template>
  <div
    v-if="currentPopup"
    class="fixed bottom-0 left-0 z-20 h-screen w-screen overflow-auto"
  >
    <component :is="currentPopup" />
    <button
      class="absolute left-5 top-5 z-10 rounded-full bg-white p-1 transition-all hover:scale-110"
      @click="$emit('close')"
    >
      <Icon icon="material-symbols:close" class="text-2xl" сolor="black" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { RouterHash } from '@/router/types'
import { popupMap } from '@/utils/popup.config'
import { Icon } from '@iconify/vue'
import { ComputedRef, computed } from 'vue'
import { useRouter } from 'vue-router'
import { PopupComponentName } from './types'

const router = useRouter()

const currentPopup = computed<PopupComponentName | null>(() => {
  if (currentHash.value) {
    return popupMap[currentHash.value]
  } else {
    return null
  }
})
const currentHash: ComputedRef<RouterHash | null> = computed(() => {
  const hash = router.currentRoute.value.hash

  switch (hash) {
    case RouterHash.lux:
      return RouterHash.lux
      break
    case RouterHash.comfort:
      return RouterHash.comfort
      break
  }

  if (hash !== RouterHash.empty) {
    throw new Error(`Couldn't find popup with hash ${hash}`)
  }

  return null
})
</script>
