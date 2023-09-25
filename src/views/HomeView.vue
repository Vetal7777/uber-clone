<template>
  <div id="Home" class="flex h-screen flex-col">
    <div class="m-3 mb-auto">
      <div class="my-20">
        <img src="img/uber/uber2.svg" alt="" width="150" />
      </div>

      <div class="my-3 grid grid-cols-2 gap-3">
        <ServiceSelectLarge text="Ride" image-width="74" image="ride" />
        <ServiceSelectLarge text="Food" image-width="74" image="food" promo />
      </div>

      <div class="my-3 grid grid-cols-4 gap-3">
        <ServiceSelectSmall text="2 Wheels" image="2wheels" />
        <ServiceSelectSmall text="Transit" image="transit" />
        <ServiceSelectSmall text="Reserve" image="reserve" />
        <ServiceSelectSmall text="Travel" image="travel" />
      </div>

      <div
        class="bg-custom-color flex h-14 w-full items-center rounded-full p-3"
      >
        <MagnifyIcon size="40" />
        <div class="ml-3 text-xs font-semibold text-gray-700">
          Enter pick-up point
        </div>
      </div>
    </div>

    <footer
      class="z-50 mb-2 flex w-full justify-around border-t-2 border-t-gray-200 p-1"
    >
      <div class="grid place-items-center">
        <HomeIcon size="30" fillColor="#1f1e1e" />
        <div
          class="-mr-1 w-full text-center text-xs font-semibold text-gray-800"
        >
          Home
        </div>
      </div>
      <div class="grid place-items-center">
        <MapMarkerIcon size="30" fillColor="#b3b1b1" />
        <div
          class="-mr-1 w-full text-center text-xs font-semibold text-gray-400"
        >
          Destination
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import ServiceSelectLarge from '../components/ServiceSelectLarge.vue'
import ServiceSelectSmall from '../components/ServiceSelectSmall.vue'

import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
</script>

<style scoped lang="scss">
#Home {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }
}
</style>
