<template>
  <div class="gap-17.5 flex h-screen w-screen flex-col px-5 py-10 outline-none">
    <!-- Header -->
    <header>
      <div v-html="LogoSvgIco" class="svg-image" />
    </header>
    <!-- Main -->
    <main class="flex flex-col gap-12">
      <SearchInput />
      <!-- Suggestions -->
      <div class="flex flex-col gap-11">
        <!-- Suggestions article -->
        <div class="text-4xl font-bold">Suggestions</div>
        <!-- Suggestions list -->
        <div class="grid grid-cols-3 gap-4">
          <SuggestionItem title="Ride" src="ride.png" />
          <SuggestionItem title="Package" src="package.png" />
          <SuggestionItem title="Reserve" src="reserve.png" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import LogoSvgIco from '@/assets/img/logo.svg?raw'
import SearchInput from '@/components/SearchInput.vue'
import SuggestionItem from '@/components/SuggestionItem/SuggestionItem.vue'
</script>

<style lang="scss">
.svg-image {
  @apply flex;

  svg {
    @apply h-12 w-min;
  }
}
</style>
