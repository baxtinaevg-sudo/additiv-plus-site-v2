<template>
  <!-- Preloader -->
  <Preloader />


  <!-- Grain Overlay -->
  <div class="grain-overlay"></div>

  <!-- Legal Pages (по hash) -->
  <template v-if="currentHash === '#privacy'">
    <AppNav />
    <PrivacyPolicy />
    <AppFooter />
  </template>
  <template v-else-if="currentHash === '#terms'">
    <AppNav />
    <TermsOfService />
    <AppFooter />
  </template>

  <!-- Main Content -->
  <template v-else>
    <AppNav />
    <main>
      <HeroSection />
      <MarqueeSection />
      <UspSection />
      <ProductsSection />
      <StatsSection />
      <TrustSection />
      <TeamSection />
      <LabSection />
      <VideoSection />
      <FaqSection />
      <AboutSection />
      <CtaSection />
    </main>
    <AppFooter />
  </template>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useLenis } from './composables/useLenis'
import Preloader from './components/Preloader.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeSection from './components/MarqueeSection.vue'
import UspSection from './components/UspSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import StatsSection from './components/StatsSection.vue'
import TrustSection from './components/TrustSection.vue'
import TeamSection from './components/TeamSection.vue'
import AboutSection from './components/AboutSection-v5.vue'
import LabSection from './components/LabSection.vue'
import VideoSection from './components/VideoSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import TermsOfService from './components/TermsOfService.vue'

// Hash routing для юридических страниц
const currentHash = ref('')

// Проверяем hash при загрузке и изменении URL
const updateHash = () => {
  currentHash.value = window.location.hash
}

onMounted(() => {
  updateHash()
  window.addEventListener('hashchange', updateHash)
  initAnimations()
})

// Smooth scroll
useLenis()

// Initialize scroll animations & magnetic buttons
const initAnimations = () => {
  // Scroll-based fade-up animations
  const fadeElements = document.querySelectorAll('.fade-up')
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          fadeObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  fadeElements.forEach((el) => fadeObserver.observe(el))

  // Magnetic buttons
  document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const text = btn.querySelector('.btn-text')

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      if (text) {
        text.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
      }
    })

    btn.addEventListener('mouseleave', () => {
      const text = btn.querySelector('.btn-text')
      btn.style.transform = 'translate(0, 0)'
      if (text) {
        text.style.transform = 'translate(0, 0)'
      }
    })
  })
}

// Перематываем наверх при смене страницы
watch(currentHash, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
