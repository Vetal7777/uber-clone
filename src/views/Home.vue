<template>
  <div class="flex flex-col gap-17.5">
    <!-- Header -->
    <header>
      <div v-html="LogoSvgIco" class="svg-image" />
    </header>
    <!-- Main -->
    <main class="flex flex-col gap-12">
      <SearchInput />
      <!-- Suggestions -->
      <Block title="Suggestions">
        <!-- Link to Servives -->
        <template #header>
          <button
            @click="$router.push(RouterPath.services)"
            class="text-2xl transition-all hover:opacity-60"
          >
            See All
          </button>
        </template>
        <!-- Suggestions -->
        <div class="grid grid-cols-3 gap-7">
          <SuggestionItem
            v-for="({ promo, title, img }, key) in suggestionList"
            :key="key"
            :promo="promo"
            :title="title"
            :img="img"
          />
        </div>
      </Block>
      <!-- Ways -->
      <Block title="More ways to use Uber">
        <div class="flex gap-7 overflow-x-auto">
          <Slide
            img="/lux.png"
            title="Go in luxury"
            description="Elevated service, high-end cars"
            @click="$router.replace({ hash: '#lux' })"
          />
        </div>
      </Block>
    </main>
  </div>
</template>

<script setup lang="ts">
import LogoSvgIco from '@/assets/img/logo.svg?raw'
import Block from '@/components/Block/Block.vue'
import SearchInput from '@/components/SearchInput.vue'
import Slide from '@/components/Slide/Slide.vue'
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
