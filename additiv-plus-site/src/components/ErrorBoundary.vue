<template>
  <div v-if="hasError" class="error-boundary min-h-screen flex items-center justify-center bg-beige">
    <div class="max-w-md px-6 text-center">
      <div class="text-6xl mb-4">😕</div>
      <h2 class="font-display text-2xl text-graphite mb-4">Что-то пошло не так</h2>
      <p class="text-muted font-body mb-6">
        Приносим извинения за неудобства. Пожалуйста, перезагрузите страницу.
      </p>
      <button
        @click="reload"
        class="px-6 py-3 bg-champagne text-graphite font-body font-medium rounded-full hover:bg-champagne-light transition-colors"
      >
        Перезагрузить страницу
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)

onErrorCaptured((err) => {
  hasError.value = true
  console.error('ErrorBoundary caught:', err)
  return false // Предотвращаем распространение ошибки выше
})

function reload() {
  window.location.reload()
}
</script>
