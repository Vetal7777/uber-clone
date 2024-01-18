<template>
  <div class="flex h-screen w-screen flex-col gap-4 p-4 outline-none">
    <!-- Header -->
    <header>
      <div v-html="LogoSvgIco" class="svg-image" />
    </header>
    <!-- Main -->
    <main></main>
  </div>
</template>

<script setup lang="ts">
import LogoSvgIco from "@/assets/img/logo.svg?raw";
</script>

<style lang="scss">
.svg-image {
  @apply flex;

  svg {
    @apply h-14 w-min;
  }
}
</style>
