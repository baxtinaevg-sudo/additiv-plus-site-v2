<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite">
    <!-- Three.js Molecule -->
    <MoleculeScene />

    <!-- Gradient overlay — lighter at top for nav visibility -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-graphite/70 z-[1]"></div>

    <!-- Content -->
    <div class="relative z-[2] text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-4">
      <!-- Title (moves UP when molecules assemble) -->
      <div ref="titleBlockRef" class="hero-title-wrapper">
        <h1 class="hero-title font-display text-champagne-light font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]">
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
      <div ref="subtitleBlockRef" class="hero-title-wrapper">
        <h2 class="hero-title font-display text-champagne-light font-light tracking-tight text-[clamp(1.8rem,4.5vw,4.5rem)]">
          <span class="word">
            <span
              class="word-inner"
              ref="subtitleWordRef"
            >Инновационные добавки</span>
          </span>
        </h2>
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

  // Phase 2: At 3s, spread title UP and subtitle DOWN — symmetric
  // Calculate distance so molecules are exactly centered between text lines
  const lineHeight = titleBlockRef.value?.offsetHeight || 60
  const gap = 16 // gap-4 in pixels
  const spreadDistance = (lineHeight + gap + Math.min(window.innerHeight * 0.08, 60)) / 2 * 2 / 3

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
})
</script>