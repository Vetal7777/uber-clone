<template>
  <div class="flex flex-col gap-5 sm:gap-16">
    <!-- Services header -->
    <div class="flex justify-between">
      <!-- Services article -->
      <div class="text-4xl font-bold sm:text-6xl">Services</div>
      <!-- See All link -->
    </div>

    <Block title="Go anywhere, get anything">
      <div class="grid grid-cols-3 gap-7">
        <!-- Suggestions -->
        <SuggestionItem
          v-for="({ promo, title, img }, key) in suggestionList"
          :key="key"
          :promo="promo"
          :title="title"
          :img="img"
        />
      </div>
    </Block>
  </div>
</template>

<script setup lang="ts">
import Block from '@/components/Block/Block.vue'
import SuggestionItem from '@/components/SuggestionItem/SuggestionItem.vue'
import { suggestionList } from '@/utils/suggestion-list.config'
</script>
