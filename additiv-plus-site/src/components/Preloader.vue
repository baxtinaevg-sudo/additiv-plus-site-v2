<template>
  <div ref="preloaderEl" class="preloader">
    <div class="preloader-content">
      <!-- Line 1: АДДИТИВ ПЛЮС -->
      <div class="preloader-line">
        <span
          v-for="(char, i) in line1Chars"
          :key="'l1-' + i"
          ref="line1Refs"
          class="preloader-char"
          :class="{ space: char === ' ' }"
        >{{ char }}</span>
      </div>
      <!-- Line 2: ПРЕДСТАВЛЯЕТ... -->
      <div class="preloader-line mt-4">
        <span
          v-for="(char, i) in line2Chars"
          :key="'l2-' + i"
          ref="line2Refs"
          class="preloader-char"
          :class="{ space: char === ' ' }"
        >{{ char }}</span>
      </div>
    </div>
    <!-- Subtle glow -->
    <div ref="glowEl" class="preloader-glow"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const preloaderEl = ref(null)
const glowEl = ref(null)
const line1Refs = ref([])
const line2Refs = ref([])

const line1Chars = 'АДДИТИВ ПЛЮС'.split('')
const line2Chars = 'ПРЕДСТАВЛЯЕТ...'.split('')

onMounted(() => {
  const allChars = [...(line1Refs.value || []), ...(line2Refs.value || [])]

  // Phase 1: All chars invisible initially
  gsap.set(allChars, { opacity: 0, y: 20 })
  gsap.set(glowEl.value, { opacity: 0 })

  const tl = gsap.timeline()

  // Phase 2: Reveal letters one by one
  tl.to(allChars, {
    opacity: 1,
    y: 0,
    duration: 0.08,
    stagger: 0.06,
    ease: 'power2.out',
  })

  // Phase 3: Glow appears
  tl.to(glowEl.value, {
    opacity: 0.3,
    duration: 0.8,
    ease: 'power2.inOut',
  }, '-=0.5')

  // Phase 4: Hold
  tl.to({}, { duration: 1.5 })

  // Phase 5: Fade out everything
  tl.to(preloaderEl.value, {
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut',
    onComplete: () => {
      if (preloaderEl.value) preloaderEl.value.remove()
    },
  })
})
</script>