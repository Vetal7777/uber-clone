<template>
  <div class="fixed bottom-0 left-0 h-screen w-screen">
    <component :is="currentPopup" @close="onClose" />
  </div>
</template>

<script setup lang="ts">
import { RouterHash } from '@/router/types'
import { popupConfig } from '@/utils/popup.config'
import { ComputedRef, computed } from 'vue'
import { useRouter } from 'vue-router'
import { PopupComponentName } from './types'

const router = useRouter()

const currentPopup = computed<PopupComponentName | null>(() => {
  if (currentHash.value) {
    return popupConfig[currentHash.value]
  } else {
    return null
  }
})
const currentHash: ComputedRef<RouterHash | null> = computed(() => {
  switch (router.currentRoute.value.hash) {
    case RouterHash.lux:
      return RouterHash.lux
  }

  return null
})

const onClose = () => router.replace({ hash: '' })
</script>
