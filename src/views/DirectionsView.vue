<template>
  <div id="Directions">
    <div class="mt-4 grid grid-cols-12 shadow-md">
      <div class="col-span-2 mx-auto">
        <div>
          <ArrowIcon size="35" />
        </div>

        <div class="mt-4 h-16 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']"></div>
          <div class="line"></div>
          <div
            :class="[!isPickupActive ? 'square-black' : 'square-gray']"
          ></div>
        </div>
      </div>

      <div class="col-span-10 pr-4">
        <div class="h-5 w-full"></div>

        <div class="mb-2 mt-5">
          <AutoCompleteInput
            the-id="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @is-active="isPickupActive = true"
          />
        </div>

        <div class="mb-3">
          <AutoCompleteInput
            the-id="secondInput"
            v-model:input="destination"
            placeholder="Where to ?"
            @is-active="isPickupActive = false"
          />
        </div>
      </div>
    </div>

    <div class="custom-border-bottom flex items-center">
      <div class="mx-5 my-3.5 rounded-full bg-gray-400 p-1.5">
        <MapMarkerIcon size="30" fillColor="#f5f5f5" />
      </div>

      <div>
        <div class="text-lg text-gray-600">London, UK</div>
        <div class="text-lg text-gray-400">UK</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AutoCompleteInput from '@/components/AutoCompleteInput.vue'
import { ref } from 'vue'
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'

const isPickupActive = ref<boolean>(true)
const pickup = ref<string>('')
const destination = ref<string>('')
</script>

<style scoped lang="scss">
#Directions {
  .bg-custom-color {
    background-color: rgb(237, 237, 237);
  }

  .circle-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
    border-radius: 100%;
  }

  .circle-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }

  .square-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
  }

  .square-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
  }

  .line {
    margin: 0 auto;
    width: 2px;
    height: 45px;
    background-color: rgb(191, 191, 191);
  }

  .custom-border-bottom {
    border-bottom: 1px solid rgb(230, 230, 230);
  }
}
</style>
