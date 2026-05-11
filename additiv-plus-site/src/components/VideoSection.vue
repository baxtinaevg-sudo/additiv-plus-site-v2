<template>
  <section id="video" class="py-24 md:py-32 bg-white relative">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Видео</span>
        <h2 class="mt-4 font-display text-section font-light text-graphite fade-up">Посмотрите, как мы работаем</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- Video embed -->
      <div class="fade-up">
        <div class="relative aspect-video rounded-2xl overflow-hidden border border-border bg-graphite/5 shadow-xl shadow-champagne/5">
          <!-- Placeholder — replace src with actual YouTube/Vimeo embed -->
          <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite/90 to-graphite">
            <button
              @click="playing = true"
              class="group relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center hover:bg-champagne/30 transition-all duration-500"
              data-cursor="pointer"
            >
              <svg class="w-8 h-8 md:w-10 md:h-10 text-champagne-light ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div class="absolute bottom-6 left-6 right-6 text-center">
              <p class="text-champagne-light/60 font-body text-sm tracking-wider uppercase">Аддитив Плюс — Производство и лаборатория</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const playing = ref(false)
</script>