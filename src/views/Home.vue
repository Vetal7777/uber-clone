<template>
  <div class="gap-17.5 flex flex-col">
    <!-- Header -->
    <header>
      <div v-html="LogoSvgIco" class="svg-image" />
    </header>
    <!-- Main -->
    <main class="flex flex-col gap-12">
      <SearchInput />
      <!-- Suggestions -->
      <div class="flex flex-col gap-11">
        <!-- Suggestions header -->
        <div class="flex justify-between">
          <!-- Suggestions article -->
          <div class="text-4xl font-bold">Suggestions</div>
          <!-- See All link -->
          <button
            @click="$router.push(RouterPath.services)"
            class="text-2xl transition-all hover:opacity-60"
          >
            See All
          </button>
        </div>
        <!-- Suggestions list -->
        <div class="grid grid-cols-3 gap-7">
          <SuggestionItem
            v-for="({ promo, title, img }, key) in suggestionList"
            :key="key"
            :promo="promo"
            :title="title"
            :img="img"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import LogoSvgIco from '@/assets/img/logo.svg?raw'
import SearchInput from '@/components/SearchInput.vue'
import SuggestionItem from '@/components/SuggestionItem/SuggestionItem.vue'
import { RouterPath } from '@/router/types'
import { suggestionList } from '@/utils/suggestion-list.config'
</script>

<style lang="scss">
.svg-image {
  @apply flex;

  svg {
    @apply h-12 w-min;
  }
}
</style>
