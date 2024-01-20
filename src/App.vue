<template>
  <div
    class="flex min-h-screen w-screen flex-col justify-between overflow-auto"
  >
    <div class="px-5 py-10">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- Control bar -->
    <ControlBar />
  </div>
</template>

<script setup lang="ts">
import ControlBar from '@/components/ControlBar.vue'
</script>

<style lang="scss">
.slide-leave-active {
  transition: transform 0.175s ease-out;
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
