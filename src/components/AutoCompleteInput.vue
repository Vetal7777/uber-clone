<template>
  <div id="AutoCompleteInput" class="flex items-center">
    <input
      :id="theId"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="inputComputed"
      @click="emit('isActive', true)"
      type="text"
      class="text-md focus:shadow-outline w-full bg-gray-100 px-3 py-2.5 leading-tight text-gray-700 focus:bg-gray-200 focus:outline-none"
    />
    <WindowCloseIcon @click="emit('clearInput')" fillColor="#2e2e2d" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, toRefs, withDefaults } from 'vue'
import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue'

const emit = defineEmits(['isActive', 'update:input', 'clearInput'])

type Props = {
  theId: string
  input: string
  placeholder: string
}
const props = withDefaults(defineProps<Props>(), {})
const { theId, input, placeholder } = toRefs(props)

const inputComputed = computed<string>({
  get: () => input.value,
  set: (value) => emit('update:input', value)
})
</script>
