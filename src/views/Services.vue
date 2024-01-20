<template>
  <div class="flex flex-col gap-16">
    <!-- Services header -->
    <div class="flex justify-between">
      <!-- Services article -->
      <div class="text-6xl font-bold">Services</div>
      <!-- See All link -->
    </div>
    <div class="flex flex-col gap-10">
      <!-- Message -->
      <div class="text-4xl font-bold">Go anywhere, get anything</div>
      <!-- Services list -->
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
  </div>
</template>

<script setup lang="ts">
import SuggestionItem from '@/components/SuggestionItem/SuggestionItem.vue'
import { suggestionList } from '@/utils/suggestion-list.config'
</script>
