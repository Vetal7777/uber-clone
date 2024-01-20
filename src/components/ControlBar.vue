<template>
  <div
    class="fixed bottom-0 grid w-full grid-cols-2 border-t-2 border-t-base-gray bg-white"
  >
    <ControlBarButton
      v-for="({ title, iconifyName, routerName }, index) in controlBarList"
      :title="title"
      :iconifyName="iconifyName"
      :index="index"
      :actvie="activeRoute(routerName)"
      @click="$router.push({ name: routerName })"
    />
  </div>
</template>

<script setup lang="ts">
import ControlBarButton from '@/components/ControlBarButton/ControlBarButton.vue'
import { RouterName } from '@/router/types'
import { controlBarList } from '@/utils/control-bar.config'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name)

const activeRoute = (routeName: RouterName): boolean =>
  currentRoute.value === routeName
</script>
