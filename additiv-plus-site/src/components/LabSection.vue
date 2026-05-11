<template>
  <section id="lab" class="py-24 md:py-32 bg-beige">
    <div class="max-w-container mx-auto px-6 lg:px-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Лаборатория</span>
        <h2 class="mt-4 font-display text-section font-light text-graphite fade-up">Услуги нашей лаборатории</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="group relative p-8 rounded-2xl border border-border bg-white/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-champagne/5 fade-up"
        >
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500">
            <component :is="service.icon" />
          </div>

          <!-- Content -->
          <h3 class="font-display text-xl font-medium text-graphite mb-3">{{ service.title }}</h3>
          <p class="text-sm text-muted font-body leading-relaxed">{{ service.description }}</p>

          <!-- Hover line -->
          <div class="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const IconTest = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const IconFormula = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ])
  }
}

const IconCertificate = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
}

const IconAnalysis = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
    ])
  }
}

const services = [
  {
    icon: IconTest,
    title: 'Испытания материалов',
    description: 'Комплексные физико-механические и химические испытания строительных материалов и смесей.',
  },
  {
    icon: IconFormula,
    title: 'Разработка рецептур',
    description: 'Создание и оптимизация составов сухих строительных смесей под конкретные задачи.',
  },
  {
    icon: IconCertificate,
    title: 'Сертификация',
    description: 'Подготовка документации и проведение испытаний для получения сертификатов соответствия.',
  },
  {
    icon: IconAnalysis,
    title: 'Аналитика и исследования',
    description: 'Глубокий анализ химического состава, реологических и физико-механических свойств.',
  },
]
</script>