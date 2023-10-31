<template>
  <div id="MapView">
    <div id="map"></div>
    <div id="VehicleSelection" class="w-full">
      <div class="h-2 w-full border-t"></div>
      <div
        class="w-full border-t-2 p-1.5 text-center text-lg font-semibold text-gray-700"
      >
        Distance - 50
      </div>

      <div class="scrollSection">
        <div class="bg-custom-gray">
          <div class="px4 flex items-center py-5">
            <img src="img/uber/ride.png" width="75" />
            <div class="ml-3 w-full">
              <div class="flex items-center justify-between">
                <div class="mb-1 text-2xl">UberX</div>
                <div class="text-xl">₤55.5</div>
              </div>

              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
        </div>

        <div>
          <div class="px4 flex items-center py-5">
            <img src="img/uber/comfort.png" width="75" />
            <div class="ml-3 w-full">
              <div class="flex items-center justify-between">
                <div class="mb-1 text-2xl">UberX</div>
                <div class="text-xl">₤55.5</div>
              </div>

              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
        </div>

        <div>
          <div class="px4 flex items-center py-5">
            <img src="img/uber/uberxl.png" width="75" />
            <div class="ml-3 w-full">
              <div class="flex items-center justify-between">
                <div class="mb-1 text-2xl">UberX</div>
                <div class="text-xl">₤55.5</div>
              </div>

              <div class="text-gray-500">7 hours</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-0 flex w-full items-center justify-center bg-white px-4 py-6 shadow-inner"
      >
        <button
          class="w-full rounded-sm bg-black px-4 py-4 text-2xl text-white"
        >
          Confirm UberX
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    initMap()
  }, 50)
})

const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false
  })

  console.log(map)
}
</script>

<style scoped lang="scss">
#MapView {
  #map {
    width: 100%;
    height: 45vh;
    top: 0;
    left: 0;
  }
  .bg-custom-gray {
    background-color: rgb(237, 237, 237);
  }
  ::v-deep .gm-style-cc {
    display: none;
  }

  #VehicleSelection {
    .scrollSection {
      height: calc(50vh - 120px);
      position: absolute;
      overflow-y: auto;
      width: 100%;
    }
  }
}
</style>
