<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <header>
      <div v-html="LogoSvgIco" class="svg-image" />
    </header>
    <!-- Main -->
    <main class="flex flex-col gap-6">
      <SearchInput />
      <!-- Suggestions -->
      <Block title="Suggestions">
        <!-- Link to Servives -->
        <template #header>
          <button
            @click="$router.push(RouterPath.services)"
            class="text-l transition-all hover:opacity-60"
          >
            See All
          </button>
        </template>
        <!-- Suggestions -->
        <div class="grid grid-cols-3 gap-3.5">
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
        <div class="slides flex gap-4 overflow-x-auto">
          <Slide
            img="/lux.png"
            title="Go in luxury"
            description="Elevated service, high-end cars"
            @click="$router.replace({ hash: RouterHash.lux })"
          />
          <Slide
            img="/comfort.png"
            title="Choose comfort"
            description="Top-rated drivers, newer cars"
            @click="$router.replace({ hash: RouterHash.comfort })"
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
import { RouterHash, RouterPath } from '@/router/types'
import { suggestionList } from '@/utils/suggestion-list.config'
</script>

<style lang="scss">
.svg-image {
  @apply flex;

  svg {
    @apply h-8 w-min;
  }
}

.slides {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
