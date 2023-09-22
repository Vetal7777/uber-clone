<template>
  <div id="Home" class="flex h-screen flex-col">
    <div class="m-3 mb-auto">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceSelectLarge from '../components/ServiceSelectLarge.vue'
import ServiceSelectSmall from '../components/ServiceSelectSmall.vue'
</script>
