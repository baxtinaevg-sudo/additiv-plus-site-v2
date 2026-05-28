<template>
  <section class="py-24 md:py-32 bg-graphite relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/5 rounded-full blur-3xl"></div>

    <div class="max-w-container mx-auto px-6 lg:px-10 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-sm font-body font-medium text-champagne tracking-widest uppercase fade-up">Преимущества</span>
        <h2 class="mt-4 font-display text-section font-light text-beige fade-up">Почему выбирают нас</h2>
        <div class="section-divider mx-auto mt-6 fade-up"></div>
      </div>

      <!-- USP items -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        <div
          v-for="(usp, i) in uspItems"
          :key="i"
          class="group relative p-8 rounded-2xl border border-champagne/10 bg-champagne/5 hover:bg-champagne/10 transition-all duration-500 fade-up"
        >
          <!-- Icon wrapper with number -->
          <div class="relative w-16 h-16 mx-auto mb-6">
            <!-- Number background -->
            <div class="absolute inset-0 text-[80px] font-display text-champagne/5 leading-none">{{ i + 1 }}</div>
            <!-- Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <component :is="usp.icon" />
            </div>
          </div>

          <!-- Content -->
          <h3 class="font-display text-lg font-medium text-beige text-center mb-3">{{ usp.title }}</h3>
          <p class="text-sm text-champagne-light/60 font-body text-center leading-relaxed">{{ usp.description }}</p>

          <!-- Hover glow -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-champagne/0 to-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const IconLab = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const IconTeam = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
    ])
  }
}

const IconQuality = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
}

const IconFast = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
    ])
  }
}

const IconCustom = {
  render() {
    return h('svg', { class: 'w-8 h-8 text-champagne', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
}

const uspItems = [
  {
    icon: IconLab,
    title: 'Собственная лаборатория',
    description: 'Полный цикл испытаний и разработок под ваши задачи',
  },
  {
    icon: IconTeam,
    title: 'Профессиональная команда',
    description: 'Химики-технологи и инженеры с многолетним стажем',
  },
  {
    icon: IconQuality,
    title: 'Гарантия качества',
    description: '100% ГОСТ, строгий входной контроль сырья',
  },
  {
    icon: IconFast,
    title: 'Оперативность',
    description: 'Срок ответа 0 ч — реагируем мгновенно',
  },
  {
    icon: IconCustom,
    title: 'Индивидуальный подход',
    description: 'Решения, адаптированные под ваши требования',
  },
]
</script>
