<template>
  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="pathHtml" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  path: {
    type: String,
    required: true
  }
})

const pathHtml = computed(() => {
  return `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${props.path}" />`
})
</script>
