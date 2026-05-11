<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite">
    <!-- Three.js Molecule -->
    <MoleculeScene />

    <!-- Gradient overlay — lighter at top for nav visibility -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/70 z-[1]"></div>

    <!-- Content -->
    <div class="relative z-[2] text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
      <!-- Title (moves UP when molecules assemble) -->
      <div ref="titleBlockRef" class="hero-title-wrapper">
        <h1 class="hero-title font-display text-beige font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]">
          <span v-for="(word, i) in words" :key="i" class="word">
            <span
              class="word-inner"
              :ref="el => wordEls[i] = el"
            >{{ word }}</span>
            <span class="inline-block w-[0.3em]"></span>
          </span>
        </h1>
      </div>

      <!-- Subtitle — same size/style as title (moves DOWN when molecules assemble) -->
      <div ref="subtitleBlockRef">
        <h2 class="hero-title font-display text-champagne-light/80 font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]">
          <span class="word">
            <span
              class="word-inner"
              ref="subtitleWordRef"
            >Инновационные добавки</span>
          </span>
        </h2>
      </div>

      <!-- CTA — stays in center, separate from spread -->
      <div
        ref="ctaRef"
        class="mt-8 opacity-0 translate-y-4"
      >
        <a
          href="#products"
          class="magnetic-btn inline-flex items-center gap-3 px-8 py-3.5 border border-champagne/30 text-champagne/80 rounded-full hover:bg-champagne/10 hover:border-champagne/50 hover:text-champagne transition-all duration-500 text-sm font-body font-medium tracking-wider uppercase"
          data-cursor="pointer"
        >
          <span class="btn-text">Узнать больше</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 opacity-60">
      <span class="text-xs font-body text-champagne-light tracking-widest uppercase">Scroll</span>
      <div class="w-[1px] h-8 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import MoleculeScene from './MoleculeScene.vue'

const words = ['Мы', 'творим', 'будущее']
const wordEls = ref([])
const subtitleWordRef = ref(null)
const ctaRef = ref(null)
const titleBlockRef = ref(null)
const subtitleBlockRef = ref(null)

onMounted(async () => {
  await nextTick()

  // Phase 1: Initial entrance animation
  const tl = gsap.timeline({ delay: 0.5 })

  wordEls.value.forEach((el, i) => {
    if (!el) return
    tl.to(el, {
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, i * 0.15)
  })

  // Subtitle word appears right after title
  tl.to(subtitleWordRef.value, {
    y: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.5')

  tl.to(ctaRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  }, '-=0.5')

  // Phase 2: At 3s, spread title UP and subtitle DOWN — gentle & proportional
  // Use smaller distance that scales with text size, not viewport height
  const spreadDistance = Math.min(window.innerHeight * 0.06, 60)
  gsap.to(titleBlockRef.value, {
    y: -spreadDistance,
    duration: 3,
    ease: 'power2.inOut',
    delay: 3,
  })

  gsap.to(subtitleBlockRef.value, {
    y: spreadDistance,
    duration: 3,
    ease: 'power2.inOut',
    delay: 3,
  })

  // Fade CTA slightly during spread so it doesn't conflict with molecule text
  gsap.to(ctaRef.value, {
    opacity: 0.5,
    duration: 3,
    ease: 'power2.inOut',
    delay: 3,
  })
})
</script>