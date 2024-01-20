<template>
  <div
    class="flex min-h-screen w-screen flex-col justify-between overflow-auto"
  >
    <div class="px-5 py-10">
      <router-view v-slot="{ Component }">
        <!-- Route View -->
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
        <!-- Popup -->
        <transition>
          <Popup v-if="popup" />
        </transition>
      </router-view>
    </div>
    <!-- Control bar -->
    <ControlBar />
  </div>
</template>

<script setup lang="ts">
import ControlBar from '@/components/ControlBar.vue'
import Popup from '@/components/Popups/PopupContainer.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const popup = computed(() => router.currentRoute.value.hash)
</script>

<style lang="scss">
// Router transition
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
// Popup transition
.v-enter-active,
.v-leave-active {
  transition: transform 0.175s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translate(0, 100%);
}
</style>
