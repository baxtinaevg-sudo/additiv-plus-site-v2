<template>
  <section class="py-24 md:py-32 bg-graphite relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-3xl"></div>

    <div class="max-w-container mx-auto px-6 lg:px-10 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Команда</span>
        <h2 class="mt-4 font-display text-section font-light text-beige fade-up">Эксперты с многолетним стажем</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- Team stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center p-6 rounded-xl bg-champagne/5 border border-champagne/10 fade-up"
        >
          <div class="font-display text-4xl md:text-5xl font-light text-champagne">{{ stat.value }}</div>
          <p class="mt-2 text-sm text-champagne-light/70 font-body">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Expertise areas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(area, i) in areas"
          :key="i"
          class="group relative p-8 rounded-2xl border border-champagne/10 bg-champagne/5 hover:bg-champagne/10 transition-all duration-500 fade-up"
        >
          <!-- Icon -->
          <div class="w-14 h-14 rounded-xl bg-champagne/10 flex items-center justify-center mb-6 group-hover:bg-champagne/20 transition-colors duration-500">
            <component :is="area.icon" />
          </div>

          <!-- Content -->
          <h3 class="font-display text-xl font-medium text-beige mb-3">{{ area.title }}</h3>
          <p class="text-sm text-champagne-light/60 font-body leading-relaxed">{{ area.description }}</p>

          <!-- Hover line -->
          <div class="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-champagne to-champagne-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 fade-up">
        <p class="text-champagne-light/60 font-body text-base">
          Каждый член нашей команды — эксперт с профильным образованием и многолетним опытом работы в химической промышленности.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const IconChemist = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const IconEngineer = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
}

const IconSupport = {
  render() {
    return h('svg', { class: 'w-7 h-7 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' })
    ])
  }
}

const stats = [
  { value: '37', label: 'Специалистов' },
  { value: '100+', label: 'Лет стажа' },
  { value: '4', label: 'Лаборатории' },
  { value: '24/7', label: 'Поддержка' },
]

const areas = [
  {
    icon: IconChemist,
    title: 'Химики-технологи',
    description: 'Разработка рецептур, синтез добавок, лабораторные испытания и контроль качества.',
  },
  {
    icon: IconEngineer,
    title: 'Инженеры-технологи',
    description: 'Внедрение в производство, настройка оборудования, оптимизация технологических процессов.',
  },
  {
    icon: IconSupport,
    title: 'Техническая поддержка',
    description: 'Консультации на объекте, подбор добавок под задачи, сопровождение от заявки до отгрузки.',
  },
]
</script>
